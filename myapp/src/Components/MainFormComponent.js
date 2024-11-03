import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const usersUrl = "http://localhost:5000/tokafka";

const MainFormComponent=() =>{
  const [city,setCity] = useState('');
  const [activity, setActivity] = useState('');


  const handleChange1 =(e) => {
    setActivity(e.target.value);
    
  };
  const handleChange2 =async(e) => {
    setCity(e.target.value)
  };
  const handleSubmit =async(e) => {
    e.preventDefault();
    const obj={"activity":activity,"city":city };
    const resp = await axios.post(usersUrl,obj);
    console.log(resp);
  };

return(
  <div>
  <h1> My Commuinity - Find Me Activity   </h1>
  <div className='formBox'>
  <form onSubmit={handleSubmit} >
  <Box sx={{ minWidth: 20 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">סוג הפעלות</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activity}
          label="activity"
          onChange={handleChange1}
        >
          <MenuItem value={0}>ספורט</MenuItem>
          <MenuItem value={1}>עם ילדים</MenuItem>
          <MenuItem value={2}>עם חברים</MenuItem>
          <MenuItem value={3}>אוכל</MenuItem>
          <MenuItem value={4}>זוגי</MenuItem>
          <MenuItem value={5}>טיולים</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 20 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">עיר</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="city"
          onChange={handleChange2}
        >
          <MenuItem value={0}>תל אביב</MenuItem>
          <MenuItem value={1}>ירושלים</MenuItem>
          <MenuItem value={2}> כנרת</MenuItem>
          <MenuItem value={3}>הרצליה</MenuItem>
          <MenuItem value={4}>חיפה</MenuItem>
          <MenuItem value={5}>רמת הגולן</MenuItem>
          <MenuItem value={6}>אילת</MenuItem>
          <MenuItem value={7}>עכו </MenuItem>
          <MenuItem value={8}>זכרון יעקוב </MenuItem>
        </Select>
      </FormControl>
    </Box>
    <button type ='submit'>שלח</button>
    </form>
    </div>
    
  </div>
)
}

export default MainFormComponent;