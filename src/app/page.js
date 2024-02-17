import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React from 'react'

const Home = () => {
  const isLoggedIn = true
  const isAdmin = true
  return (
    <>
      <div className="absolute right-0 top-0 flex gap-x-4 p-4">
        {isLoggedIn ? <Button>Sign Out</Button> : <Button>Sign In</Button>}
        {isAdmin && (
          <Link href={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
        )}
      </div>
      <div className="flex h-screen items-center justify-center">
        <h1 className='font-bold text-5xl'>Hi, User</h1>
      </div>
    </>
  );
}

export default Home