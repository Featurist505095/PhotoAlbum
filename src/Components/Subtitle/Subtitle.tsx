import React, { FunctionComponent } from 'react'
import './Subtitle.scss'

interface SubtitleProps {
  text: string
}

const Subtitle: FunctionComponent<SubtitleProps> = ({ text }) => {
  return <h2 className="subtitle">{text}</h2>
}

export default Subtitle
