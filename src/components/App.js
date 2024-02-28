import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantList from "./PlantList";

function App() {
  const [allPlants, setAllPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      // .then(data=>console.log(data))
      .then((data) => setAllPlants(data));
  }, []);

  const filteredList = allPlants.filter((planty) =>
    planty.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        allPlants={filteredList}
        setAllPlants={setAllPlants}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;

// App
// |--Header
// |--PlantPage
//     |---NewPlantForm
//     |---Search
//     |---PlantList
//           |---PlantCard
