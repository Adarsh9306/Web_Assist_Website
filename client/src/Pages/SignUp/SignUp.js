import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import back_img from "../../images/back_img.svg";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loadicon, setLoading] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { vertical, horizontal} = {vertical: "top" , horizontal: "right"};

  const handleChange1 = (e) => {
    setName(e.target.value);
  };
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
    }
    else {
      setLoading(true);
      axios
        .post(
          "http://localhost:5000/register",
          {
            username: name,
            password : password,
          }
        )
        .then((res) => {
            setName("");
            setPassword("");
            setLoading(false);
            setOpen1(true);
            setSuccessMessage("User Successfully Registered");
        })
        .catch((err) => {
          setName("");
          setPassword("");
          setLoading(false);
          setOpen2(true);
          setErrorMessage(err.response.data.message);
        });
    }
  };

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
      <Navbar/>
        <div className="signup_page">
          <div className="left">
            <img alt="background" src={back_img} />
          </div>
          <div className="right">
            <div className="main_form">
              <h1 className="heading">Create an Account</h1>
              <p className="para">Personal information</p>
              <form className="form">
                <Input
                  autocomplete="off"
                  setnull={setName}
                  val={name}
                  change={handleChange1}
                  heading="Name"
                  placeholder="Enter your Name"
                  optional=""
                  type= "text"
                />
                <Input
                  autocomplete="on"
                  type = "password"
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
                heading="Create an Account"
                loading={loadicon}
              />
              <p className="bottom">
                Already Have an Account?{" "}
                <span
                  className="tologin"
                  onClick={() => {
                    navigate("/Login");
                  }}
                >
                  {" "}
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
    </>
  );
}

export default SignUp;
