import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ allPlants, setAllPlants, search, setSearch }) {
  // console.log(allPlants);
  return (
    <main>
      <NewPlantForm allPlants={allPlants} setAllPlants={setAllPlants} />
      <Search search={search} setSearch={setSearch} />
      <PlantList allPlants={allPlants} setAllPlants={setAllPlants} />
    </main>
  );
}

export default PlantPage;
