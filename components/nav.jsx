import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <>
        <nav className="p-6 bg-white flex justify-between mb-6">
            <ul className="flex items-center">
                <li className="p-3"><a href="#" className="text-blue-500">Home</a></li>
                <li className="p-3"><a href="#" className="text-blue-500">Sensors</a></li>
                <li className="p-3"><a href="#" className="text-blue-500">Controls</a></li>
            </ul>
            <ul className="flex items-center">
                <li className="p-3"><a href="#" className="text-blue-500">Login</a></li>
                <li className="p-3"><a href="#" className="text-blue-500">Register</a></li>
            </ul>
        </nav>


    
    </>
  )
}
