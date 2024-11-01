import SubjectNames from "./components/SubjectNames";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import SubjectInput from "./components/SubjectInput";

function App() {
  let subjectNames = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Geography", 
  ];

  let textToShow = "No subjects found";


  const handleStudyButton = (event) => {
    console.log(event.target.value);  
    textToShow = event.target.value;
  }

  return (
    // React.Fragment is used to wrap multiple elements without adding extra nodes to the DOM.
    <Container>
        <h1 className="header">Subjects</h1>
        <p>{textToShow}</p>
        <ErrorMessage items={subjectNames}></ErrorMessage>
        <SubjectInput handleStudyButton={handleStudyButton}></SubjectInput>
        <SubjectNames items={subjectNames}></SubjectNames>
    </Container>
  );
}

export default App;