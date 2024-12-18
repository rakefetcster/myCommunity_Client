import "./App.css";
import { useState } from "react";
import ShowCompanent from "./Components/ShowComponent";
import HomeComponent from "./Components/HomeComponent";
import LoginCompanent from "./Components/LogInCompanent";

const App = () => {
  const [main, setMain] = useState(false);
  const [thisPage, setThisPage] = useState("");
  const [isName, setIsName] = useState(false);
  const [issignup, setIssignup] = useState(false);

  const getDataFromChild = (chaildValue) => {
    if (chaildValue != []) {
      if (chaildValue.hasOwnProperty("signUp")) {
        setMain(chaildValue["main"]);
        setIsName(chaildValue["isName"]);
        setThisPage("");
        setIssignup(true);
      } else if (chaildValue.hasOwnProperty("logIn")) {
        setMain(chaildValue["main"]);
        setIsName(chaildValue["isName"]);
        setThisPage("");
        setIssignup(false);
      } else if (chaildValue.hasOwnProperty("logout")) {
        setMain(false);
        setIsName(true);
        setThisPage("");
      } else if (chaildValue.hasOwnProperty("goToPage")) {
        setThisPage(chaildValue["goToPage"]);
        setMain(false);
        setIsName(false);
      }
    }
  };

  return (
    <div className="App">
      {issignup ? (
        <LoginCompanent callback={getDataFromChild} />
      ) : main ? (
        <ShowCompanent
          callback={getDataFromChild}
          isName={isName}
          main={main}
        />
      ) : (
        <HomeComponent callback={getDataFromChild} />
      )}
    </div>
  );
};

export default App;
