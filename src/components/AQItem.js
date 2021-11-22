import React from 'react'

const AQItem = (props) => {

  const question = props.question
  const answer = props.answer

  return (
    <li>
      Q: {question}<br />
      A: {answer}<br />
    </li>
  )
}

export default AQItem
