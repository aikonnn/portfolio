import React from "react";
import {BsBrightnessLow} from "react-icons/bs";
import Pdf from '../documents/resume.pdf';

function NavBar(){
    return (
        <React.Fragment>
            <div className = "flex justify-between shadow-md items-center z-50 sticky top-0 bg-white">
                <div className = "px-5 font-light font-sans text-xl flex items-center">
                    AIKONNN
                    <div className='px-3 pt-1'>
                    <BsBrightnessLow />
                    </div>
                </div>
                
                <div className = "flex">
                    <button onClick="location.href='mailto:nokia.methasit@gmail.com';" className = "bg-gradient-to-tr from-indigo-500 via-indigo-300 to-purple-300 m-2 bg-size-200 bg-pos-0 px-3 rounded-lg h-10 text-white transition hover:scale-110 text-center">
                    <a href="mailto:nokia.methasit@gmail.com">Contact</a>
                    </button>
                    <button className = "bg-gradient-to-tr from-indigo-300 to-purple-300 m-2 px-3 rounded-lg h-10 text-white transition hover:scale-110">
                        <a href={Pdf} target ="_blank">Resume</a>
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar;