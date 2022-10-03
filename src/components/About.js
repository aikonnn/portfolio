import React from 'react';

function About(){

    return (
        <React.Fragment>
            <div className ="bg-gradient-to-b from-white to-gray-300 flex-col items-center px-10 justify-center h-screen">
                <div className ="p-10 bg-white shadow-md max-w-3xl mx-auto">
                    <h1 className ="text-xl pb-8">
                        About me
                    </h1>
                    <p>
                        I'm a second-year internationl student from Thailand currently pursuing a degree 
                        in computer engineering at the University of British Columbia.
                    </p>
                </div>

                <div className ="p-10 bg-white shadow-md mt-10">
                    <h1 className ="text-xl pb-8">
                        Skills
                    </h1>
                    <p>
                        I'm a second-year internationl student from Thailand currently pursuing a degree 
                        in computer engineering at the University of British Columbia.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;