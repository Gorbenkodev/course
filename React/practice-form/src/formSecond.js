import React from "react";
import { ReadyArrow } from "./svg";

export const SecondPage = () => {


  return (
    <div className="second-main">
      <h4 className="second-title">Basic information about you</h4>
      <div className="second-slider">
        <div className="second-slider-one"><ReadyArrow/></div>
        <span  className="slider-span"></span>
        <div className="second-slider-two"><p>2</p></div>
      </div>
      <form className="second-form">
        <div className="second-form-categories">
          <h4 className="second-form-categories-title">Categories you work with</h4>
          <div className="second-form-categories-block">
            <input
            className="input-checkbox"
            type='checkbox'
            />
            <p>Economy</p>
          </div>
          <div className="second-form-categories-block">
            <input
            className="input-checkbox"
            type='checkbox'
            />
            <p>Business</p>
          </div>
          <div className="second-form-categories-block">
            <input
            className="input-checkbox"
            type='checkbox'
            />
            <p>Trading</p>
          </div>
          <div className="second-form-categories-block">
            <input
            className="input-checkbox"
            type='checkbox'
            />
            <p>Сommunications</p>
          </div>
        </div>
        <input
        className="input-email"
        placeholder="Email"
        type='email'
        />
        <div className="second-form-password">
          <input
          className="input-password"
          placeholder="Password"
          type='password'
          />
          <p>The password has to be at least 8 characters long and contain at least one upper case letter.</p>
        </div>
      </form>
      <div className="first-buttons">
        <button className="prev-btn"><i className="arrowPrev"></i>Previous</button>
        <input type='submit' className="next-btn" />
      </div>
    </div>
  )
}