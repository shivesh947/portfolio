import React, { Component } from "react";
import file from '../../src/resume.pdf';

class Floatingnavbutton extends Component {
    componentDidMount(){
        let M = window.M;
        var elems = document.querySelectorAll('.fixed-action-btn');
        var instances = M.FloatingActionButton.init(elems, {});
        var elems2 = document.querySelectorAll('.tooltipped');
        var instances2 = M.Tooltip.init(elems2, {});
    }
    changemode=()=>{
      var modeis=document.getElementById('nightmode').innerHTML;
      if(modeis=="brightness_2")
      {
        document.getElementById('nightmode').innerHTML="brightness_5";
        document.body.style.color="white";
        document.body.style.backgroundColor="grey";
        console.log("day");
      }
      else
      {
        document.getElementById('nightmode').innerHTML="brightness_2";
        document.body.style.color="black";
        document.body.style.backgroundColor="white";

        console.log("night");
      }
    }
  render() {
    return (
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red">
          <i className="large material-icons">donut_small</i>
        </a>
        <ul>
          <li>
            <a className="btn-floating red tooltipped" data-position="left" data-tooltip="Go top" href="#topview" >
              <i className="material-icons">arrow_upward</i>
            </a>
          </li>
          <li>
              <a className="btn-floating green tooltipped" data-position="left" data-tooltip="Contact me"  href="#contact">
              <i className="material-icons">contacts</i>
            </a>
          </li>
          <li>
              <a className="btn-floating yellow darken-1 tooltipped" data-position="left" data-tooltip="Resume"   href={file} download>
              <i className="material-icons">file_download</i>
            </a>
          </li>
          <li>
            <a className="btn-floating darkblue tooltipped" data-position="left" data-tooltip="Mode"  onClick={this.changemode}>
            <i className="large material-icons" id="nightmode">brightness_2</i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Floatingnavbutton;
