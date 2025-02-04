import React from 'react'
import Logo from '../ui/Logo'
import Button from '../Button'
import { FaBars } from 'react-icons/fa6'
import Menu from '../ui/Menu'

const Header = () => {
  return (
    <div className='bg-zinc-900 w-full py-4 px-4 rounded-full flex items-center justify-between gap-5'>
      <Logo />
      <div className='hidden md:flex items-center gap-6 text-zinc-200'>
        <div>Home</div>
        <div>Features</div>
        <div>How It Works</div>
        <div>About Us</div>
        <div>Testimnials</div>
        <div>Blog</div>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Button
          content='Get the App'
          className='md:w-[12vw] w-[38vw]'
        />
        <div className='md:hidden block mt-2'>
          <Menu
            trigger={<FaBars size={25} color='#fff' className='cursor-pointer' />}
           />
        </div>
      </div>
    </div>
  )
}

export default Header