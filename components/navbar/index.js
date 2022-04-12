import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "../header";
import SearchBar from "./searchbar";

function NavLink({ to, children }) {
  return (
    <Link href={to} className={`mx-4`}>
      <a>{children}</a>
    </Link>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        <Link href="/" passHref>
          <a>
            <Image src="/fdn-logo.png" alt="me" width="130" height="40" />
          </a>
        </Link>{" "}
      </div>
      <div className="mt-4">
        <SearchBar />
      </div>
      <div className="flex flex-col ml-4">
        <Link href="/about" passHref>
          <a
            className="text-xl font-medium my-4 text-red"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            LOGIN / SIGNUP
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed w-full bg-white z-10">
      <nav className="flex filter bg-white pl-4 pr-0 py-0 h-16 items-center border-b-2">
        <MobileNav open={open} setOpen={setOpen} />
        <div className=" hidden md:flex w-2/12  items-center justify-center">
          <div className="flex items-center mr-2">
            <Image src="/burger-menu.svg" alt="menu" width="25" height="25" />
          </div>
          <Link href="/" passHref>
            <a>
              <Image src="/fdn-logo.png" alt="me" width="130" height="40" />
            </a>
          </Link>
        </div>
        <div className="hidden md:flex w-8/12 items-stretch">
          <SearchBar />
        </div>
        <div className="hidden md:flex w-2/12 h-full bg-red items-center justify-center text-white">
          <NavLink to="/contact">LOGIN / SIGNUP</NavLink>
        </div>
        <div className="flex justify-end items-center">
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>
        </div>
      </nav>
      <Header />
    </div>
  );
}
