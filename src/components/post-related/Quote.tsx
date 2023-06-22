export interface QuoteProps {
  author: string;
  content: string;
  link: string;
  textTitle: string;
}

import React from "react";

function Quote({ author, textTitle, link, content }: QuoteProps) {
  return (
    <div>
      <h5>
        from<cite>{textTitle}</cite> by {author}:
      </h5>
      <blockquote cite={link}>
        {content}
      </blockquote>
    </div>
  );
}

export default Quote;
