import styles from "./Item.module.css";

const Item = ({SubjectNames}) => {
  return (
    <li className={`${styles["my-item"]} list-group-item`}>
      <span className={styles["my-span"]}>{SubjectNames}</span>
    </li>
  );
};

export default Item;
