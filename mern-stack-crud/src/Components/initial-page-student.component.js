// Import Modules
import React, { useState, useEffect } from "react";
import logo from './logo.png';
import img from './img.jpg';


const InitialPage = () => {
return(
  <div class="div-initial">
    <h1 class="title">Welcome to Students APP</h1>
    <table class="table-initial">
    <tr>
        <td><img src={img} className="img" alt="img"/></td>
        <td></td>
        <td><img src={img} className="img" alt="img"/></td>
      </tr>
      <tr>
        <td></td>
        <td><img src={logo} className="logo" alt="logo"/></td>
        <td></td>
      </tr>
      <tr>
        <td><img src={img} className="img" alt="img"/></td>
        <td></td>
        <td><img src={img} className="img" alt="img"/></td>
      </tr>
    </table>
  </div>
)
}

export default InitialPage
