export const Reviews = ({ restaurant }) => {
  if (!restaurant.reviews || restaurant.reviews.length === 0) {
    return <div>Отзывов пока нет</div>;
  }
  return (
    <div>
      <h2>Отзывы {restaurant.name}</h2>
      <ul style={{ listStyle: "none" }}>
        {restaurant.reviews.map((review) => (
          <li key={review.id}>
            {review.user} ---- {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
