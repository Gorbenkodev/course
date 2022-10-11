import React, { useState} from "react";

const RateSwitch = (props) => {
  const [show, setShow] = useState(true)


    return(
      <div>
        <p className="toggleFilms" onClick={() => setShow(!show)}>{show ? 'Show Rate' : 'Hide Rate'}</p>
        {
          !show && (
            <p className={`${props.darkMode ? 'rateFilm-dark' : 'rateFilm-light'}`}>{props.popularity}</p>
          )
        }
      </div>
    )
}


export default RateSwitch