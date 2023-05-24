import React from "react";

export default function Character( { name, img }) {
  return (
    <div className="character">
      <img src={img} alt="" className="character__picture" />
      <h3 className="character__name">{name}</h3>
    </div>
  );
}
