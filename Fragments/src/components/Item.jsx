import styles from "./Item.module.css";
import SubjectNames from "./SubjectNames";

const Item = ({SubjectNames}) => {

  const handleClick = (SubjectNames) => {
    alert(`You have selected ${SubjectNames}`);
  }

  return (
    <li className={`${styles["my-item"]} list-group-item`}>
      <span className={styles["my-span"]}>{SubjectNames}</span>
      <button className={styles.button} onClick={() => handleClick(SubjectNames)}>
        Study</button>
    </li>
  );
};

export default Item;
