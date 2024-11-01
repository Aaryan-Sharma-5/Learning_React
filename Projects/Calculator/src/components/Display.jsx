import styles from "./Display.module.css";

const Display = ({disVal}) => {
  return (
    <input className={styles.display} type="text" readOnly value={disVal} />
  );
};

export default Display;
