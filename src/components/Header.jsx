import React from "react";
// import link
import { Link } from "react-router-dom";
// import icon
import { RiHome2Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className="py-3 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="flex text-3xl font-semibold">
            <RiHome2Line color="#6D28D9" />
            <span className="text-violet-700 font-semibold">Real</span>Estate
          </h1>
        </Link>
        <div className="flex items-center gap-2 ml-8">
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 ml-2 py-2 rounded-lg transition"
            to="/"
          >
            Log out
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition"
            to="/"
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
