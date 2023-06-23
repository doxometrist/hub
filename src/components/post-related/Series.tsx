"use client";
export type SeriesProps = {
  href: string;
  description: string;
  photoUrl: string;
  title: string;
  completed: boolean;
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SeriesCard(
  { href, description, photoUrl, title, completed }: SeriesProps,
) {
  const id = `series-${title}`;
  const url = `http://localhost:3000/#${id}`;
  return (
    <div id={id}>
      <button onClick={() => navigator.clipboard.writeText(url)}>copy</button>
      <h3 className="text-xl bold">{title}</h3>
      {completed
        ? <FontAwesomeIcon icon="check" />
        : <FontAwesomeIcon icon="x" />}
      <p>{description}</p>
    </div>
  );
}

export default SeriesCard;

function SeriesView() {
}
