import React from 'react'
import AQItem from './AQItem'

const AQList = (props) => {

  const qalist = props.lists
  console.log(qalist)

  return (
    <section>
      <h1>Asked Questions</h1>
      <ul>
        {qalist.map((qaitem) => {

          return (
            <AQItem question={qaitem.question} answer={qaitem.answer} />
          )
        })}
      </ul>
      
    </section>
  )
}

export default AQList
