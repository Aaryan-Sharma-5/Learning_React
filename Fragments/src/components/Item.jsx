import styles from "./Item.module.css";
import SubjectNames from "./SubjectNames";

const Item = ({ SubjectNames, studying, handleStudyButton }) => {
  return (
    <li className={`${styles["my-item"]} list-group-item ${studying && "active"}`}>
      <span className={styles["my-span"]}>{SubjectNames}</span>
      <button className={styles.button} onClick={handleStudyButton}>
        Study
      </button>
    </li>
  );
};

export default Item;
