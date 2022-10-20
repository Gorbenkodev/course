import React, { useState } from "react"
import { HomeownerIcon, ProfesionalIcon } from "./svg"

export const SelectRole = () => {
  const [active, setActive] = useState(true)
  
  const addClass = () => {
    setActive(prev => !prev)
  }

  

  return (
    <div className="main-select">
      <h4 className="title-select">Which describes you best?</h4>
      <div className={`select-block ${active ? '' : 'block-active'}`} onClick={addClass}>
        <HomeownerIcon />
        <h4>Homeowner</h4>
        <p>I am a homeowner or interesed in home design. </p>
      </div>
      <div className={`select-block ${active ? '' : 'block-active'}`} onClick={addClass}>
        <ProfesionalIcon/>
        <h4>Profesional</h4>
        <p>I offer home improvement services or sell home products.</p>
      </div>
      <button className="button-select">Next<i className="arrow"></i></button>
    </div>
  )
}