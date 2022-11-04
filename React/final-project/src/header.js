import React, { useState } from "react";
import './style.css'

export function Header() {


  return(
    <div className="header">
      <a href=""><img width='250' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-RDEw6X60TOuyRKPZ9Yq55WZBFI2jDPMutw&usqp=CAU'></img></a>
      <div className="search"><input className="search-inpt" type='text' placeholder="Search"></input></div>
      <div className="basket">0</div>
    </div>
  );
}