import styles from "./SubjectInput.module.css";

const SubjectInput = ({ handleStudyButton }) => {
  return (
    <input
      type="text"
      placeholder="Subject"
      className={styles.SubjectInput}
      onChange={handleStudyButton}
    />
  );
};

export default SubjectInput;
