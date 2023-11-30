import '../App.css';
import {postItem} from '../Utils/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const userUrl = 'http://localhost:5000/user';

const LoginCompanent=() =>{
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    let loginObj = {email:email,password:password,byKey:'logIn'}
    const {data} = postItem(userUrl,loginObj);
    console.log(data);
    // if(data[0].includes("Error")){
    //   alert('Email or password are incorrect');
    // }
    
    // else{
            navigate('/HomeComponent ');
    // }
  }
  return(
  <div>
  <h1> My Commuinity - Log In Page  </h1>
  <form onSubmit={handleSubmit}>
    <label>
      Email:
      <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
    </label>
    <br />
    <label>
      Password:
      <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
    </label>
    <br />
    <input type="submit" value="Login" />
  </form>
    </div>
    )
}


export default LoginCompanent;