import '../App.css';
import {postItem} from '../Utils/utils';
import { useState } from 'react';
const userUrl = 'http://localhost:5000/user';
const SingInCompanent=() =>{
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  
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
    console.log(email,password); 
    let obj = {email:email,password:password,byKey:'signIn'}   
    const {data} = postItem(userUrl,obj);
  }
        return(
          <div>
          <h1> My Commuinity - Sign In Page  </h1>
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
            <input type="submit" value="Submit" />
          </form>
            </div>
            )
}

export default SingInCompanent;