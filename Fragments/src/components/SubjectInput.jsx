import styles from './SubjectInput.module.css';

const SubjectInput = () => {
  return (
    <input type="text" placeholder="Subject" 
    className={styles.SubjectInput}
    onChange={(event) => console.log(event.target.value)}
    />
  );
}

export default SubjectInput;