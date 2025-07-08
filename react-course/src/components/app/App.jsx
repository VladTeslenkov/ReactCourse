import { restaurants } from "../../../materials/mock.js";
import { RestaurantsPage } from "../restaurants/RestaurantsPage.jsx";
export const App = () => {
  return <RestaurantsPage restaurants={restaurants} />;
};
