import * as React from "react";
import "../App.css";
// import DetailsBuisnessComponent from './DetailsBuisnessComponent';
import { useState } from "react";
import MenuComponent from "./MenuComponent";
import HeaderCompanent from "./HeaderComponent";
import Button from "@mui/material/Button";
import MainFormComponent from "./MainFormComponent";

// const primary = {
//   main: '#1976d2',
//   light: '#42a5f5',
//   dark: '#1565c0',
//   contrastText: '#fff',
//};

const getDataFromForm = (dataArray) => {};

const ShowComponent = (props) => {
  const [clickButton, setclickButton] = useState(true);
  const [showPic, setshowPic] = useState(true);
  const handleClick = () => {
    setclickButton(false);
    setshowPic(false);
    props.callback(false);
  };
  const getDataFromMenu = (menuData) => {
    props.callback(menuData);
  };
  return (
    <div>
      <MenuComponent callback={getDataFromMenu} isName={props.isName} />
      <br />
      <div className="container">
        <p>My Community </p>
        <p>הקשר בין עסקים קטנים ובינוניים לאנשים </p>
      </div>
      {clickButton ? (
        <div className="find_activity">
          <Button variant="contained" color="primary" onClick={handleClick}>
            Find me an activity
          </Button>
        </div>
      ) : (
        <MainFormComponent callback={getDataFromForm} />
      )}

      {showPic ? (
        <div className="table_hight">
          <div className="container_table">
            <div className="workshops">
              <div className="blue_workshops"></div>
              <p className="p_workshop">סדנאות</p>
            </div>
            <div className="workshops">
              <p className="p_workshop">ספורט</p>
              <div className="blue_sport"></div>
            </div>
            <div className="workshops">
              <div className="blue_family"></div>
              <p className="p_workshop">משפחתי</p>
            </div>
            <div className="workshops">
              <p className="p_workshop">זוגי</p>
              <div className="blue_duble"></div>
            </div>
            <br />
            <div className="workshops">
              <div className="blue_friends"></div>
              <p className="p_workshop">עם חברים</p>
            </div>
            <div className="workshops">
              <p className="p_workshop">אוכל</p>
              <div className="blue_food"></div>
            </div>
            <div className="workshops">
              <div className="blue_nature"></div>
              <p className="p_workshop">טיולים</p>
            </div>
            <div className="workshops">
              <p className="p_workshop">ילדים</p>
              <div className="blue_kids"></div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>
        <HeaderCompanent />
      </div>
    </div>
  );
};
export default ShowComponent;
