import React , {Component} from 'react'
import './responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default class Navigation extends Component {
   myFunction = () =>{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  render(){
    return(
      <div>
        <div className= "topnav" id="myTopnav">
        <a href = "#home"className="active">Home</a>
        <a href = "#about">about</a>
        <a href = "#skills">skills</a>
        <a href="javascript:void(0)" className="icon" onClick = {this.myFunction}>
          <FontAwesomeIcon icon={faBars} />
        </a>
        </div>
      </div>
    )
  }
  
}