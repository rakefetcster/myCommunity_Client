import './App.css';
import { useState } from 'react';
import ShowCompanent from './Components/ShowComponent';
const App=() =>{
  const [main,setMain] = useState(true);
  const [thisPage,setThisPage] = useState('');
 
  const getDataFromChild=(chaildValue)=>{
    setMain(chaildValue[0]);
    setThisPage(chaildValue[1]);
    console.log(main);
    console.log(thisPage);
  }
  
   return (
    <div className="App">
    
    {main?<ShowCompanent callback={getDataFromChild}  main={main}/>:thisPage}
    </div>
  );
}

export default App;
