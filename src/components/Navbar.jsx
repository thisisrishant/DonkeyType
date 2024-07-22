import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='bg-green-500 justify-between'style={{height:"6vh", display:'flex', margin:"auto",padding:"8px", border:"2px solid green",}}>
           <b> <span className='font-mono text-white text-lg'>DonkeyType.np</span> </b>
            <ul className='flex gap-8 mx-9'>
                <li className='text-white cursor-pointer hover:shadow-lg'>Home</li>
                <li className='li text-white cursor-pointer hover:shadow-lg'>About</li>
            </ul>
        </nav>
    </div>
  )
}
