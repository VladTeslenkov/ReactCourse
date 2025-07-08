import { Counter } from "../counter/Counter";

export const Menu = ({ restaurant }) => {
  if (!restaurant.menu || restaurant.menu.length === 0) {
    return <div>Меню пока нет</div>;
  }
  return (
    <div>
      <h2>Меню {restaurant.name}</h2>
      <ul style={{ listStyle: "none" }}>
        {restaurant.menu.map((menu) => (
          <li key={menu.id}>
            {menu.name} ---- {menu.price}$ ---- <Counter />
          </li>
        ))}
      </ul>
    </div>
  );
};
