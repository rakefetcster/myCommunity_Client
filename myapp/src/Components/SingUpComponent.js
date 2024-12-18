import "../App.css";
import { postItem } from "../Utils/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCompanent from "./LogInCompanent";

const userUrl = "http://localhost:5000/user";

const SingUpCompanent = (props) => {
  const [appName, setAppName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    } else if (email.length < 5 || password.length < 5) {
      alert("Email and password must be at least 5 characters long");
      return;
    } else if (email.indexOf("@") === -1) {
      alert("Email must contain @");
      return;
    } else if (password.indexOf(" ") !== -1) {
      alert("Password must not contain spaces");
      return;
    }
    let singInObj = {
      appName: appName,
      email: email,
      password: password,
      byKey: "signUp",
    };
    const { data } = await postItem(userUrl, singInObj);
    sessionStorage["token"] = data.token;
    if (data[0] === undefined) {
      alert("Problem to save data");
    } else if (data[0].hasOwnProperty("Error")) {
      alert("Email or password are incorrect");
    } else {
      sessionStorage["nameLogin"] = appName;
      showPageFunc();
      navigate("/");
    }
  };
  const showPageFunc = () => {
    props.callback({ signUp: true, main: true, isName: false });
  };

  return (
    <div>
      <div className="squreOpen">
        <div className="myCommunityLogo"></div>
      </div>
      <div className="fullForm">
        <div className="form">
          <h2>Hello User - SignUp</h2>
          <div className="form1">
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="appname"
                onChange={(e) => setAppName(e.target.value)}
              />

              <br />
              <label>Email:</label>
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <br />
              <label>Password:</label>
              <input
                type="text"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <br />
              <input type="submit" value="SingUp" />
            </form>
          </div>
        </div>
        <div className="myCommunityLogin"> </div>
      </div>
    </div>
  );
};

export default SingUpCompanent;
