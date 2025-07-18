import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { Menu } from "./Menu";
import { RestaurantList } from "./RestaurantList";
import { useState } from "react";
import { Reviews } from "./Reviews";
import { RestaurantBody } from "./RestaurantBody";

export const RestaurantsPage = ({ restaurants }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurants[0].id
  );
  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === selectedRestaurantId
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#E30613",
      }}
    >
      <RestaurantList
        restaurants={restaurants}
        selectedRestaurantId={selectedRestaurantId}
        onRestaurantSelect={setSelectedRestaurantId}
      />
      <RestaurantBody selectedRestaurant={selectedRestaurant}/>
    </div>
  );
};
