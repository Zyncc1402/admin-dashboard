"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import { FcGoogle } from "react-icons/fc";
import { ImExit } from "react-icons/im";
import React from 'react'
import { Button } from '../ui/button';

const SigninButton = () => {
    const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <Button
          variant="secondary"
          className="flex gap-x-4 justify-around"
          onClick={() => signOut()}
        >
          <ImExit size={20} />
          Sign Out
        </Button>
      ) : (
        <Button
          variant="secondary"
          className="flex gap-x-4 justify-around"
          onClick={() => signIn("google")}
        >
          <FcGoogle size={20} />
          Sign In
        </Button>
      )}
    </div>
  );
}

export default SigninButton