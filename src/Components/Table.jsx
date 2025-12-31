import React from 'react'

const Table = ({ passwordArray }) => {
    return (
        <div className='mx-5 my-5'>
            <div className="absolute bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="mycontainer mx-auto mt-10 mb-24 p-4 bg-green-50 rounded-lg shadow-lg border border-green-200">
                <h2 className='text-2xl font-bold text-green-900 mb-4 px-4'>Your Passwords</h2>
                {passwordArray.length === 0 && (<p className='text-green-700 px-4'>No passwords saved yet.</p>
                )}
                {passwordArray.length > 0 && (
                <table className="table-auto w-full rounded-md overflow-hidden">
                    <thead className='bg-green-800 text-white'>
                        <tr>
                            <th className='py-2 px-4 text-left'>Site</th>
                            <th className='py-2 px-4 text-left'>Username</th>
                            <th className='py-2 px-4 text-left'>Password</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {passwordArray.map((item, index) => {
                            return <tr key={index} className='border-b border-green-100 hover:bg-green-50'>
                                <td className='py-2 px-4'><a href={item.site} target='_blank'>{item.site}</a></td>
                                <td className='py-2 px-4'>{item.username}</td>
                                <td className='py-2 px-4'>{"*".repeat(item.password.length)}</td>
                            </tr>
                        })}
                    </tbody>
                </table>)}
            </div>
        </div>
    )
}

export default Table
