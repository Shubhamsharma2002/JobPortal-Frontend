
import React from 'react'

const Navbar = () =>{
    return(
       <>
         <div className="p-3 bg-amber-700 flex justify-around text-white">
            <div className="">Logo</div>
            <div className="flex gap-5">
                <p>Login</p>
                <p>signup</p>
                <p>about</p>
                <p>contact</p>
                <p>jo bs</p>
            </div>
         </div>
       </>
    )
}

export default Navbar

