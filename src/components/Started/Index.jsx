import React from 'react';
import "./Index.scss";
import StartedText from '../StartedText/Index';
import StartedImg from '../StartedImg/Index';

const Started = () => {
  return (
    <section id='started'>
        <div className='started-content'>
            <StartedText/>
            <StartedImg/>
        </div>
    </section>
  )
}

export default Started