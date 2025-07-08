import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { Menu } from "./Menu";
import { RestaurantList } from "./RestaurantList";
import { useState } from "react";
import { Reviews } from "./Reviews";

export const RestaurantsPage = ({ restaurants }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurants[0].id
  );
  const selectedRestaurant = restaurants.find(
    (r) => r.id === selectedRestaurantId
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <RestaurantList
        restaurants={restaurants}
        onRestaurantSelect={setSelectedRestaurantId}
      />
      <div
        style={{
          backgroundColor: "#E30613",
          textAlign: "center",
          alignItems: "center",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
      >
        <div style={{ marginTop: "100px", fontSize: "30px" }}>
          {selectedRestaurant && <Menu restaurant={selectedRestaurant} />}
        </div>
        <div style={{ marginTop: "100px", fontSize: "30px" }}>
          {selectedRestaurant && <Reviews restaurant={selectedRestaurant} />}
        </div>
      </div>

      <Footer />
    </div>
  );
};
