import { React, useState } from "react";
function FanCard({ item }) {
  return (
    <div id="fancard">
      <h2 className="name">{item.name}</h2>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            className="metspic"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1200px-New_York_Mets.svg.png"
          />
        </div>
        <div className="flip-card-back">
          <div className="details">
            <h3>Favorite Player: {item.favoritePlayer}</h3>
            <h4>Fun Fact: {item.funFact}</h4>
          </div>
          <button className="login">Log In</button>
        </div>
      </div>
    </div>
  );
}

export default FanCard;
