import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="hidden md:block">
      {isMenuOpen && (
        <div className="shadow-lg w-48 pl-4">
          <ul>
            <li className="hover:bg-gray-800 hover:text-white"><Link to={"/"}>Home</Link></li>
            <li className="hover:bg-gray-800 hover:text-white">Shorts</li>
            <li className="hover:bg-gray-800 hover:text-white">Subscriptions</li>
            <li className="hover:bg-gray-800 hover:text-white">Youtube Music</li>
          </ul>
          <h1 className="font-bold pt-5">Subscriptions</h1>
          <ul >
            <li className="hover:bg-gray-800 hover:text-white">Music</li>
            <li className="hover:bg-gray-800 hover:text-white">Sports</li>
            <li className="hover:bg-gray-800 hover:text-white">Gaming</li>
            <li className="hover:bg-gray-800 hover:text-white">Movies</li>
          </ul>

          <h1 className="font-bold pt-5">Explore</h1>
          <ul>
            <li className="hover:bg-gray-800 hover:text-white">Trending</li>
            <li className="hover:bg-gray-800 hover:text-white">Shopping</li>
            <li className="hover:bg-gray-800 hover:text-white">Music</li>
            <li className="hover:bg-gray-800 hover:text-white">Movies</li>
            <li className="hover:bg-gray-800 hover:text-white">Live</li>
            <li className="hover:bg-gray-800 hover:text-white">Gaming</li>
            <li className="hover:bg-gray-800 hover:text-white">News</li>
            <li className="hover:bg-gray-800 hover:text-white">Sports</li>
            <li className="hover:bg-gray-800 hover:text-white">Learning</li>
            <li className="hover:bg-gray-800 hover:text-white">Fashion & Beauty</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
