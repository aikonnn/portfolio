import React from 'react';
import {SocialIcon} from "react-social-icons";

function Profile(){


    return (
        <React.Fragment>
            <div className = "items-center flex-col justify-center h-screen">
                <div className = "text-center p-20">
                <h1 className ="text-4xl py-4 font-bold">Methasit Tantiplubtong</h1>
                <h2 className = "text-xl pb-1">Nokia</h2>
                <h2 className = "text-xl py-4">Student and Amateur Developer</h2>
                <p className = "py-4 max-w-md mx-auto leading-6 text-gray-500">Studying computer and software engineering. <br/>
                Based in Vancouver, Canada. <br/>
                Passionate about making softwares that connects people. <br/>
                Looking for internship opportunities</p>
                </div>
                <div className ="flex justify-center gap-10">
                    <div className='transition hover:scale-110 hover:-translate-y-1'>
                    <SocialIcon url="https://github.com/aikonnn" />
                    </div>
                    <div className='transition hover:scale-110 hover:-translate-y-1'>
                    <SocialIcon url="https://linkedin.com/in/aikonnn" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile;