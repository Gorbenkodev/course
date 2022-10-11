import { HomeownerIcon, ProfesionalIcon } from "./svg"

export const SelectRole = () => {


  return (
    <div className="main-select">
      <h4 className="title-select">Which describes you best?</h4>
      <div className="homeowner select-block">
        <HomeownerIcon />
        <h4>Homeowner</h4>
        <p>I am a homeowner or interesed in home design. </p>
      </div>
      <div className="professional select-block">
        <ProfesionalIcon/>
        <h4>Profesional</h4>
        <p>I offer home improvement services or sell home products.</p>
      </div>
      <button className="button-select">Next</button>
    </div>
  )
}