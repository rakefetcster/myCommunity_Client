import './App.css';
import { useState } from 'react';
import ShowCompanent from './Components/ShowComponent';

const App=() =>{
  const [main,setMain] = useState(true);
  const [thisPage,setThisPage] = useState('');
  const [isName,setIsName] = useState(false);

  
  const getDataFromChild=(chaildValue)=>{
    if (chaildValue !=[]){
      if(chaildValue.hasOwnProperty("logIn") || chaildValue.hasOwnProperty("signUp")){
        setMain(chaildValue["main"]);
        setIsName(chaildValue["isName"]);
        setThisPage('');
      }
      else if(chaildValue.hasOwnProperty("logout")){
        setMain(true);
        setIsName(true);
        setThisPage('');
      }
      else if(chaildValue.hasOwnProperty("goToPage")){
        setThisPage(chaildValue["goToPage"]);
        setMain(false);
        setIsName(false);
      }
    }
    
  }
  
   return (
    <div className="App">
    {main?<ShowCompanent callback={getDataFromChild} isName={isName} main={main}/>:thisPage}
    </div>
  );
}

export default App;
