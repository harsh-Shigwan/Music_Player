import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Player from "./Player";
import Display from "./Display";
import { PlayerContext } from "../context/PlayerContext";

const Home = () => {
    const {audioRef , track} =useContext(PlayerContext)
  return (
    <div className=" h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default Home;
