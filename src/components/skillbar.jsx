import React, { Component } from "react";
import "../assests/stylesheet/skillbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Skillbar extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    AOS.init();

    console.log(this.props.skilldata);
    this.setState({ data: this.props.skilldata });
    this.runsub();
  }
  runsub() {
    var arr = this.props.skilldata[0].percentage;
    var arrname = this.props.skilldata[0].name;
    console.log(arr);
    var x = document.getElementsByClassName("bar_frame");
    var i,ele1='',ele2='',j;

    for (i = 0; i < arrname.length/2; i++) 
    {
        ele1=ele1+"<span>"+arrname[i]+"</span><div class='bar_frame'><div class='bar_per_cent' data-aos=subj" + i + "></div></div>"
    }
    for (j = i; j < arrname.length; j++) 
    {
        ele2=ele2+"<span>"+arrname[j]+"</span><div class='bar_frame'><div class='bar_per_cent' data-aos=subj" + j + "></div></div>"
    }
    document.getElementById("skilldataset").innerHTML = ele1;
    document.getElementById("skilldataset2").innerHTML = ele2;

    


    var val = "";
    for (i = 0; i < x.length; i++) {
      val = val +"[data-aos^=subj" + i + "].aos-animate { width: " + arr[i] +"%;}";
    }
    document.getElementById("progress_barstyles").innerHTML = val;
  }
  render() {
    //  document.addEventListener('aos:in', ({ detail }) => {
    //     console.log('animated in', detail);
    //     let ele= document.getElementById(detail.id).style;
    //     ele.backgroundColor="black";

    //   });
    //   document.addEventListener('aos:out', ({ detail }) => {
    //     console.log('animated out', detail);
    //   });
    return (
      <div >
        <div data-aos="fade-in">
          <style type="text/css" id="progress_barstyles"></style>
          <div className="col s12 m6 progress_bar" id="skilldataset">
            
          </div>
          <div className="col s12 m6 progress_bar" id="skilldataset2">
            
          </div>
        </div>
      </div>
    );
  }
}
export default Skillbar;
