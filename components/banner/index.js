import styles from "./Banner.module.css";

const Banner = ({ text, secondText }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{text}</h1>
      <h1 className={styles.secondText}>{secondText}</h1>
    </div>
  );
};

export default Banner;
