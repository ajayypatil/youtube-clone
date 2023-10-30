import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";
import Loader from "./Loader";

const VideoContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video.videos);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    
    dispatch(addVideos(json.items));
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col md:flex-wrap md:flex-row">
      {isLoading ? (
        <Loader />
      ) : (
        videos.map((video) => {
          const id = video?.id?.videoId ? (video.id.videoId):(video.id)
          return (
            <Link
              to={"/watch?v=" +id }
              key={video.id}
            >
              <VideoCard info={video} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default VideoContainer;
