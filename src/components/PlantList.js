import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search, onDeletePlant}) {
  
  const filteredPlants = plants.filter(plant => plant.name.includes(search))
 
  return (
    <ul className="cards">
      {filteredPlants.map(plant => (
        <PlantCard key={plant.id} plant={plant} onDeletePlant={onDeletePlant}/>
     
      ))}
    </ul>
    
  );
}

export default PlantList;
