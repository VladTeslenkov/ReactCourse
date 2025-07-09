export const RestaurantList = ({
  restaurants,
  selectedRestaurantId,
  onRestaurantSelect,
}) => {
  const handleSelect = (id) => {
    onRestaurantSelect(id);
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
            background:
              selectedRestaurantId === restaurant.id ? "lightblue" : "white",
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
