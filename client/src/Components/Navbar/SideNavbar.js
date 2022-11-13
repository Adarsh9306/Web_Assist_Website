import React,{useState} from 'react';
import main_logo from "../../images/main_logo2.svg";
import image1 from "../../images/nav_home.svg";
import image2 from "../../images/nav_chat.svg";
import image3 from "../../images/nav_pie.svg";
import image4 from "../../images/nav_setting.svg";
import image5 from "../../images/nav_exit.svg";
import open from "../../images/open.svg"
import "./SideNavbar.css"
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const BootstrapTooltip = styled(({ className, ...prop }) => (
    <Tooltip {...prop} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
}));

function SideNavbar(props) {

    const navigate = useNavigate();

    const [c1,setC1] = useState(false);

    const handleClick1 = ()=>{
        setC1((prev)=>{
            return !prev
        })
    }
  
    return (
    <div>
        <nav className={c1 ? "nav nav-closed" : "nav"}>
            <img
                src={open}
                alt=""
                className="nav__expand"
                onClick={handleClick1}
                viewBox="0 0 256 512"
                width="100"
                title="angle-right"
            />

            <ul className="nav__list">
                <li className="nav__listitem">
                <a href="# " className="logos">
                    <BootstrapTooltip title = {props.homeName}>
                        <div>
                        <img
                        src={main_logo}
                        alt=""
                        viewBox="0 0 448 512"
                        width="100"
                        title="atom"
                        className="logo"
                        />
                        </div>
                    </BootstrapTooltip>
                </a>
                </li>
                <li className="nav__listitem nav__listitem-active"  onClick={()=>{navigate("/home")}}>
                <a href="">
                    <img
                    src={image1}
                    alt=""
                    viewBox="0 0 544 512"
                    title="chart-pie"
                    className="home"
                    />
                    <p>Home</p>
                </a>
                </li>
                <li className="nav__listitem">
                <a href="http://localhost:5500/">
                    <img
                    src={image2}
                    alt=""
                    viewBox="0 0 512 512"
                    title="chart-line"
                    className="chat"
                    />
                    <p>Contact us</p>
                </a>
                </li>
                <li className="nav__listitem" onClick={()=>{navigate("/bugFix")}}>
                <a href="">
                    <img
                    src={image3}
                    alt=""
                    viewBox="0 0 576 512"
                    title="inbox"
                    className="notice"
                    />
                    <p>Bug Fixes</p>
                </a>
                </li>
                <li className="nav__listitem" onClick={()=>{navigate("/settings")}}>
                <a href="">
                    <img
                    src={image4}
                    alt=""
                    viewBox="0 0 512 512"
                    title="cog"
                    className="settings"
                    />
                    <p>Settings</p>
                </a>
                </li>
                <li className="nav__listitem end"  onClick={() =>{navigate("/Login")}}>
                <a href="">
                    <img
                    src={image5}
                    alt=""
                    viewBox="0 0 512 512"
                    className="exit"
                    />
                    <p>Exit</p>
                </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default SideNavbar