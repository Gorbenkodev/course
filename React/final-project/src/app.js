import React from "react";
import { Route } from "react-router-dom";
import Ccomponent from "./Ccomponent";
import { Content } from "./content";
import { Header } from "./header";
import { MainPage } from "./pages/mainPage";
import './style.css'


export const App = () => {

  return (
    <div>
      <MainPage />
    </div>
  )
}