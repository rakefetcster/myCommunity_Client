import '../App.css';
import LoginCompanent from './LogInCompanent';
import AboutCompanent from './AboutComponent';
import SingInCompanent from './SingInComponent';
import { Routes,Route,Link } from 'react-router-dom';
import { useState } from 'react';


const UserPageComponent=() =>{
  const [showPage,setShowPage] = useState('true');
  
  const showPageFunc=() => {
    setShowPage(!showPage);
  }
  
return(
  <div className="">
  <h2>Your place </h2>
    <Link to="/login" onClick={showPageFunc}>Login</Link><br />
    <Link to="/about" onClick={showPageFunc}>About</Link><br />
    <Link to="/singin" onClick={showPageFunc}>SingIn</Link><br />
    
    <Routes >
      <Route path="/login" element={<LoginCompanent />} />
      <Route path="/about" element={<AboutCompanent />} />
      <Route path="/singin" element={<SingInCompanent />} />
    </Routes>
              
    
  </div>
)
}

export default UserPageComponent;