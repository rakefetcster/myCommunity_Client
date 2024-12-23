import "../App.css";
import LoginCompanent from "./LogInCompanent";
import AboutCompanent from "./AboutComponent";
import SingUpCompanent from "./SingUpComponent";
import BusinessFormComponent from "./BusinessFormComponent";
import LogedComponent from "./logedComponent";

import { Link } from "react-router-dom";

const MenuComponent = (props) => {
  const logoutFunc = () => {
    sessionStorage["nameLogin"] = "";
    sessionStorage["token"] = "";
    props.callback({ logout: true });
  };
  const mainData = (data) => {
    props.callback(data);
  };
  const pageArray = [
    <LoginCompanent callback={mainData} />,
    <SingUpCompanent callback={mainData} />,
    <AboutCompanent callback={mainData} />,
    <BusinessFormComponent callback={mainData} />,
    <LogedComponent callback={mainData} />,
  ];

  const showPageFunc = (val) => {
    const thisArray = [];
    if (val === "login") {
      props.callback({ goToPage: pageArray[0] });
    } else if (val === "singup") {
      props.callback({ goToPage: pageArray[1] });
    } else if (val === "about") {
      props.callback({ goToPage: pageArray[2] });
    } else if (val === "BusinessForm") {
      props.callback({ goToPage: pageArray[3] });
    } else if (val === "logout") {
      props.callback({ goToPage: pageArray[4] });
    }
    props.callback(thisArray);
  };

  return (
    <div className="squreOpen">
      <div className="menu">
        {props.isName ? (
          <div>
            <Link
              className="menuLink"
              to="/login"
              onClick={() => showPageFunc("login")}
            >
              LogIn
            </Link>
            <Link
              className="menuLink"
              to="/singup"
              onClick={() => showPageFunc("singup")}
            >
              SingUp
            </Link>
            <Link
              className="menuLink"
              to="/about"
              onClick={() => showPageFunc("about")}
            >
              About
            </Link>
            <Link
              className="menuLink"
              to="/logout"
              onClick={() => showPageFunc("logout")}
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="connect">
            <p className="menuLink"> Hello {sessionStorage["nameLogin"]}</p>
            <Link
              className="menuLink"
              to="/logout"
              onClick={() => logoutFunc()}
            >
              LogOut
            </Link>
            <Link
              className="menuLink"
              to="/about"
              onClick={() => showPageFunc("about")}
            >
              About
            </Link>
            <Link
              className="menuLink"
              to="/"
              // onClick={() => showPageFunc("BusinessForm")}
            >
              Business Form
            </Link>
          </div>
        )}
      </div>
      <div className="myCommunityLogo"></div>
    </div>
  );
};

export default MenuComponent;
