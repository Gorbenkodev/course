import React from "react";
import Ccomponent from "../Ccomponent";
import { Header } from "../header";


export function MainPage() {
  

  return(
    <div className="mainPage">
      <Header />
      <h2>Для вибору коктейлю скористайтесь пошуком або фільтром</h2>
      <Ccomponent />
    </div>
  )
}