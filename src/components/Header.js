import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
   const timer =  setTimeout(() => getSearchSuggestions(), 200);

  return ()=> {
    clearTimeout(timer);
   }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-8 -mt-1 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        ></img>
        <img
          className="h-6 mx-1"
          alt="youtube-logo"
          src="https://www.gstatic.com/youtube/img/promos/growth/864dc47e45a7a0b06602f73155980de282b939a6d0adc7bdcda231f965bf796a_640x48.png"
        ></img>
      </div>
      <div className="col-span-10 px-5">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          className="w-1/2 p-2 border border-gray-400 rounded-l-full"
        />
        <button className="p-2 border border-gray-400 bg-gray-100 rounded-r-full">
          Search
        </button>
      </div>
      <div>
        <img
          className="h-8 col-span-1"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
