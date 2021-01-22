import React from "react";

const Card = ({ img, name, type }) => (
  <div className="card">
    <div>
      <img src={img} alt="user img" />
    </div>

    <h2>{name}</h2>
    <p>{type}</p>
  </div>
);

export default Card;
