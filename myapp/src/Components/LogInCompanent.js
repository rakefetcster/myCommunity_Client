import "../App.css";
import { postItem } from "../Utils/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LogedComponent from "./logedComponent";

const userUrl = "http://localhost:5000/auth/login";

const LoginCompanent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let loginObj = { username: email, password: password, byKey: "logIn" };
    const { data } = await postItem(userUrl, loginObj);
    console.log(data);
    console.log(typeof data);
    if (Object.keys(data).includes("Error")) {
      alert("Email or password are incorrect");
    } else {
      sessionStorage["token"] = data.token;
      sessionStorage["nameLogin"] = data["appName"];
      showPageFunc();
      navigate("/");
    }
  };
  const showPageFunc = () => {
    props.callback({ logIn: true, main: true, isName: false });
  };
  return (
    <div>
      <div className="squreOpen">
        <div className="myCommunityLogo"></div>
        <div className="menu">
          {/* <Link className="menuLink" to="/LogedComponent" onClick={showPageFunc}>Back Home</Link> */}
        </div>
      </div>
      <div className="fullForm">
        <div className="form">
          <h2>Hello User - LogIn </h2>
          <div className="form1">
            <form onSubmit={handleSubmit}>
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
              <input type="submit" value="Login" />
            </form>
          </div>
        </div>
        <div className="myCommunityLogin"> </div>
      </div>
    </div>
  );
};

export default LoginCompanent;
