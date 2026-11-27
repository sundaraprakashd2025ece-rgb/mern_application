
import React from "react";

function Navbar({ onMenuClick }) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-2xl text-gray-700"
          aria-label="Open menu"
        >
          ☰
        </button>

        <div>
          <h1 className="text-lg font-bold text-slate-800">
            Resource<span className="text-blue-600">Hub</span>
          </h1>
          <p className="hidden sm:block text-xs text-gray-500">
            Resource Management System
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-72">
        <span className="text-gray-400 mr-2">⌕</span>
        <input
          type="text"
          placeholder="Search resources..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-xl text-gray-600" aria-label="Notifications">
          ♧
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">
            A
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">Admin</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
