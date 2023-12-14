import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../App.css';
import DetailsBuisnessComponent from './DetailsBuisnessComponent';
import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Routes,Route,Link } from 'react-router-dom';
import LoginCompanent from './LogInCompanent';
import AboutCompanent from './AboutComponent';
import SingInCompanent from './SingInComponent';
const ShowComponent=(props) =>{
    const [bId,setBId] = useState('');
    const showPageFunc=() => {
      props.callback({showPage:!props.showPage})
    }
    const mainLogo = () => {
      setBId(1);
      <DetailsBuisnessComponent/>
      //window.location.replace('http://www.kidron.org.il/');
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
    
    
<br />
<div className='squreOpen'>
<div className='myCommunityLogo'></div>
<div className='menu'>
<Link className="menuLink" to="/login" onClick={showPageFunc}>Login</Link>
<Link className="menuLink" to="/singin" onClick={showPageFunc}>SingIn</Link>
<Link className="menuLink" to="/about" onClick={showPageFunc}>About</Link>
<Routes >
      <Route path="/login" element={<LoginCompanent />} />
      <Route path="/about" element={<AboutCompanent />} />
      <Route path="/singin" element={<SingInCompanent />} />
    </Routes>
</div>
</div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          <Grid item xs={3} sm={6} md={4} >
          <item><div className="pattern">1
          </div></item>
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
