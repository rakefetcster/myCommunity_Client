import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../App.css';
import { Routes,Route,Link } from 'react-router-dom';
import LoginCompanent from './LogInCompanent';
import AboutCompanent from './AboutComponent';
import SingInCompanent from './SingInComponent';
import { useState } from 'react';

const ShowComponent=() =>{
  const [showPage,setShowPage] = useState('true');
  const showPageFunc = () => {
    setShowPage(!showPage);
    
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
    <h1>Welcome to My Community</h1>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          <Grid item xs={3} sm={6} md={4} >
          <div className="pattern">
            <Item >
            
              <Link to="/login" onClick={showPageFunc}>Login</Link><br />
              <Link to="/about" onClick={showPageFunc}>About</Link><br />
              <Link to="/singin" onClick={showPageFunc}>SingIn</Link><br />
              
              <Routes >
                <Route path="/login" element={<LoginCompanent />} />
                <Route path="/about" element={<AboutCompanent />} />
                <Route path="/singin" element={<SingInCompanent />} />
              </Routes>
              
    
            </Item>
            </div>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item>
            
            <div className="pattern">
              </div>
            
           


           </item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">
            </div></item>
            </Grid>
        )
      </Grid>
    </Box>
    </div>
  );
}
export default ShowComponent;
