import React from "react";
import Link from "next/link";

interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="min-w-smallest">
      <header className="h-header bg-black flex items-center justify-center ">
        <div className="max-w-screen-xl mx-auto xs:mx-3 xs:mt-3 sm:mx-5 ipad-pro:mx-5 md:max-w-screen-lg md:mx-5 lg:max-w-screen-lg lg:mx-auto  w-full flex flex-row items-center justify-between mx-auto ">
          <span className="font-lato text-white">
            Premium{" "}
            <span className="inline-block bg-blue-600 pl-1 pr-1 rounded-md ml-1 text-xs">
              CAR
            </span>
          </span>

          <button className="lg:hidden md:hidden block">
            <svg
              fill="currentColor"
              className="text-white h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2z" />
            </svg>
          </button>
          <nav className="font-pt-sans font-300 hidden md:block lg:block">
            <Link href="/">
              <a className="text-white mr-5">Home </a>
            </Link>
            <Link href="/">
              <a className="text-white mr-5">Recipes </a>
            </Link>
            <Link href="/">
              <a className="text-white mr-5">Article </a>
            </Link>
            <Link href="/">
              <a className="text-white mr-5">Contact </a>
            </Link>
            <Link href="/">
              <a className="text-white mr-5">Purchase </a>
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-screen-xl mx-auto xs:mx-3 xs:mt-3 sm:mx-5 ipad-pro:mx-5 md:max-w-screen-lg md:mx-5 lg:max-w-screen-lg lg:mx-auto mt-5  min-w-smallest">
        {children}
      </main>
    </div>
  );
};

export default Layout;
