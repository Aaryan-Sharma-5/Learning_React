import { useState } from "react";
import SubjectNames from "./components/SubjectNames";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import SubjectInput from "./components/SubjectInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let subjectNames = [
  //   "Mathematics",
  //   "Science",
  //   "English",
  //   "History",
  //   "Geography",
  // ];

  let [subjectNames, setSubjectNames] = useState([]);

  const onKeyDown = (event) => {
    if(event.key === "Enter") {
      let newSubjectNames = event.target.value;
      event.target.value = "";
      let newItems = [...subjectNames, newSubjectNames];
      setSubjectNames(newItems);
    }
    console.log(event);
    setTextState(event.target.value);
  };

  return (
    // React.Fragment is used to wrap multiple elements without adding extra nodes to the DOM.
    <Container>
      <h1 className="header">Subjects</h1>
      <SubjectInput handleKeyDown={onKeyDown}></SubjectInput>
      <ErrorMessage items={subjectNames}></ErrorMessage>
      <SubjectNames items={subjectNames}></SubjectNames>
    </Container>
  );
}

export default App;
