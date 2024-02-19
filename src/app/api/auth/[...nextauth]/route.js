// import { createUser } from "@/actions/action";
// import { User } from "@/models/UserModel";
// import { connectToDB } from "@/utils/db";
// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";

// const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user }) {
//       const { name, email, image } = user;
//       try {
//         connectToDB();
//         const user = await User.exists({ email });
//         console.log("User already exists")
//         if (!user) {
//           createUser(name, email, image)
//           console.log("User created");
//         }
//       } catch (error) {
//         console.log(error);
//         throw new Error("Signin Failed");
//       }
//       return true
//     },
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from '@/utils/dbadapter'
import NextAuth from "next-auth/next";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          // Return the default fields
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          // Add a new one
          isAdmin: "false",
        };
      },
    }),
  ],
  secret: process.env.GOOGLE_CLIENT_SECRET,
  callbacks: {
    async session({ session, user }) {
      session.user.admin = user.admin;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };