import '../App.css';
import LoginCompanent from './LogInCompanent'
import SingUpCompanent from './SingUpComponent';
import { useState } from 'react';

const LogedComponent=(props) =>{
  const [login,setLogin] = useState(false);
  const [signUp,setSignUp] = useState(false);

  const handleLogin=()=>{
    setLogin(true);
    setSignUp(false);

  }
  const handleSingIn=()=>{
    setSignUp(true);
    setLogin(false);
  }
  const getDataFromChild=(data)=>{
      props.callback(data);
    
  }
return(
  <div>
  {login || signUp? '':  
      <div>
      
      <div className='myCommunityLogo'></div>
      <h1> Wellcome to My Commuinity   </h1>

      </div>
  }
      {login || signUp? '':  
      
      <div className='bigbuttonContainer'>
        <div className='buttonContainer' >
          <button className="space" onClick={handleLogin}>Login</button>
          <button className="space" onClick={handleSingIn}>SignIn</button>
        </div>
        <div className='rightPic'> </div>
      
      </div>
      
  }
  {login?<LoginCompanent callback={getDataFromChild}/>:''}
  {signUp?<SingUpCompanent callback={getDataFromChild}/>:''}

  </div>
)
}

export default LogedComponent;