import React, { useState } from "react"
import { ContButton, PrevButton } from "./button"

const useFormFields = (initialValues) => {
  const [fields, setFormFields] = useState(initialValues);

  const changeFieldValue = (e) => {
    const {name, value} = e.target;
    setFormFields(prev => ({
      ...prev,
      [name]: value,
    }))
  };

  return { fields, changeFieldValue };
}

export const FirstPage = () => {
  const {fields, changeFieldValue} = useFormFields({
    firstName: '',
    lastName: '',
    gender: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName: fields.firstName,
      lastName: fields.lastName,
      gender: fields.gender
    })
  }
  

  return (
    <div className="first-main">
      <h4 className="first-title">Basic information about you</h4>
      <div className="first-slider">
        <div className="first-slider-one"><p>1</p></div>
        <span  className="slider-span"></span>
        <div className="first-slider-two"><p>2</p></div>
      </div>
      <form className="first-form" onSubmit={handleSubmit}>
          <input 
          className="input-name"
          type='text'
          name='firstName'
          value={fields.firstName}
          onChange={changeFieldValue}
          placeholder='First Name'
          />
          <input
          className="input-name"
          type='text'
          name='lastName'
          value={fields.lastName}
          onChange={changeFieldValue}
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
              value='Male'
              onChange={changeFieldValue}
              />
              <label for="male">Male</label>
            </div>
            <div className="first-form-gender-block">
              <input
              className="input-radio"
              type='radio'
              id="female"
              name="gender"
              value='Female'
              onChange={changeFieldValue}
              />
              <label for='female'>Female</label>
            </div>
            <div className="first-form-gender-block">
              <input
              className="input-radio"
              type='radio'
              id="notSay"
              name="gender"
              value='Not Say'
              onChange={changeFieldValue}
              />
              <label for='notSay'>I prefer not to say</label>

            </div>
            <div className="first-form-gender-block">
              <input
              className="input-radio"
              type='radio'
              id="other"
              name="gender"
              />
              <label for='other'>Other</label>
              <input
              className="input-other"
              name="gender"
              value={fields.gender}
              onChange={changeFieldValue}
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
          <button type="submit">Sub</button>
      </form>
      <div className="first-buttons">
        <PrevButton />
        <ContButton />
      </div>
    </div>
  )
}