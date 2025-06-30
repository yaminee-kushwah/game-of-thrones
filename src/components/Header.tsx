"use client";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignOutButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <a href="javascript:void(0)" className="max-sm:hidden">
            <img
              src="/assets/media2.jpg"
              alt="logo"
              className="w-18 h-15 rounded-full"
            />
          </a>
          <a href="javascript:void(0)" className="hidden max-sm:block">
            <img
              src="https://readymadeui.com/readymadeui-short.svg"
              alt="logo"
              className="w-9"
            />
          </a>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:block`}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
            >
              ✕
            </button>

            <ul className="lg:flex gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/"
                  className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                >
                  Home
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/characters"
                  className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                >
                  Characters
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/continents"
                  className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                >
                  Continents
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/blog"
                  className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                >
                  Blog
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/about"
                  className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                >
                  About
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/contact"
                  className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex max-lg:ml-auto space-x-4">
            {/* Show Login/Signup when signed out */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all">
                  Login
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all">
                  Sign up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <Link href="/user-profile">
                <button className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all">
                  Profile
                </button>
              </Link>
              <SignOutButton>
                <button className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all">
                  Sign out
                </button>
              </SignOutButton>
            </SignedIn>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden cursor-pointer"
            ></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
