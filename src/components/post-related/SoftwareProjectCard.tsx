export type SoftwareProjectProps = {
  codeUrl: string;
  description: string;
  title: string;
  demoUrl: string;
};

import React from "react";

function SoftwareProjectCard(
  { codeUrl, description, title, demoUrl }: SoftwareProjectProps,
) {
  return (
    <div>
      <h3>
        {title}
      </h3>
      {codeUrl}
      <p>
        {description}
      </p>
    </div>
  );
}

export default SoftwareProjectCard;
