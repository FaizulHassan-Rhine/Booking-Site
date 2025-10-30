"use client";

import Link from "next/link";
import { Facebook, Chrome } from "lucide-react";

export default function SignIn() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-center bg-cover"
      style={{ backgroundImage: "url('/images/AuthArea.jpg')" }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">Please Sign in</h1>
        <p className="text-center text-gray-500 text-base mb-6">You need to Sign in first to continue</p>
        <div className="flex w-full gap-4 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium bg-white hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Chrome className="h-5 w-5" /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium bg-white hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Facebook className="h-5 w-5 text-blue-600" /> Facebook
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="mx-3 text-gray-400 text-sm whitespace-nowrap">Or Sign in with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <form className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-800">Email</label>
            <input type="email" id="email" placeholder="example@email.com" className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-base" required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-800">Password</label>
            <input type="password" id="password" placeholder="Your password" className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-base" required />
          </div>
          <div className="flex justify-end pt-1"><Link href="#" className="text-blue-600 hover:underline text-sm font-medium">Forgot Password?</Link></div>
          <button type="submit" className="mt-1 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 text-lg transition">Sign In</button>
        </form>
        <div className="flex justify-center mt-6">
          <span className="text-gray-500">Don't have an account?</span>&nbsp;
          <Link href="/signup" className="text-blue-600 hover:underline font-medium">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}


