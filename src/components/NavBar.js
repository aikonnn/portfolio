import React from "react";

function NavBar(){
    return (
        <React.Fragment>
            <div className = "flex justify-between shadow-md items-center z-50 sticky top-0">
                <div className = "px-5 font-light font-sans text-xl">
                    AIKONNN
                </div>
                <div className = "flex">
                    <button className = "bg-gradient-to-tr from-indigo-500 via-indigo-300 to-purple-300 m-2 bg-size-200 bg-pos-0 px-3 rounded-lg h-10 text-white transition hover:scale-110">
                        Contact
                    </button>
                    <button className = "bg-gradient-to-tr from-indigo-300 to-purple-300 m-2 px-3 rounded-lg h-10 text-white transition hover:scale-110">
                        Resume
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar;