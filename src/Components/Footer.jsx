import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
      <div className="logo font-bold text-2xl">
        <span className='text-green-500'> &lt;</span>
        <span>Pass</span><span className='text-green-500'>Guard/&gt;</span>
      </div>
      <div className='flex justify-center items-center'>
        Created with <span className='text-red-500 text-2xl mx-2'>&#9829;</span> by You
        <div className="Credits ml-4 text-sm">
            <a href="https://www.flaticon.com/free-icons/eye" title="eye icons">Eye icons created by Gregor Cresnar - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/eye-cross" title="eye cross icons">Eye cross icons created by Freepik - Flaticon</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
