import './App.css';
import { useState } from 'react';
import ShowCompanent from './Components/ShowComponent';
const App=() =>{
  const [main,setMain] = useState(true);
  const [thisPage,setThisPage] = useState(true);
  const mainData=(data)=>{
    setMain(data);
    console.log(main);
  }
  const getDataFromChild=(chaildValue)=>{
    setMain(chaildValue[0]);
    setThisPage(chaildValue[1])

  }
  
   return (
    <div className="App">
    
    {main?<ShowCompanent callback={getDataFromChild}  main={main}/>:thisPage}
    </div>
  );
}

export default App;
