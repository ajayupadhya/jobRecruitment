import React from "react";
import "./IndividualCards.css";
const IndividualCards = ({ item }) => {
  return (
    <div className="card__individual">
      <div className="card__individual__name">
        <p>{item?.name[0].toUpperCase()}</p>
        <div>
          <p>{item?.name}</p>
          <span>{item?.email}</span>
        </div>
      </div>
      <p className="skills">Skills</p>
      <p className="skills_content">{item?.skills}</p>
    </div>
  );
};

export default IndividualCards;
