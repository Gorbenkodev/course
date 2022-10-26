import React from "react";
import { PrevButton } from "./button";
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
            id="eco"
            />
            <label for='eco'>Economy</label>
          </div>
          <div className="second-form-categories-block">
            <input
            className="input-checkbox"
            type='checkbox'
            id="bus"
            />
            <label for='bus'>Business</label>
          </div>
          <div className="second-form-categories-block">
            <input
            className="input-checkbox"
            type='checkbox'
            id="trad"
            />
            <label for='trad'>Trading</label>
          </div>
          <div className="second-form-categories-block">
            <input
            className="input-checkbox"
            type='checkbox'
            id="comm"
            />
            <label for='comm'>Communications</label>
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
        <PrevButton />
        <input type='submit' className="next-btn" />
      </div>
    </div>
  )
}