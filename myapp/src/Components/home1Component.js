import "../App.css";
import { useState } from "react";
import ShowCompanent from "./ShowComponent";
import React from "react";
import ReactDOM from "react-dom";
import { PushSpinner } from "react-spinners-kit";

const Home1Component = (props) => {
  const [enter, setEnter] = useState(true);

  const getDataFromChild = (data) => {
    setEnter(false);
    props.callback(data);
  };
  return (
    <div>
      {enter ? (
        <ShowCompanent callback={getDataFromChild} />
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Home1Component;
