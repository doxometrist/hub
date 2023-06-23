"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SeriesProps } from "./SeriesProps";
import Link from "next/link";
import Image from "next/image";

const ComingSoonBadge = () => (
  <span className="bg-blue-500 text-white text-xs py-1 px-2 rounded-md mb-4 inline-block">
    Coming Soon!
  </span>
);

function SeriesCard(
  { description, title, completed, id, photoUrl }: SeriesProps,
) {
  const partialUrl = `series-${title}`;
  const url = `http://localhost:3000/#${partialUrl}`;
  return (
    <div id={id.toString()}>
      {photoUrl &&
        (
          <Image
            src={photoUrl}
            width={80}
            height={80}
            alt={`${title} reference picture`}
          />
        )}
      <div id="heading" className="m-2 p-2 flex flex-row">
        <button
          onClick={() => navigator.clipboard.writeText(url)}
          className="m-2 p-2"
        >
          copy reference
          <FontAwesomeIcon icon="link" />
        </button>
        <h3 className="text-xl bold">{title}</h3>
      </div>
      <div id="detailsLink" className="m-2 p-2 underline">
        <a href={`/series/${id}`}>See more</a>
      </div>
      {completed ? <FontAwesomeIcon icon="check" /> : <ComingSoonBadge />}
      <p>{description}</p>
    </div>
  );
}

export default SeriesCard;
