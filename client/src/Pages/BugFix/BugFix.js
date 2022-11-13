import React from 'react'
import chart from "../../images/chart.svg";
import "./BugFix.css";
import Button from "../../Components/Button/Button.js"
import { useNavigate } from "react-router-dom";

function BugFix() {
  
    const navigate = useNavigate();
  
    return (
    <div className="BugFix">
        <h1>We got you covered. Download the latest version to get free from previous issues.</h1>
        <div className="timeline card">
            <div className="text">
            <div className="heading">Version 1.2(Latest)</div>
            <div className="para">
                Added Color Wheel Functionality
            </div>
                <button className="btn timeline_btn">Download Zip File</button>
            <div className="para"></div>
            </div>
            <img alt="chart" className="chart" src={chart} />
        </div>
        <div className="timeline card">
            <div className="text">
            <div className="heading">Version 1.1(Initial)</div>
            <div className="para">
                Initial Installment
            </div>
            <button className="btn timeline_btn">Download Zip File</button>
            <div className="para"></div>
            </div>
            <img alt="chart" className="chart" src={chart} />
        </div>
        <Button
                class="btn1"
                ClickFunction={() => {
                  navigate(-1);
                }}
                heading="Go Back"
              />
    </div>
  )
}

export default BugFix