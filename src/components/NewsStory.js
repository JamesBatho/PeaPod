import React from "react";
import "./NewsStory.css";

function NewsStory({ header, blurb, author }) {
  return (
    <div className="newsStory">
      <h5 className="header"> {header} </h5>
      <p className="blurb"> {blurb} </p>
      <i> - {author} </i>
    </div>
  );
}

export default NewsStory;
