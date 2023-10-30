import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMenu, toggleMenu } from "../utils/appSlice";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { addVideos } from "../utils/videoSlice";
import { Link, useNavigate } from "react-router-dom";
import { clearMessage } from "../utils/chatSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const searchHandler = async () => {
    navigate("/");
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    dispatch(addVideos(json.items));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="sticky flex flex-col md:grid md:grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-8 -mt-1 cursor-pointer hidden md:block"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        ></img>
        <Link
          to={"/"}
          onClick={() => {
            dispatch(showMenu());
            dispatch(clearMessage());
            setSearchQuery("")
          }}
        >
          <img
            className="h-6 mx-6 md:mx-1 mb-2 md:mb-0"
            alt="youtube-logo"
            src="https://www.gstatic.com/youtube/img/promos/growth/864dc47e45a7a0b06602f73155980de282b939a6d0adc7bdcda231f965bf796a_640x48.png"
          ></img>
        </Link>
      </div>
      <div className="col-span-10 px-5">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() => {
            setShowSuggestions(true);
          }}
          onBlur={() => setShowSuggestions(false)}
          className="w-1/2 p-2 border border-gray-400 rounded-l-full"
        />
        <button
          onClick={() => {
            searchHandler();
          }}
          className="p-2 border border-gray-400 bg-gray-100 rounded-r-full"
        >
          Search
        </button>
      </div>
      {showSuggestions && (
        <ul className="fixed top-[100px] md:left-[480px] md:top-20 bg-white md:w-[448px] shadow-lg rounded-lg">
          <li>
            {suggestions.map((s) => {
              return (
                <div
                  id={s}
                  key={s}
                  className="px-2 py-2 shadow-sm border-gray-100 hover:bg-gray-100"
                >
                  {s}
                </div>
              );
            })}
          </li>
        </ul>
      )}
      <div>
        <img
          className="h-8 md:col-span-1 hidden md:block"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
