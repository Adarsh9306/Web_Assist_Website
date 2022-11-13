import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import Portal from "../../images/Portal.svg";
import Button from "../../Components/Button/Button";
import back_img from "../../images/back_img.svg";
import Navbar from '../../Components/Navbar/Navbar.js';

function LandingPage() {
	const navigate = useNavigate();
	return (
		<>
		<Navbar />
		<div className="landing_page">
			<div className="left">
				<div className="info">
					<h1>WEB ASSIST</h1>
					<p className="heading1">Registration</p>
					<img src={Portal} alt="Portal" className="portal_img" />
					<p className="para">
						Easy Hack to Web Surfing begins here.
					</p>
					<Button
						class="btn1"
						ClickFunction={() => {
							navigate("/SignUp");
						}}
						heading="Create an Account"
					/>
					<Button
						class="btn2"
						ClickFunction={() => {
							navigate("/Login");
						}}
						heading="Login"
					/>
				</div>
			</div>
			<div className="right">
				<img alt="background" src={back_img} />
			</div>
		</div>
		</>
	);
}

export default LandingPage;
