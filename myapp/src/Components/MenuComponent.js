import '../App.css';
import LoginCompanent from './LogInCompanent';
import AboutCompanent from './AboutComponent';
import SingUpCompanent from './SingUpComponent';
import {Link } from 'react-router-dom';

const MenuComponent=(props) =>{
   const mainData=(data)=>{
    const thisArray = [];
      thisArray.push(data, '');
      props.callback(thisArray);

   }
  const pageArray = [<LoginCompanent callback={mainData}/>,<SingUpCompanent callback={mainData}/>,<AboutCompanent callback={mainData}/>];
    const showPageFunc=(val) => {
      const thisArray = [];
      if(val==='login'){
        thisArray.push(false, pageArray[0] );
      } else if(val==='singup'){        
        thisArray.push(false, pageArray[1] );
      } else if(val==='about'){
        thisArray.push(false, pageArray[2] );
      } 
      props.callback(thisArray);
    }
    
return(
<div className='squreOpen'>
<div className='myCommunityLogo'></div>
<div className='menu'>
<Link className="menuLink" to="/login" onClick={() => showPageFunc('login')}>LogIn</Link>
<Link className="menuLink" to="/singup" onClick={() => showPageFunc('singup')}>SingUp</Link>
<Link className="menuLink" to="/about"  onClick={() => showPageFunc('about')}>About</Link>

  </div>
</div>
)
}

export default MenuComponent;