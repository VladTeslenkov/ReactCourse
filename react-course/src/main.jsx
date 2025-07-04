import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  restaurants.map((element) => (
    <div className="restaurant" style={{ backgroundColor: "#ffebee" }}>
      <h2>{element.name}</h2>
      <h3>Menu</h3>
      <ul>
        {element.menu.map((el) => (
          <li>{el.name}</li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {element.reviews.map((el) => (
          <li>{el.text}</li>
        ))}
      </ul>
    </div>
  ))
);
