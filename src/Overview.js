import React from 'react'
import Card from "./Card"
import react from "./assets/tech/reactjs.png"
import web from "./assets/web.png"
import ai from "./assets/ai.jpg"
const cards = [
  {
    source : web,
    title : "Web Developer"
  },
  {
    source : react,
    title : "React Developer"
  },
  {
    source : ai,
    title : "AI Student"
  },
]
export default function Overview() {
  return (
    <>
      <p className = "text-gray-400 px-5 text-center md:text-left">Introduction</p>
      <h1 className = "text-white font-bold text-4xl px-5 text-center md:text-left">Overview.</h1>
      <p className = "text-gray-400 px-5 text-center md:text-left mt-3">
      Junior Front-End Developer skilled in building responsive web applications
       with React, Redux, and modern CSS frameworks. Passionate about solving real-world
       problems and seeking opportunities to contribute to impactful projects.
      </p>
      <div className ="flex flex-col items-center md:flex-row md:justify-start gap-5 flex-wrap mt-4 px-5">
        {
            cards.map((card , i )=> <Card key={i} title={card.title} i = {i + 1} image={card.source}/>)
        }
       </div>
    </>
  )
}
