import React, { useState} from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import backImg from "../../images/back_img.svg";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Navbar from '../../Components/Navbar/Navbar.js';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Login() {
  const [name, setName] = useState("");
  const [password,setPassword] = useState("");
  const [loadicon, setLoading] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
    
  const navigate = useNavigate();

  const { vertical, horizontal} = {vertical: "top" , horizontal: "right"};

  const handleChange1 = (e) => {
    setName(e.target.value);
  }
  const handleChange2 = (e) => {
    setPassword(e.target.value);
  };

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


  const handleClick = () => {
    if (name === "" || password === "" ) {
        setName("");
        setPassword("");
        setErrorMessage("Please Enter All the Fields");
        setOpen2(true);
    } else {
      setLoading(true);
      axios
        .post(
          "http://localhost:5000/login",
          {
            username: name,
            password : password,
          },
        )
        .then((res) => {
            if(res.status === 200){
                localStorage.setItem("homeName", res.data.name);
                if(res.data.roles.Admin === 5150){
                  localStorage.setItem("role","Admin");
                }
                else{
                  localStorage.setItem("role","User");
                }
                setName("");
                setPassword("");
                setLoading(false);
                setSuccessMessage("User Successfully Logged In");
                setOpen1(true);
                setTimeout(()=>{
                  navigate("/home");
                },1000);
            }
        })
        .catch((err) => {
          setName("");
          setPassword("");
          setLoading(false);
          setErrorMessage(err);
          setOpen2(true);
        });
    }
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
      <Navbar />
        <div className="login_page">
          <div className="left">
            <div className="main_form">
              <h1 className="heading">Login</h1>
              <p className="para">Login with your Name and registered Password</p>
              <form className="form">
                <Input
                  setnull={setName}
                  val={name}
                  change={handleChange1}
                  heading="Name"
                  placeholder="Enter your Name"
                  optional=""
                  type= "text"
                  autocomplete="off"
                />
                <Input
                  type = "password"
                  autocomplete="on"
                  setnull={setPassword}
                  val={password}
                  change={handleChange2}
                  heading="Password"
                  placeholder="Enter your Password"
                  optional=""
                />
              </form>
              <Button
                class="btn1"
                ClickFunction={handleClick}
                heading="Login"
                loading={loadicon}
              />
              <p className="bottom">
                Don’t have an account?{" "}
                <span
                  className="tosignup"
                  onClick={() => {
                    navigate("/SignUp");
                  }}
                >
                  {" "}
                  Create One
                </span>
              </p>
            </div>
          </div>
          <div className="right">
            <img alt="background" src={backImg} />
          </div>
        </div>
    </>
  );
}

export default Login;
