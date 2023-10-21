import React from 'react'

export const Layout = (props) => {
  return (
    <div className="bg-white w-screen  rounded-e-3xl text-black">
        {props.children}
    </div>
  )
}
