import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [stockOption, setStockOption] = useState(true);

  function toggleStock() {
    setStockOption(!stockOption);
  }

    return (
      <li className="card" data-testid="plant-item">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>Price: {price}</p>
        <button className="stock-btn" onClick={toggleStock}>
          {stockOption ? "In Stock" : "Out of Stock"}
        </button>
      </li>
    );
}

export default PlantCard;
