import React, {useState} from "react";

function PlantCard({plant, onDeletePlant}) {
  
  const {name, image, id, price} = plant
  const [inStock, setInStock]= useState(true)

  function handleInstock (){
    setInStock(false)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${id}`,{
      method: "DELETE"
    })

    onDeletePlant(id)
  }
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick = {handleInstock}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button className="remove" onClick={handleDelete}>Remove</button>
    </li>
  );
}

export default PlantCard;
