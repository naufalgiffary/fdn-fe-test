/* eslint-disable @next/next/no-img-element */
import styles from "./CardProduct.module.css";
import Rating from "./rating";

const CardProduct = ({ productName, description, rating, image }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img src={image} alt="product" height="150" width="150" />
        </div>

        <div className={styles.productDescription}>
          <div className={styles.ratingWrapper}>
            <p>{rating}</p>
            <Rating ratingValue={Math.round(rating)} />

            {/* Hard code because no total reviewer from API response */}
            <p>(24)</p>
          </div>
          <h3>{productName}</h3>
          <p>{description}</p>
          <p>ROSIE BEIGE</p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
