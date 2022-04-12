import CardProduct from "../../card-product";
import EditorProfile from "../../editor-profile";
import styles from "./EditorChoice.module.css";

const EditorCard = ({ productName, description, rating, editor, role }) => {
  return (
    <div className={styles.editorCardWrapper}>
      <div style={{ marginBottom: "-30px" }}>
        <EditorProfile role={role} editor={editor} />
      </div>
      <CardProduct
        productName={productName}
        description={description}
        rating={rating}
        //Hard code product image because image from API response error
        image="/product.jpg"
      />
    </div>
  );
};

export default EditorCard;
