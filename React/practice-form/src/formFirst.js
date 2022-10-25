import React, { useState } from "react"

export const FirstPage = () => {
  

  return (
    <div className="first-main">
      <h4 className="first-title">Basic information about you</h4>
      <div className="first-slider">
        <div className="first-slider-one"><p>1</p></div>
        <span  className="slider-span"></span>
        <div className="first-slider-two"><p>2</p></div>
      </div>
      <form className="first-form">
          <input 
          className="input-name"
          type='text'
          name='First name'
          placeholder='First Name'
          />
          <input
          className="input-name"
          type='text'
          name='Last Name'
          placeholder='Last Name'
          />
          <div className="first-form-gender">
            <h4 className="first-form-gender-title">Gender</h4>
            <div className="first-form-gender-block">
              <input
              className="input-radio"
              type='radio'
              id="male"
              name="gender"
              value='male'
              />
              <label for="male">Male</label>
            </div>
            <div className="first-form-gender-block">
              <input
              className="input-radio"
              type='radio'
              id="female"
              name="gender"
              value='female'
              />
              <label for='female'>Female</label>
            </div>
            <div className="first-form-gender-block">
              <input
              className="input-radio"
              type='radio'
              id="notSay"
              name="gender"
              value='notSay'
              />
              <label for='notSay'>I prefer not to say</label>

            </div>
            <div className="first-form-gender-block">
              <input
              className="input-radio"
              type='radio'
              id="other"
              name="gender"
              value='other'
              />
              <label for='other'>Other</label>
              <input
              className="input-other"
              type='text'/>
            </div>

          </div>
          <div className="first-form-phone">
            <select className="select-code">
              <option>+1</option>
              <option>+2</option>
              <option>+3</option>
              <option>+4</option>
              <option>+5</option>

            </select>
            <input
            className="input-phone"
            type='tel'
            />
          </div>
      </form>
      <div className="first-buttons">
        <button className="prev-btn"><i className="arrowPrev"></i>Previous</button>
        <button className="next-btn">Continue</button>
      </div>
    </div>
  )
}