
import React , {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

 export default class About extends Component{
  render(){
    return (
      <div className="blogcontainer">
       <div className="javascriptblog">
          <div className = "jsblog">
            <Link to="/jsblog"></Link> 
          </div>
       </div>
       <div className="react" >
          <div className="reacttext">
           <Link to="/reactblog"></Link> 
          </div>
       </div>
       <div className="html ">

                  {/* <div class="middletext">
                    <div className="textblog">
                    
                    <a href = "https://google.com"> Blog on HTML</a>
                    </div>
                */}
                <div className="textblog">
                <Link to="/htmlblog"></Link> 
                </div>
                
                
                </div>
              
       </div>
      
      
    )
  }
  
}


