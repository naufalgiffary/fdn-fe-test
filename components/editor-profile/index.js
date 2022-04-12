/* eslint-disable @next/next/no-img-element */
import styles from "./Editor.module.css";

const EditorProfile = () => {
  return (
    <div className={styles.cardWrapper}>
      <img
        src="/personSample.jpeg"
        alt="avatar"
        className={styles.profileImage}
      />
      <div className={styles.content}>
        <h4 className={styles.title}>Arinda</h4>
        <h5 className={styles.subtitle}>Senior editor</h5>
      </div>
    </div>
  );
};

export default EditorProfile;
