import '../App.css';
import {postItem} from '../Utils/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const userUrl = 'http://localhost:5000/user';

const LoginCompanent=(props) =>{
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    let loginObj = {email:email,password:password,byKey:'logIn'}
    const {data} = await postItem(userUrl,loginObj);
    if(data[0].hasOwnProperty("Error")){
      alert('Email or password are incorrect');
    } else{
      sessionStorage['nameLogin'] = email;
      showPageFunc();
      navigate("/");
    }
  }
  const showPageFunc=()=>{
    props.callback(true);
  }
  return(
  <div>
  <div className='squreOpen'>
  <div className='myCommunityLogo'></div>
  <div className='menu'>
    <Link className="menuLink" to="/" onClick={showPageFunc}>Back Home</Link>
    
</div>
</div>
<div className='fullForm'>
<div className='form'>

<h2>Hello User - LogIn  </h2>
  <div className='form1'>
  <form onSubmit={handleSubmit}>
    
      <label>Email:</label>
      <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
   
    <br />
    <label>Password:</label>
      <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
    
    <br />
    <input type="submit" value="Login" />
  </form>
  </div>
  
  </div>
  <div className='myCommunityLogin' > </div>
    </div>
    </div>
    )
}


export default LoginCompanent;