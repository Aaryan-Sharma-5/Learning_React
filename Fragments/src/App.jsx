import SubjectNames from "./components/SubjectNames";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let subjectNames = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Geography",
  ];

  return (
    // React.Fragment is used to wrap multiple elements without adding extra nodes to the DOM.
    <>
        <h1>Subjects</h1>
        <ErrorMessage items={subjectNames}></ErrorMessage>
        <SubjectNames items={subjectNames}></SubjectNames>
    </>
  );
}

export default App;