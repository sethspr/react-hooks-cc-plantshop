import React, { useState } from "react";

function NewPlantForm({ allPlants, setAllPlants }) {
  const [name, setPlantName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newPlant = {
      name,
      image,
      price,
    };
    console.log(newPlant);

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => setAllPlants([...allPlants, data]));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} className="add-plant-form">
        <input
          onChange={(e) => {
            setPlantName(e.target.value);
          }}
          type="text"
          name="name"
          placeholder="Plant name"
          className="input-text"
          value={name}
        />
        <input
          onChange={(e) => {
            setImage(e.target.value);
          }}
          type="text"
          name="image"
          placeholder="Image URL"
          className="input-text"
          value={image}
        />
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          className={"input-text"}
          value={price}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
