import * as React from 'react';
import '../App.css';
import DetailsBuisnessComponent from './DetailsBuisnessComponent';
import { useState } from 'react';
import MenuComponent from './MenuComponent';
import HeaderCompanent from './HeaderComponent';

const ShowComponent=(props) =>{
    
 
  const getDataFromMenu=(menuData)=>{
    props.callback(menuData);
  }
  return (
  <div>
    <MenuComponent callback={getDataFromMenu} isName={props.isName}/>
    <br/>
    <div className='container'>
      <p>My Community </p>
      <p>הקשר בין עסקים קטנים ובינוניים לאנשים </p>
      
    </div>
    <div className='table_hight'>
    <div className='container_table'>
      <div className='workshops'><div className='blue_workshops'></div><p className='p_workshop'>סדנאות</p></div>
      <div className='workshops'><p className='p_workshop'>ספורט</p><div className='blue_sport'></div></div>
      <div className='workshops'><div className='blue_family'></div><p className='p_workshop'>משפחתי</p></div>
      <div className='workshops'><p className='p_workshop'>זוגי</p><div className='blue_duble'></div></div>
      <br />
      <div className='workshops'><div className='blue_friends'></div><p className='p_workshop'>עם חברים</p></div>
      <div className='workshops'><p className='p_workshop'>אוכל</p><div className='blue_food'></div></div>
      <div className='workshops'><div className='blue_nature'></div><p className='p_workshop'>טיולים</p></div>
      <div className='workshops'><p className='p_workshop'>ילדים</p><div className='blue_kids'></div>
      </div>
    </div>
    </div>
    <div>
    <HeaderCompanent />
    </div>
    </div>
    
    
  );
}
export default ShowComponent;
