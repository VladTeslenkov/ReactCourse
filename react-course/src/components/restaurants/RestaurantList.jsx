import { useState } from "react";

export const RestaurantList = ({ restaurants, onRestaurantSelect }) => {
  const [selectedId, setSelectedId] = useState(restaurants[0].id);

  const handleSelect = (id) => {
    setSelectedId(id === selectedId ? selectedId : id);
    onRestaurantSelect(id === selectedId ? selectedId : id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "30px",
        paddingBottom: "30px",
        backgroundColor: "#EA560D",
      }}
    >
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          style={{
            border: "solid",
            background: selectedId === restaurant.id ? "lightblue" : "white",
            padding: "30px 30px 30px 30px",
            fontSize: "20px",
          }}
          onClick={() => handleSelect(restaurant.id)}
        >
          <h3>{restaurant.name}</h3>
        </button>
      ))}
    </div>
  );
};
