import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import "./DashboardCards.css";
const DashboardCards = ({ item, singleId }) => {
  const saveId = (val) => {
    singleId(val);
  };
  return (
    <div className="cards">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div className="cards__location">
        <div>
          <GoLocation color="#43afff" />
          <p>{item.location}</p>
        </div>
        <button onClick={() => saveId(item.id)}>Apply</button>
      </div>
    </div>
  );
};

export default DashboardCards;
