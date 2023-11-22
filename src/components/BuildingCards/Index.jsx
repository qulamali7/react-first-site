import React from 'react'
import "./Index.scss";
import BuildingCard from '../BuildingCard/Index';
const BuildingCards = () => {
  return (
    <div className='cards'>
        <BuildingCard/>
        <BuildingCard/>
        <BuildingCard/>
        <BuildingCard/>
    </div>
  )
}

export default BuildingCards