import '../App.css';
import {postItem} from '../Utils/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const userUrl = 'http://localhost:5000/user';

const SingUpCompanent=(props) =>{
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill all the fields');
      return;
    }
    else if (email.length < 5 || password.length < 5) {
      alert('Email and password must be at least 5 characters long');
      return;
    }
    else if (email.indexOf('@') === -1) {
      alert('Email must contain @');
      return;
    }
    else if (password.indexOf(' ') !== -1) {
      alert('Password must not contain spaces');
      return;
    }
    let singInObj = {email:email,password:password,byKey:'signUp'}
    const {data} = await postItem(userUrl,singInObj);
    console.log(data[0]);
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

<h2>Hello User - SignIn</h2>
  <div className='form1'>
  <form onSubmit={handleSubmit}>
    
      <label>Email:</label>
      <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
   
    <br />
    <label>Password:</label>
      <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
    
    <br />
    <input type="submit" value="SingIn" />
  </form>
  </div>
  
  </div>
  <div className='myCommunityLogin' > </div>
    </div>
    </div>
    )
}


export default SingUpCompanent;