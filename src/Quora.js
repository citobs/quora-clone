import React from "react";
import Navbar from "./Navbar";
import './Quora.css'
import Sidebar from "./Sidebar";


function Quora(){
    return(
        <div className="quora">
            <Navbar/>
            <div className="quora_content">
             <Sidebar/>
            </div>
            
        </div>
    );
}

export default Quora;