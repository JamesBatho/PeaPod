import React from "react";
import "./Testimonial.css";

function Testimonial({ header, blurb, name }) {
  return (
    <div className="testimonial">
      <h5> {header} </h5>
      <p className="blurb">"{blurb}"</p>
      <p className="signature">
        -<i> {name} </i>
      </p>
    </div>
  );
}

export default Testimonial;
