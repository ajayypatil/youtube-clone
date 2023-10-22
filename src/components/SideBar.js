import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div>
      {isMenuOpen && (
        <div className="shadow-lg w-48 pl-4">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>Youtube Music</li>
          </ul>
          <h1 className="font-bold pt-5">Subscriptions</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>

          <h1 className="font-bold pt-5">Explore</h1>
          <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
            <li>Learning</li>
            <li>Fashion & Beauty</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
