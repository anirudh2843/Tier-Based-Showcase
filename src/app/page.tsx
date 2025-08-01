import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen  px-6 text-center space-y-8 font-sans">
      
      <h1 className="text-5xl font-extrabold text-indigo-800 drop-shadow-lg max-w-3xl mx-auto leading-tight">
        Welcome to <span className="text-teal-600">Psypher AI Events</span>
      </h1>
      <p className="text-lg text-yellow-600 max-w-md mx-auto">
        Discover exclusive events tailored to your membership tier. Upgrade anytime to unlock more!
      </p>

      <SignedOut>
        <Link href="/sign-in" className="max-w-xs mx-auto block group">
          <p className="mb-6 text-gray-700 transition group-hover:text-indigo-900">
            Sign in to access your tier-based events tailored just for you.
          </p>
          <button
            className="w-full px-8 py-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 
                       text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out
                       transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400"
          >
            Sign In
          </button>
        </Link>
      </SignedOut>

      <SignedIn>
        <Link href="/events" className="max-w-xs mx-auto block group">
          <button
            className="w-full px-8 py-3 bg-teal-600 hover:bg-teal-700 active:bg-teal-800
                       text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out
                       transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400"
          >
            View Events
          </button>
        </Link>
      </SignedIn>
    </main>
  );
}
