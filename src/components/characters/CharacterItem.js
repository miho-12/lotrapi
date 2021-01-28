import React from "react";
import Lotrlogo from "../../img/lotrimg.jpg";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={Lotrlogo} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.name}
            </li>
            <li>
              <strong>Race:</strong>
              {item.race}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
