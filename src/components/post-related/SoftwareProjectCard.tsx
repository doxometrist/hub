export type SoftwareProjectProps = {
  codeUrl: string;
  description: string;
  title: string;
  demoUrl: string;
};

import Link from "next/link";
import React from "react";

function SoftwareProjectCard(
  { codeUrl, description, title, demoUrl }: SoftwareProjectProps,
) {
  return (
    <div>
      <h3>
        {title}
      </h3>
      <Link
        className="italic underline "
        href={codeUrl}
      >
        {codeUrl}
      </Link>
      <p>
        {description}
      </p>
    </div>
  );
}

export default SoftwareProjectCard;
