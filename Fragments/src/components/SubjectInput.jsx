import styles from "./SubjectInput.module.css";

const SubjectInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Subject"
      className={styles.SubjectInput}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SubjectInput;
