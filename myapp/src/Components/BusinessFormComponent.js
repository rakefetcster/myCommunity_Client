import React, { useState } from 'react';

function BusinessFormComponent() {
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [choice, setChoice] = useState('');
  const [about, setAbout] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Submitted:', { companyName, choice, about });
  };

  return (
    
    <div className='borderForm'>
    <div className='allcontact'>
      <div className='myCommunityLogo3'></div>
      <div className='formBorder'>
      <div className='h11'>Create Business Card</div>
      <br />
      <div className='p3'>The business card will be the user interface display of the business</div>
      </div>
    </div>
    
    <form onSubmit={handleSubmit}>
      <div className='contextForm'>
        <label>
          Business Name:
          <input className ='input' type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label>
        Business address (city, street, No.):
        <input className ='input' type="text" value={address} onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <div className='betweenForm'>
        <label>
        Business Category:
          <select className='select' value={choice} onChange={(e) => setChoice(e.target.value)}>
            <option value="option1">סדנאות</option>
            <option value="option2">ספורט</option>
            <option value="option3">משפחתי</option>
            <option value="option4">זוגי</option>
            <option value="option3">עם חברים</option>
            <option value="option2">אוכל</option>
            <option value="option7">טיולים</option>
            <option value="option8">ילדים</option>
          </select>
        </label>
      </div>
      <div className='betweenForm'>
        <label>
        About The Business:
          <textarea className='textarea'
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </label>
        <label for="img">Select image:</label>
        <input type="file" id="img" name="img" accept="image/*"/>
      </div>
      <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default BusinessFormComponent;
