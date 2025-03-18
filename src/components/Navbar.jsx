import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="w-full flex justify-around p-6 bg-gradient-to-r from-indigo-600 to-amber-400">
                <div className="text-black-800 text-5xl font-extrabold"> Conversion App </div>
                <div className="">
                    <lord-icon
                        src="https://cdn.lordicon.com/olfvnikl.json"
                        trigger="hover"
                        stroke="bold"
                        style={{ width: '80px', height: '80px' }}>
                    </lord-icon>
                </div>
            </div>
        </>
    )
}
export default Navbar
