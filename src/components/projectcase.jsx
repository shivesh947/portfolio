import React, { Component } from "react";
import projectlogo from "../assests/images/projectlogo.svg";
import "../assests/stylesheet/projectcase.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Projectcase extends Component {
  componentDidMount() {
    console.log(this.props.projectdata);
    AOS.init();
  }

  render() {
    const numbers = this.props.projectdata;
    const listItems = numbers.map((number,index)  => (
    <div className="col m4 s12" key={index}  data-aos="flip-right" data-aos-duration="2000">
        {console.log(number.Name)}
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src={number.imageLink} />
            
            </div>
            {/* <span className="card-title">{number.Name}</span> */}
            <div className="card-content" style={{minHeight: "215px"}}>
              <h5>{number.Name}</h5>
              <p>
                {number.shorddescription}
              </p>
            </div>
            <div className="card-action">
            {number.livelink ?(
              <a href={number.livelink} style={{fontSize:"20px"}}>Live show</a>
            ):
            <span></span>
            }
            {number.gitlink ?(
              <a href={number.gitlink}  style={{fontSize:"20px"}}>Git Link</a>
            ):
            <span></span>
            }              
            </div>
          </div>
        </div>
        </div>
      </div>
    ));
    console.log(listItems);
    return (
      <div>
        <div className="row" data-aos="fade-right">
            <div className="col12">
            <center>
          <img  src={projectlogo} id="projectlogo" />
        </center>
            </div>
        </div>
        <div className="row"  data-aos="fade-right">
        {listItems}
        </div>
      </div>
    );
  }
}
export default Projectcase;
