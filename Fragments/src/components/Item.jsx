import styles from "./Item.module.css";
import SubjectNames from "./SubjectNames";

const Item = ({SubjectNames, handleStudyButton}) => {

  return (
    <li className={`${styles["my-item"]} list-group-item`}>
      <span className={styles["my-span"]}>{SubjectNames}</span>
      <button className={styles.button} onClick={handleStudyButton}>
        Study</button>
    </li>
  );
};

export default Item;
