export type PostCardProps = {
  href: string;
  description: string;
  photoUrl: string;
  title: string;
};

import React from "react";

function PostCard({ href, description, photoUrl, title }: PostCardProps) {
  return (
    <div className="m-2 p-2">
      <h3>
        {title}
      </h3>
      {href}
      {description}
      {photoUrl}
    </div>
  );
}

export default PostCard;
