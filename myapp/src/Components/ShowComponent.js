import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../App.css';
import UserPageComponent from './UserPageComponent';
const ShowComponent=() =>{

    const mainLogo = () => {
      window.location.replace('http://www.kidron.org.il/');
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
          <item><UserPageComponent/></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item>
            
            <div className="pattern">2
              </div>
            
           


           </item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">3
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">4
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item>
            <div className='mainLogo' onClick={mainLogo}> </div>
            </item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">6
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">7
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">8
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">9
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">10
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">11
            </div></item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <item><div className="pattern">12
            </div></item>
            </Grid>
        )
      </Grid>
    </Box>
    </div>
  );
}
export default ShowComponent;
