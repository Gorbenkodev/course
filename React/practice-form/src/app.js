import React from "react"
import { Routes, Route, Switch } from 'react-router-dom'
import { FirstPage } from "./formFirst"
import { SecondPage } from "./formSecond"
import { SelectRole } from "./selectRole"



export const App = () => {

  return(
  <div>
    <Routes>
      <Route path="/" element={<SelectRole />} />
      <Route path="/formFirst" element={<FirstPage />} />
      <Route path="/formSecond" element={<SecondPage />} />
    </Routes>
  </div>

)}