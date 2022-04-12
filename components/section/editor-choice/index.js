import React from "react";
import EditorCard from "./editor-card";
import styles from "./EditorChoice.module.css";

const EditorChoice = ({ data }) => {
  return (
    <div>
      <div className={styles.editorSection}>
        {data?.map((item, index) => (
          <EditorCard
            key={index}
            productName={item?.product?.name}
            description={item?.product?.description}
            rating={item?.product?.rating}
            editor={item?.editor}
            role={item?.role}
          />
        ))}
      </div>
    </div>
  );
};

export default EditorChoice;
