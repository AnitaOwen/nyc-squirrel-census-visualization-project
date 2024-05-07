import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="max-w-4xl mx-15 px-4 py-2">
        <div className="flex justify-between items-center h-18">
          <Link to={"/"} className="text-3xl font-bold text-red-700 hover:text-red-400 shadow-2xl">Squirrel Scouts NYC</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar;