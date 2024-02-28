import React from "react";
import PlantCard from "./PlantCard";

function PlantList({allPlants, setAllPlants}) {
  return (
    <ul className="cards">
      {allPlants.map((allThePlants) => (
        <PlantCard 
        key={allThePlants.id} 
        id={allThePlants.id}
        name={allThePlants.name}
        image={allThePlants.image}
        price={allThePlants.price}
        />
      ))}
    </ul>
  );
}

export default PlantList;
