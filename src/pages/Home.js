import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="w-full h-full p-4 gap-4 bg-yellow-100 flex flex-col justify-center items-center">
            <h1 className="text-center font-bold text-2xl">Welcome to Project <span className="bg-yellow-400 text-yellow-50 px-1 rounded-md">Happiness!</span></h1>
            <p className="text-sm">Our project is a test that will show you the way to happiness. This project will assist students in determining which path to take in order to find authentic happiness, according to participants personality type, such as introvert, extrovert, or omnivert.</p>

            <Link to="/test" className="bg-yellow-900 text-yellow-50 text-center w-9/12 py-1 rounded-md">Start</Link>
        </div>  
    )
}

export default Home
