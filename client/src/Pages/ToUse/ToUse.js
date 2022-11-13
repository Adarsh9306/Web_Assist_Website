import React from 'react'
import Button from "../../Components/Button/Button.js"
import { useNavigate } from "react-router-dom";
import "./ToUse.css"

function ToUse() {
  
    const navigate = useNavigate();

    return (
    <div className="toUse">   
        <div className="mainContent">
            <h1>How to use WEB ASSIST?</h1>
            <p className="para">
            1. For search feature simply type the word or name of the button you are looking for in the search box and press search button and all the instances of the word will be highlighted. You can use speech to text to input the keyword too.
                To remove the highlight simply refresh the page.

            </p>
            <p className="para">
            2. For customising the color of highlight simply click on the color next to fill color or border color text in the extension and select the preferred color and next time when you search a word that color will be used.

            </p>
            <p className="para">
            3. To find the definition of a word you can select the word and click on “find” button to find the definition of the word.

            </p>
            <p className="para">
            4. To see how much time was spent on a website just click on “calculate” button.
            </p>
            <p className="para">
            5. To set a time limit enter the time in *(seconds/minutes)* in the last input field and press on “set” button to initiate the timer and once the time is up it will show and alert.
            </p>
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

export default ToUse