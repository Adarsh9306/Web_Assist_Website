import React from 'react'
import "./LearnMore.css"
import Button from "../../Components/Button/Button.js"
import { useNavigate } from "react-router-dom";

function LearnMore() {
  
    const navigate = useNavigate();
  
    return (
    <div className="learnMore">   
        <div className="mainContent">
            <h1>What can web assist do for you?</h1>
            <p className="para">
            1. Search any keyword you want and we will find it and highlight it for you even if it is not mentioned explicitly anywhere in the website.
            </p>
            <p className="para">
            2. It also lets you customise the highlight colour to match your preferences and make it more accessible.            </p>
            <p className="para">
            3. Protects you from harmful links by alerting you whenever you are being redirected and if you still what to visit the link you can.            </p>
            <p className="para">
            4. Find the definition of the word easily with just selecting the word and clicking the definition button.            </p>
            <p className="para">
            5. Provides voice to text and text to voice for input and output fields for better accessibility.            </p>
            <p className="para">
            6. Also a timer feature is provided to track and limit the time spent in a website for parental control or simply limiting screen time.
            </p>
            <p className="para">
            7. If you have a problem we also have a customer support chat system.            
            </p>
            <p className="para">
            8. If you don’t need any of the functionality but only need one, you can customise it in the settings tab and get a minimal UI for the extension.            </p>
            <Button
                class="btn1"
                ClickFunction={() => {
                  navigate(-1);
                }}
                heading="Go Back"
              />
        </div>
    </div>
  )
}

export default LearnMore