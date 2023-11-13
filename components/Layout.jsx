import React from 'react'
import { Nav } from './nav'
import { signIn, useSession } from 'next-auth/react'


export const Layout = (props) => {
  const { data: session } = useSession()
  if(session) {
    return <>
<div className=''>
      <Nav/>
  
      <div className="bg-gray-800 w-screen  rounded-e-3xl text-black">
        {props.children}
      </div>
      </div>
    </>
  }
  return <>
    <div className='bg-black w-screen h-screen text-white justify-center flex'>
      <button onClick={() => signIn('google')}>Pls Sign in!!!</button>
    </div>
    
  </>
}

