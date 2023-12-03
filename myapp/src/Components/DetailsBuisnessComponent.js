import { useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import {getById} from '../Utils/utils';


const DetailsBuisnessComponent=(props) =>{
  const [buisness,setBuisness] = useState([]);
  useEffect(() => {
    const fetchData = async () => { 
        const {data} = getById(userUrl,props.id);
        setBuisness(data);
    }
    fetchData();
  },[props.id]);
return(
  <div className='Buissness_card'>
  Buisness Name: <input><p>buisness.name</p></input>
  Buisness Address: <input><p>buisness.adress</p></input>
  Buisness Phone: <input><p>buisness.phone</p></input>
  Buisness About: <input><p>buisness.about</p></input>
  
  
  
  </div>
)
}

export default DetailsBuisnessComponent;