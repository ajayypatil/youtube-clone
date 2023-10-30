import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Header from "./Header";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const vId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex flex-col md:flex-row">
        <div >
          <iframe
            className="w-[345px] md:w-[1100px]
            md:h-[550px]"
            src={"https://www.youtube.com/embed/" + vId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full mt-5 md:mt-0"><LiveChat/></div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
