import React from 'react'
import Description from '../Description'
import Subtitle from '../Subtitle'
import './About.scss'

const About = () => {
  return (
    <div className="about">
      <Subtitle text={'Our Service'} />
      <Description
        text={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus omnis nihil, debitis ipsa doloribus hic ut ducimus quaerat tempore quos provident. Sequi doloribus tempore accusamus illo, rerum odio voluptas iure!'
        }
      />
    </div>
  )
}

export default About
