import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
      fetch("http://localhost:6001/plants")
        .then((r) => r.json())
        .then(data => setPlants(data))
  }, [])

  function addnewPlant(newPlant) {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants);
  }

  function handleSearchChange(newSearch) {
    setSearch(newSearch)
  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={addnewPlant}/>
      <Search search={search} onSearchChange={handleSearchChange}/>
      <PlantList plants={plants} search={search}/>
    </main>
  );
}

export default PlantPage;
