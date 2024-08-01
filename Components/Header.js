import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <>
    <div className=' h-16 px-5 bg-gray-700 text-white flex justify-between items-center'>
        <h2>Logo</h2>
    <div className='flex text-white gap-8'>
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Career">Career</Link>
      <Link href="/Blogs">Blog</Link>
      <Link href="/Accounts">Account</Link>
    </div>
    </div>
    </>
  )
}

export default Header
