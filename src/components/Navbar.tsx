'use client';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white">
      <Link href="/" className="font-bold text-xl">Psypher AI Events</Link>
      <div>
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
