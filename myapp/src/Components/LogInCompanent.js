import '../App.css';
import {postItem} from '../Utils/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes,Route,Link } from 'react-router-dom';
import ShowComponent from './ShowComponent'
import AboutCompanent from './AboutComponent';
import SingInCompanent from './SingInComponent';
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
  <div className='squreOpen'>
  <div className='myCommunityLogo'></div>
  <div className='menu'>
    <Link className="menuLink" to="/" >Back</Link>
    <Link className="menuLink" to="/singin" >SingIn</Link>
    <Link className="menuLink" to="/about" >About</Link>
    <Routes >
          <Route path="/" element={<ShowComponent />} />
          <Route path="/about" element={<AboutCompanent />} />
          <Route path="/singin" element={<SingInCompanent />} />
        </Routes>
</div>
</div>
<div className='fullForm'>
<div className='form'>

<h2>Hello User - Sing In  </h2>
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