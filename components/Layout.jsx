import React from 'react'
import { Nav } from './nav'

export const Layout = (props) => {
  return (
    <>
    <Nav/>

    <div className="bg-white w-screen  rounded-e-3xl text-black">
      {props.children}
    </div>
    </>

  )
}
