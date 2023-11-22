import React from 'react';
import "./Index.scss";
import Buttons from '../Buttons/Index';
const StartedText= () => {
  return (
    <div className='startedtext-content'>
      <h1>A Bootstrap 5 template for modern businesses</h1>
      <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
      <div className='buttons'>
        <Buttons text="Get Started" style={{ background:"#0d6efd" }}/>
        <Buttons text="Learn More"/>
      </div>
    </div>
  )
}

export default StartedText;