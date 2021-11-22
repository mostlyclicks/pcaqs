import React from 'react'
import Header from './components/Header'
import AQList from './components/AQList'


const qas = [
  {question: "Where can I get a good steak in Park City?", answer: "There are many places in Park City notably Ruth Chris, Chop House and Meat"},
  {question: "Are there bike paths in Park City?", answer: "Park City has many miles of bike paths - Read more."},
  {question: "How much does it snow in Park City?", answer: "Park City typically has 300 to 500 inches of snow per year - Read more."},
]


function App() {
  return (
    <div className="">
      <Header />
      <AQList lists={qas} />
    </div>
  );
}

export default App;
