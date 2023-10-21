import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <>
      <div className='flex flex-col text-center'>
        <Link href="/">
          Home
        </Link>

        <Link href="/setting">
          setting
        </Link>
      </div>


    
    </>
  )
}
