import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../App.css';
import DetailsBuisnessComponent from './DetailsBuisnessComponent';
import { useState } from 'react';
import {Link } from 'react-router-dom';
import LoginCompanent from './LogInCompanent';
import AboutCompanent from './AboutComponent';
import SingInCompanent from './SingInComponent';

const ShowComponent=(props) =>{
    const [bId,setBId] = useState('');
    
    const mainData=(data)=>{
      const thisArray = [];
        thisArray.push(data, '');
        props.callback(thisArray);
    }
    const pageArray = [<LoginCompanent callback={mainData}/>,<SingInCompanent callback={mainData}/>,<AboutCompanent callback={mainData}/>];
    const showPageFunc=(val) => {
      const thisArray = [];
      if(val==='login'){
        thisArray.push(!props.main, pageArray[0] );
      } else if(val==='singin'){        
        thisArray.push(!props.main, pageArray[1] );
      } else if(val==='about'){
        thisArray.push(!props.main, pageArray[2] );
      } 
      props.callback(thisArray);
    }
    const mainLogo = () => {
      setBId(1);
      <DetailsBuisnessComponent/>
      //window.location.replace('http://www.kidron.org.il/');
    }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#B2B53F' : '#F8E9D6',
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
<Link className="menuLink" to="/login" onClick={() => showPageFunc('login')}>Login</Link>
<Link className="menuLink" to="/singin" onClick={() => showPageFunc('singin')}>SingIn</Link>
<Link className="menuLink" to="/about"  onClick={() => showPageFunc('about')}>About</Link>

</div>
</div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          <Grid item xs={3} sm={6} md={4} >
          <Item><div className="pattern">1
          </div></Item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <Item>
            
            <div className="pattern">2
              </div>
            
           </Item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <Item><div className="pattern">3
            </div></Item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <Item><div className="pattern">4
            </div></Item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <Item>
            <div className='mainLogo' onClick={mainLogo}> </div>
            </Item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <Item><div className="pattern">6
            </div></Item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <Item><div className="pattern">7
            </div></Item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <Item><div className="pattern">8
            </div></Item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <Item><div className="pattern">9
            </div></Item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <Item><div className="pattern">10
            </div></Item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <Item><div className="pattern">11
            </div></Item>
            </Grid>
            <Grid item xs={3} sm={6} md={4} >
            <Item><div className="pattern">12
            </div></Item>
            </Grid>
        )
      </Grid>
    </Box>
    </div>
  );
}
export default ShowComponent;
