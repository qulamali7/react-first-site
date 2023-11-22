import React from 'react'
import "./Index.scss"
import BuildingCards from '../BuildingCards/Index'
const Building = () => {
  return (
    <section id='building'>
        <div className='building-content'>
            <h2>A better way to start building.</h2>
            <BuildingCards/>
        </div>
    </section>
  )
}

export default Building