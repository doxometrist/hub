"use client";
import React from "react";
import PlaylistCard from "./PlaylistCard";

// maps name to link
export type PlaylistRecord = Record<string, string>;

const playlists: PlaylistRecord = {
  "Animism ":
    "https://www.youtube.com/embed/videoseries?si=qHh9pTYiWf0nvg-s&amp;list=PLOjKJ_DaT_zZxp2zaV-YjnEzz_4Ub37zP",
  "Cold Collectivism":
    "https://www.youtube.com/embed/videoseries?si=V2-FSHkoi7Gpfb14&amp;list=PLOjKJ_DaT_zYwjXZtkXbNQCBGOj7tohxE",
  "Phenomenon of Jordan Peterson":
    "https://www.youtube.com/embed/videoseries?si=PFjL8KXG_E__JPuH&amp;list=PLOjKJ_DaT_zbTZw0xkakclfELCFxpPjS2",
};

function PlaylistsList() {
  return (
    <div className="m-2 p-2 ">
      <h3 className="text-large">
        PlaylistsList
      </h3>
      <div>
        {Object.entries(playlists).map((v) => {
          return <PlaylistCard name={v[0]} link={v[1]} />;
        })}
      </div>
    </div>
  );
}

export default PlaylistsList;
