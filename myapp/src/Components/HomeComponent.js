import '../App.css';
import { useState } from 'react';
import LogedComponent from './logedComponent';

const HomeComponent=(props) =>{
  const [enter,setEnter] = useState(true);

  const getDataFromChild=(data)=>{
    setEnter(false);
    props.callback(data);
  }
return(
  <div>
    {enter?<LogedComponent callback={getDataFromChild}/>:''}
  </div>
)
}

export default HomeComponent;