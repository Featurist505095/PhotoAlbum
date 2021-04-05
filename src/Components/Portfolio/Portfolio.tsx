import React from 'react'
import Description from '../Description'
import Subtitle from '../Subtitle'
import './Portfolio.scss'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Subtitle text={'Portfolio'} />
      <Description
        text={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus omnis nihil, debitis ipsa doloribus!'
        }
      />
    </div>
  )
}

export default Portfolio
