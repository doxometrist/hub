import PlaylistsList from "@/components/youtube/PlaylistsList";
import React from "react";

function page() {
  return (
    <div>
      <h3>My Youtube activity</h3>
      <div>
        <p>
          So far it's no videos. Had some in 2021 but not the quality I&apos;d
          like to represent now.
        </p>
        <p>There are curated playlists though</p>
      </div>

      <PlaylistsList />
    </div>
  );
}

export default page;
