import { useState } from "react";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";

function App() {
  let [calDis, setCalDis] = useState("0");

  const onClickButton = (buttonText) => {
    if (buttonText === "C") {
      setCalDis("0");
    } else if (buttonText === "=") {
      try {
        setCalDis(eval(calDis));
      } catch (error) {
        setCalDis("Error");
      }
    } else {
      if (calDis === "0") {
        setCalDis(buttonText);
      } else {
        setCalDis(calDis + buttonText);
      }
    }
  };

  return (
    <div className={styles.calculator}>
      <Display disVal = {calDis}></Display>
      <ButtonsContainer onClickButton = {onClickButton}></ButtonsContainer>
    </div>
  );
}

export default App;