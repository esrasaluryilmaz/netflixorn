import React from "react";
import { Link } from "react-router-dom";
import { IoBookmarks } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const list = useSelector((store) => store.list);

  return (
    <header className="flex items-center justify-between mb-10">
      <Link to="/">
        <img src="/logo.svg" className="max-w-[150px]" alt="logo" />
      </Link>

      <Link
        className="flex gap-5 items-center hover:text-gray-300 transition"
        to="/watch-list"
      >
        <div className="relative">
          <IoBookmarks className="text-xl" />
          <span className="absolute right-[-13px] top-[-13px] bg-red-500 size-5 rounded-full grid place-items-center text-sm font-semibold">
            {list.length}
          </span>
        </div>
        <span>Izleme Listesi</span>
      </Link>
    </header>
  );
};

export default Header;
