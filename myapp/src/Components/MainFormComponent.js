import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Carousel from './caruosel';

const usersUrl = "http://localhost:5000/tokafka";

const MainFormComponent=() =>{
  const [city,setCity] = useState('');
  const [activity, setActivity] = useState('');
  const [data, setData] = useState([]); // State to hold restaurant data
  const [show, setShow] = useState(false); // To show a loading state
  const [dataHeder,setDataHeder] = useState('')
  const handleChange1 =(e) => {
    setActivity(e.target.value);
    
  };
  const handleChange2 =async(e) => {
    setCity(e.target.value)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = { "activity": activity, "city": city };
    try {
      const resp = await axios.post(usersUrl, obj);

      // Check if the response has data
      if (resp.data && Array.isArray(resp.data)) {
          // Log the 'additional_info' field from each object in the array
          resp.data.forEach(item => {
            let header_data = item.additional_info;
            header_data = header_data.replaceAll('_', " ");
            setDataHeder(header_data);  // This will print 'Sport_Sea_of_Galilee' for each item
          });
          
          // Set the data and show it
          setData(resp.data);  // Assuming setData updates your state with the entire response
          setShow(true);  // Assuming this shows something on the UI

        } else {
            console.log('Error:', resp.data.error);
        }
    } catch (error) {
        console.error("Error while posting to Kafka:", error);
    }
};

return(
  <div>

  {show?<h1>{dataHeder}</h1>:<h1> My Commuinity - Find Me Activity</h1>}
  {show?<div>
      
      {data.length > 0 ? (
        <Carousel data={data} /> // Pass the restaurant data to Carousel
      ) : (
        <p>No data available</p>
      )}
    </div>
  :
  
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
    </div>}
  
  </div>
)
}

export default MainFormComponent;