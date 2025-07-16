import { Menu } from "./Menu";
import { Reviews } from "./Reviews";
export const RestaurantBody = ({ selectedRestaurant }) => {
  return (
    <div
      style={{
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
  );
};
