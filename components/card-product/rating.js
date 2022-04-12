import { FaStar } from "react-icons/fa";

const Rating = ({ ratingValue }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <label key={idx}>
            <FaStar color={idx < ratingValue ? "#dc2c50" : "#bbb"} />
          </label>
        ))}
    </div>
  );
};

export default Rating;
