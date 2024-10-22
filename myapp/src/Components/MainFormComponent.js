import '../App.css';
import { useState } from 'react';
import axios from 'axios';
const usersUrl = "http://localhost:5000/tokafka";

const MainFormComponent=() =>{
  const [name,setName] = useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const obj={"name":name  };
    const resp = await axios.post(usersUrl,obj);
    console.log(resp);

  }
return(
  <div>
  <h1> My Commuinity - Find Me Activity   </h1>
    <form onSubmit={handleSubmit}>
      First name:{''}
      <input type='text' onChange={(e)=>setName(e.target.value)} />
      <button type='submit'>send</button>
    </form>
  </div>
)
}

export default MainFormComponent;