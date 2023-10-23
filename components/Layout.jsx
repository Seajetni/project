import React from 'react'
import { Nav } from './nav'

export const Layout = (props) => {
  return (
    <div className=''>
    <Nav/>

    <div className="bg-gray-800 w-screen  rounded-e-3xl text-black">
      {props.children}
    </div>
    </div>

  )
}
