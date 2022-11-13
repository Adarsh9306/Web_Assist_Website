import React,{useState,useEffect} from 'react'
import "./Home.css"
import SideNavbar from "../../Components/Navbar/SideNavbar.js";
import { useNavigate } from "react-router-dom";
import man from "../../images/man.svg";
import chart from "../../images/chart.svg";
import userManual from "../../images/userManual.jpg";

function Home() {
    const navigate = useNavigate();
    
    const [homeName,setHomeName] = useState("");
    const [role,setRole] = useState("");

    useEffect(()=>{
        setRole(localStorage.getItem("role"));
        setHomeName(localStorage.getItem("homeName"))
    },[]);

    return (
        <>
        <SideNavbar homeName = {homeName} />
        {role === "Admin" ?    
            <div className="homeAdmin home">
            <div className="cards">
                <div className="profile card">
                    <div className="text">
                    <div className="heading">Get WebAssist</div>
                    <div className="para">
                        To know more about the chrome extention click the button below
                    </div>
                    <div className="sub_para"></div>
                        <button className="btn" onClick={()=>{
                            navigate("/learn_more")
                        }}>Learn more</button>
                    </div>
                    <img alt= "man" className="profile_img" src={man} />
                </div>
                <div className="userManual card">
                    <div className="text">
                    <div className="heading">Learn About Web Assist</div>
                    <div className="para">
                        To Learn How to use click the button below
                    </div>
                    <div className="sub_para"></div>
                        <button className="btn" onClick={()=>{
                            navigate("/usermanual")
                        }}>Learn more</button>
                    </div>
                    <img alt= "man" className="user_img" src={userManual} />
                </div>
                <div className="timeline card">
                    <div className="text">
                    <div className="heading">Why Not Try it ?</div>
                    <div className="para">
                        Make your problems go away.
                    </div>
                        <button className="btn timeline_btn">Download Zip File</button>
                    <div className="para"></div>
                    </div>
                    <img alt="chart" className="chart" src={chart} />
                </div>
            </div>


            </div> 
            : 
            <div className="homeUser home">
            <div className="cards">
                <div className="profile card">
                    <div className="text">
                    <div className="heading">Get WebAssist</div>
                    <div className="para">
                        To know more about the chrome extention click the button below
                    </div>
                    <div className="sub_para"></div>
                        <button className="btn" onClick={()=>{
                            navigate("/learn_more")
                        }}>Learn more</button>
                    </div>
                    <img alt= "man" className="profile_img" src={man} />
                </div>
                <div className="userManual card">
                    <div className="text">
                    <div className="heading">Learn About Web Assist</div>
                    <div className="para">
                        To Learn How to use click the button below
                    </div>
                    <div className="sub_para"></div>
                        <button className="btn" onClick={()=>{
                            navigate("/usermanual")
                        }}>Learn more</button>
                    </div>
                    <img alt= "man" className="user_img" src={userManual} />
                </div>
                <div className="timeline card">
                    <div className="text">
                    <div className="heading">Why Not Try it ?</div>
                    <div className="para">
                        Make your problems go away.
                    </div>
                        <button className="btn timeline_btn">Download Zip File</button>
                    <div className="para"></div>
                    </div>
                    <img alt="chart" className="chart" src={chart} />
                </div>
            </div>
            </div>
        }          
    </>
  )
}

export default Home