import React from 'react'

const Manager = () => {
    const showPassword = () => {
        // Logic to toggle password visibility
        
    }
    return (
        <div>
            {/* background from bg.ibelick.com */}
            <div className="absolute bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            {/* input fields` */}
            <div className="mycontainer bg-slate-100 mycontainer card-3d">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-600'>&lt;</span>
                    Pass
                    <span className='text-green-600'>Guard/&gt;</span></h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
                <div className="relative text-white flex flex-col  max-w-2xl p-4 gap-4 mx-auto">
                    <input placeholder='Enter website URL' className='border border-green-700 bg-green-75 rounded-full text-black px-4 py-1' type="text" name='' id='' />
                    <div className="flex gap-4">
                        <input placeholder='Enter Username / Email' className='border border-green-700 bg-green-75 rounded-full text-black px-4 py-1 w-1/2' type="text" name='' id='' />

                        <div className="relative">
                            <input placeholder='Enter Password' className='border border-green-700 w-full bg-green-75 rounded-full text-black px-4 py-1' type="password" name='' id='' />
                            <span className='absolute right-0.75 top-1 cursor-pointer text-green-700' onClick={showPassword}>SHOW</span>
                        </div>
                    </div>

                    <button className='flex justify-center items-center gap-3 max-w-50 mx-auto bg-green-700 hover:bg-green-800 text-white px-4 py-1 rounded-full'>
                        <span className='text-xl font-bold'>Add Password</span>
                        <span className='flex items-center'><lord-icon
                            src="https://cdn.lordicon.com/ueoydrft.json"
                            trigger="hover"
                            colors="primary:#314158,secondary:#16a34a,tertiary:#f1f5f9"
                            style={{ width: "28px", height: "28px" }}>
                        </lord-icon></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Manager
