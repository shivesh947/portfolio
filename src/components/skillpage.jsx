import React, { Component } from "react";
import Skillbar from "./skillbar";
import '../assests/stylesheet/skillpage.css'
import skilllogo from "../assests/images/skilllogo.svg"

class Skillpage extends Component{
    render() {
        return (
            <div>
                <center><img src={skilllogo} id="skilllogo"/></center>
                {/* <div className="col m6 s12" >jsnjdk</div> */}
                <Skillbar
                  className="col m12 s12"
                  skilldata={this.props.skilldata}
                />
               </div>
        )
    }
}
export default Skillpage;
 
