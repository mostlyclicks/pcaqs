import React from 'react'

const AQList = (props) => {

  const qalist = props.lists
  console.log(qalist)

  return (
    <section>
      <h1>Asked Questions</h1>
      <ul>
        {qalist.map((qaitem) => {

          return (
            <li>
              Q: {qaitem.question}<br/>
              A: {qaitem.answer}
            </li>
          )
        })}
      </ul>
      
    </section>
  )
}

export default AQList
