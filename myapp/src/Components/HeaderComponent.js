import '../App.css';
import { Link, Routes } from 'react-router-dom';
const HeaderCompanent=() =>{
return(
  <div className='header'>
  <div className='header_with_logo'>
  <div className='myCommunityLogo_small'></div>
  <div className='p_header'>My Community - Stronger together</div> 
  </div>
  <div className='link'>
  <Link className='link_p' to='/'>סדנאות</Link>
  <span className="bullelements">&bull;</span>
  <Link className='link_p' to='/'>ספורט</Link>
  <span className="bullelements">&bull;</span>
  <Link className='link_p' to='/'>משפחתי</Link>
  <span className="bullelements">&bull;</span>
  <Link className='link_p' to='/'>זוגי</Link>
  <span className="bullelements">&bull;</span>
  <Link className='link_p' to='/'>עם חברים</Link>
  <span className="bullelements">&bull;</span>
  <Link className='link_p' to='/'>אוכל</Link>
  <span className="bullelements">&bull;</span>
  <Link className='link_p' to='/'>טיולים</Link>
  <span className="bullelements">&bull;</span>
  <Link className='link_p' to='/'>ילדים</Link>
  </div>

  </div>
)
}

export default HeaderCompanent;