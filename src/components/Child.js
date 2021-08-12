import React from "react";
import "./Child.css";

function Child({ data }) {
  const { name, age, allergies, likes, key } = data;
  return (
    <div className="child" key={key}>
      <h3> Name: {name} </h3>
      <h4> Age: {age} </h4>
      <h4>
        Allergies: <p> {allergies} </p>
      </h4>
      <h4>
        Likes: <p> {likes} </p>
      </h4>
    </div>
  );
}

export default Child;
