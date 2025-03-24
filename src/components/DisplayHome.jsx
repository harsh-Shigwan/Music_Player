import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets/assets";
import AlbumItems from "./AlbumItems";
import SongItems from "./SongItems";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className=" mb-4">
      <h1 className=" my-5 font-bold text-2xl">Your Top playlist</h1>
      <div className="flex overflow-auto">
      {albumsData.map((item, index) => (
        <AlbumItems
          key={index}
          image={item.image}
          name={item.name}
          desc={item.desc}
          id={item.id}
        />
      ))}
    </div></div>
    
    
    
    <div className=" mb-4">
      <h1 className=" my-5 font-bold text-2xl">Your Top playlist</h1>
      <div className="flex overflow-auto">
      {songsData.map((item, index) => (
        <SongItems
          key={index}
          image={item.image}
          name={item.name}
          desc={item.desc}
          id={item.id}
        />
      ))}
    </div></div>
    
    </>
  );
};

export default DisplayHome;
