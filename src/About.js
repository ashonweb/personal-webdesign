import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <div >
        <div className="topnav" id="myTopnav">
        <Link to="/" className="active">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <a href="#skills">SKILLS & EXPERIENCE</a>
          <a href="#about">WRITING</a>
          <a href="#skills">CONTACT</a>
          <a href="javascript:void(0)" className="icon" onClick={this.myFunction}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
        {/* <div className="aboutbackground"></div> */}


        <div class="aboutbackground">>
          
          <div class="hover">
            <div class="text">My name is Bhagyashree Meghpal . I grew up in Kudremukh, Hill station in chickmangaluru.
            I did my schooling in Kudremukh from nursary till SSLC.
            When i was growing up trekking was one of thing which was part of everyday.
            Since kudremukh was hill station every day we would chose one mountain and climb.
            I've loved it since.After my school i did my PUC in st.ALoysius ,Mangalore college in PCME and scored a pretty decent marks.
             I did my graduation from Shri Jayachamarajendra college of Engineering Mysore in Computer Science and started my career in TATA CONSULTANCY Services Limited
            </div>
          
          </div>
          
        </div>
</div>
    );
  }
}