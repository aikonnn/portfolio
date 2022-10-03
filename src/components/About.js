import React,{useState} from 'react';
import {DiJava, DiGitBranch, DiPython, DiHtml5, DiCss3, DiReact} from "react-icons/di";
import {IconContext} from 'react-icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';


function About(){
    const java = {
        lang: 'java',
        code: `public class Greetings(){
    public static void main(String[] args){
        System.out.println("Hi!");
        System.out.println("I used this to learn
        Object-oriented programming!");
    }
}
`
    }

    const python = {
        lang: 'python',
        code: `print("This is the start of, my journey!")
`
    }

    const html = {
        lang: 'html5',
        code: `<h1 class="title">
    I used this to start webdev!
</h1>
<h2 clasName="text-blue-300 py-10">
    Now with Tailwindcss!!
</h2>
`
    }

    const css = {
        lang: 'css3',
        code: `.title{
    /* though the classics is pretty neat! */
    color: blue;
    font-family: sans-serif;
}
`
    }

    const [codeBlock, setCode] = useState(java);

    return (
        <React.Fragment>
            <div className ="bg-gradient-to-b from-white to-gray-300 flex-col items-center px-10 justify-center h-screen">
                <div className ="p-10 bg-white shadow-md max-w-3xl mx-auto">
                    
                    <h1 className ="text-xl pb-8">
                        About me
                    </h1>
                    <p>
                        I'm a second-year international student from Thailand currently pursuing a degree 
                        in computer engineering at the University of British Columbia.
                    </p>
                </div>

                <div className ="p-10 bg-white shadow-md mt-10 flex-col items-center max-w-3xl mx-auto">
                    <div className ='text-center'>

                    <h1 className ="text-xl pb-8">
                        Skills
                    </h1>
                    </div>
                    <div className ='flex justify-evenly pb-5'>
                    <button onClick={() => setCode(java)}>
                    <IconContext.Provider value={{ className: "w-10 h-10 hover:text-red-500 hover:-translate-y-1 hover:scale-110" }}>
                        <div>
                            <DiJava />
                        </div>
                    </IconContext.Provider>
                    </button>

                    <button onClick={() => setCode(python)}>
                    <IconContext.Provider value={{ className: "w-10 h-10 hover:text-yellow-700 hover:-translate-y-1 hover:scale-110" }}>
                        <div>
                            <DiPython />
                        </div>
                    </IconContext.Provider>
                    </button>

                    <button onClick={() => setCode(html)}>
                    <IconContext.Provider value={{ className: "w-10 h-10 hover:text-blue-700 hover:-translate-y-1 hover:scale-110" }}>
                        <div>
                            <DiHtml5 />
                        </div>
                    </IconContext.Provider>
                    </button>

                    <button onClick={() => setCode(css)}>
                    <IconContext.Provider value={{ className: "w-10 h-10 hover:text-orange-700 hover:-translate-y-1 hover:scale-110" }}>
                        <div>
                            <DiCss3 />
                        </div>
                    </IconContext.Provider>
                    </button>

                    <IconContext.Provider value={{ className: "w-10 h-10 hover:text-blue-300 hover:-translate-y-1 hover:scale-110" }}>
                        <div>
                            <DiReact />
                        </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ className: "w-10 h-10 hover:text-red-500 hover:-translate-y-1 hover:scale-110" }}>
                        <div>
                            <DiGitBranch />
                        </div>
                    </IconContext.Provider>
                    </div>

                    <div>
                        <SyntaxHighlighter language={codeBlock.lang}  style={a11yDark} wrapLongLines={true}>
                            {codeBlock.code}
                        </SyntaxHighlighter>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default About;