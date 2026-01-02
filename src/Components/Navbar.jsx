import React from 'react';

const Navbar = () => {
    return (
        // <nav className="bg-slate-900 text-white p-4">
        //   <div className="max-w-7xl mx-auto flex justify-between items-center">
        //     <div className="text-xl font-bold text-blue-400">
        //       PassGuard
        //     </div>
        //     <ul className="flex gap-8">
        //       <li className="hover:text-blue-400 cursor-pointer transition-colors">Dashboard</li>
        //       <li className="hover:text-blue-400 cursor-pointer transition-colors">Generator</li>
        //       <li className="hover:text-blue-400 cursor-pointer transition-colors">Settings</li>
        //     </ul>
        //   </div>
        // </nav>

        <nav className='bg-slate-700 text-white mx-5 my-5 card-3d py-3 px-0'>
            <div className='flex justify-between mycontainer'>
                <div className="logo font-bold text-2xl">
                    <span className='text-green-600'>&lt;</span>
                    Pass
                    <span className='text-green-600'>Guard/&gt;</span>
               </div>
                {/* <ul>
                    <li className='flex gap-4 text-lg'>
                        <a className='hover:font-bold hover:text-xl transition-all' href="/">Home</a>
                        <a className='hover:font-bold hover:text-xl transition-all' href="/">About</a>
                        <a className='hover:font-bold hover:text-xl transition-all' href="/">Contact</a>
                    </li>
                </ul> */}
                <button className='text-white hover:scale-110 transition-transform'>
                    <img className='w-6' src="/icons/github-mark-white.svg" alt="github_logo" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;