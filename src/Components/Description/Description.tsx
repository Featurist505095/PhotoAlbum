import React, { FunctionComponent } from 'react'
import './Description.scss'

interface DescriptionProps {
  text: string
}

const Description: FunctionComponent<DescriptionProps> = ({ text }) => {
  return <div className="description">{text}</div>
}

export default Description
