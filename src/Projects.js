import React,{Component } from 'react';
import face from './faceapp.PNG';
import drum from './drummachine.png'
import diamond from './diamondgame.png';
import calc from './calc.png';
import todo from './todo.png';
import wiki from './wiki.png'

export default class Projects extends Component {
  render(){
    return(
     
<div className="projectsection">
  
  <div className="firstblock">
  <div className="projectone">
  <img src={face} alt="da" className="faceapp" />
  <div class="middle">
    <div class="text">
      FACE DETECTION APPLICATION
      <br /> <br /><hr className="description"></hr> <br />
      <p> Retriving the information about the face by using POST method of fetch API</p>
      <p> Technologies used <br/>React, ReactRouter, Git</p>
      <p><a href="https://bmeghpal-face-detect.surge.sh/#/">Click here to see live</a></p>
    
    </div>
  </div>
</div>

  </div>
  <div className="secondblock">
  <div classname="firstrow">
  <div className="projecttwo">
<img src={drum} alt="da" className="drumapp" />
  <div class="Projecttwodescription">
    <div class="drumtext">
      DRUM MACHINE APPLICATION <br/>
       <hr className="description"></hr><br/>
      <p> An audio application which initiates different sounds on different input keys</p>
      <p> Technologies used <br/>React, Git</p>
      <p><a href="https://drummachineapp_bmeghpal.surge.sh/">Click here to see live</a></p>
    
    </div>
  </div> 

 </div>
 <div className="projectthree">

<img src={diamond} alt="da" className="drumapp" />

<div class="Projecttwodescription">
    <div class="diatext">
      DIAMOND SEARCH GAME <br/>
       <hr className="description"></hr><br/>
      <p> A game application which is about searching a total of 8 diamonds in 8x8 grid system</p>
      <p>Score is generated based on blocks which are left after the complete search</p>
      <p> Technologies used <br/>React, Git</p>
      <p><a href="https://diamond-game.surge.sh/">Click here to see live</a></p>
    
    </div>
  </div>
</div>


  </div>
  <div className="secondrow">
    <div className="projectfour">
      <img src={calc} alt="da" className="calcapp" />
      <div class="Projecttwodescription">
        <div class="calctext">
          CALCULATOR APPLICATION <br/>
          <hr className="description"></hr><br/>
          <p> A simple Calculator app which does basic arithmatic operations</p>
          <p> Technologies used <br/>React, Git</p>
          <p><a href="https://calculator-bmeghpal.surge.sh/">Click here to see live</a></p>
         </div>
      </div> 
    </div>
    <div className="projectfive">
    
    <img src={todo} alt="da" className="calcapp" />
      <div class="projectfivedesc">
        <div class="calctext">
          TODO APPLICATION <br/>
          <hr className="description"></hr><br/>
          <p>A to do application which does the basic operations i.e addition,deletion,updation</p>
          <p> Technologies used <br/>React, Git</p>
          <p><a href="https://bmeghpal_todoapp.surge.sh/">Click here to see live</a></p>
         </div>
      </div> 
    </div>
  </div>
  </div>
  <div className="thirdblock">
  <div className="projectsix">
  <img src={wiki} alt="da" className="wikiapp" />
      <div class="projectsixdesc">
        <div class="calctext">
          WIKIPEDIA VIWER APPLICATION <br/>
          <hr className="description"></hr><br/>
          <p>A wikipedia search machine which produce the first 10 results based on search</p>
          <p> Technologies used <br/>JavaScript, CSS,HTML,Fetch API</p>
          <p><a href="https://wiki-bmeghpal-viwer.surge.sh/">Click here to see live</a></p>
         </div>
      </div> 
  </div>
  <div className="projectseven"> 

  </div>
  </div>
  
 

  
  



</div>

    )
  }
}