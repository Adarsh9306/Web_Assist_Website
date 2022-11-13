import React,{useState,useEffect} from 'react'
import "./Settings.css";
import Button from "../../Components/Button/Button.js"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Settings() {
    let one;
    let two;
    let three;
    let four;
    axios
    .post(
        "http://localhost:5000/get",
        {
        username: localStorage.getItem("homeName"),
        }
        ,
    )
    .then((res) => {
        if(res.status === 200){
            one = (res.data.user)[0].definition;
            two = (res.data.user)[0].colorWheel;
            three = (res.data.user)[0].timeSpent;
            four = (res.data.user)[0].timeLimit
        }
    })
    .catch((err) => {
        console.log(err);
    });


    const navigate = useNavigate();

    const [definition,setDefinition] = useState(one);
    const [colorWheel,setColorWheel] = useState(two);
    const [timeSpent,setTimeSpent] = useState(three);
    const [timeLimit,setTimeLimit] = useState(four);

    const { vertical, horizontal} = {vertical: "top" , horizontal: "right"};

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
            setOpen1(false);
        };
    
      const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
            setOpen2(false);
      };

    const handleClick = (e)=>{
        e.preventDefault();
        axios
        .post(
          "http://localhost:5000/settings",
          {
            username: localStorage.getItem("homeName"),
            definition: definition,
            colorWheel: colorWheel,
            timeSpent: timeSpent,
            timeLimit: timeLimit,
          }
          ,
        )
        .then((res) => {
            if(res.status === 200){
                setSuccessMessage("Settings Successfully Saved");
                setOpen1(true);
            }
        })
        .catch((err) => {
          setErrorMessage(err);
          setOpen2(true);
        });
    }

    return (
        <>
        <Snackbar className="snackBar" open={open1} autoHideDuration={2000} onClose={handleClose1} anchorOrigin={{ vertical, horizontal }}>
            <Alert onClose={handleClose1} severity="success" sx={{ width: '100%' }}>
                {successMessage}
            </Alert>
        </Snackbar>
        <Snackbar className="snackBar" open={open2} autoHideDuration={2000} onClose={handleClose2} anchorOrigin={{ vertical, horizontal }}>
            <Alert onClose={handleClose2} severity="error" sx={{ width: '100%' }}>
                {errorMessage}
            </Alert>
        </Snackbar>
        <div className="settings">
        <div className="main_form">
            <h1>Settings</h1>
            <p>Select the things you want in your chrome extension</p>
            <form>
                <div className="inputElement">
                    {definition ? 
                    <input checked onChange={()=>{
                        setDefinition((prev)=>(!prev))
                    }} type="checkbox" id="definition" name="definition" value="definition"></input>
                    :
                    <input onChange={()=>{
                        setDefinition((prev)=>(!prev))
                    }} type="checkbox" id="definition" name="definition" value="definition"></input>
                    }
                    <label htmlFor="definition">Definition</label>
                </div>
                <div className="inputElement">
                    {colorWheel ? 
                    <input checked onChange={()=>{
                        setColorWheel((prev)=>(!prev))
                    }} type="checkbox" id="colorWheel" name="colorWheel" value="colorWheel"></input>
                    :
                    <input onChange={()=>{
                        setColorWheel((prev)=>(!prev))
                    }} type="checkbox" id="colorWheel" name="colorWheel" value="colorWheel"></input>
                    }
                    <label htmlFor="definition">Color Wheel</label>
                </div>
                <div className="inputElement">
                    {timeSpent ? 
                    <input checked onChange={()=>{
                        setTimeSpent((prev)=>(!prev))
                    }} type="checkbox" id="timeSpent" name="timeSpent" value="timeSpent"></input>
                    :
                    <input onChange={()=>{
                        setTimeSpent((prev)=>(!prev))
                    }} type="checkbox" id="timeSpent" name="timeSpent" value="timeSpent"></input>
                    }
                    <label htmlFor="definition">Time Spent</label>
                </div>
                <div className="inputElement">
                    {timeLimit ? 
                    <input checked onChange={()=>{
                        setTimeLimit((prev)=>(!prev))
                    }} type="checkbox" id="timeLimit" name="timeLimit" value="timeLimit"></input>
                    :
                    <input onChange={()=>{
                        setTimeLimit((prev)=>(!prev))
                    }} type="checkbox" id="timeLimit" name="timeLimit" value="timeLimit"></input>
                    }
                    <label htmlFor="definition">Time Limit</label>
                </div>
                <div className="buttons">
                    <button className="btn1" type="submit" onClick={handleClick}>Save</button>
                    <Button 
                        class="btn1"
                        ClickFunction={() => {
                        navigate("/home");
                        }}
                        heading="Go Back"
                    />
                </div>
            </form>
        </div>    
    </div>  
        </>
  )
}

export default Settings