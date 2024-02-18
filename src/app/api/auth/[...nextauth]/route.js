import { createUser } from "@/actions/action";
import { User } from "@/models/UserModel";
import { connectToDB } from "@/utils/db";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { name, email, image } = user;
      try {
        connectToDB();
        const user = User.exists({ email });
        console.log("User already exists")
        console.log(user)
        if (user) {
          createUser(name, email, image)
          console.log("User created");
        }
      } catch (error) {
        console.log(error);
        throw new Error("Signin Failed");
      }
      return true
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
