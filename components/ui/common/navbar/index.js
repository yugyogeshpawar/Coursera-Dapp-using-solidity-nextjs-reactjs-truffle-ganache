import { useState } from 'react'
import Link from 'next/link'
import { EarnDegree, Web3AccountButton, Web3AccountDropdown, Button } from '@components/ui/common'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import MobileSideNav from '../mobileSideNav'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

function index() {


  const [state, setState] = useState({ left: false })
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')
    ) { return; }
    setState({ ...state, [anchor]: open })
  }



  const HtmlTooltip = styled(({ className, ...props }) =>
    (<Tooltip {...props} classes={{ popper: className }} />))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        backgroundColor: '#ffff',
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: theme.typography.pxToRem(16),
        // border: '1px solid gray',
        maxWidth: '70vw',
        overflow: 'auto',
        maxHeight: '100vh',
        overflowX: 'hidden',
        scrollbar: "4px",
      },
    }))

  return (
    <div className='flex items-center shadow-md fixed top-0 z-50 bg-white w-full justify-center '>

      <div className='w-full max-w-8xl flex  items-center justify-between'>

        {/* mobile navigation icon */}
        <div className='py-6 space-y-[6px] pl-4 lg:hidden' onClick={toggleDrawer("left", true)}>
          <div className='bg-black w-5 h-[1px] '></div>
          <div className='bg-black w-5 h-[1px] '></div>
          <div className='bg-black w-5 h-[1px] '></div>
        </div>

        <div className='flex justify-center items-center my-1 lg:mr-8'>

          <Link href={"/"}>
            <img src="/coursera_logo.svg" alt="logo" className='w-32 md:m-3 lg:w-32 md:mx-6 cursor-pointer' />
          </Link>

          <HtmlTooltip
            title={<div className='w-80 cursor-context-menu pl-2 pr-6 '>
              <h2 className='font-bold my-4'>Goals</h2>
              <div className='py-1'>Take a free course</div>


              <HtmlTooltip placement="right" leaveDelay={200}
                title={<div className='w-screen bg-white'>
                  <EarnDegree />
                </div>}>
                <div className='flex justify-between items-center'>
                  <div className='py-1'>Earn a Degree</div> <span>&#10140;;</span>
                </div>
              </HtmlTooltip>
              
              <HtmlTooltip placement="right" leaveDelay={200}
                title={<div className='w-screen bg-white'>
                  <EarnDegree />
                </div>}>
                <div className='flex justify-between items-center'>
                  <div className='py-1'>Earn a Degree</div> <span>&#10140;;</span>
                </div>
              </HtmlTooltip>


            </div>}>          


            <div><Button >Explore <span>⮟</span></Button></div>
          </HtmlTooltip>

          <div className='hidden h-full ml-4 lg:block'>
            <form action="" className='relative'>
              <div className='max-w-lg'>
                <input type="text" placeholder='What do you want to learn' autoComplete='off' aria-autocomplete='list' className='border-[1px] border-gray-700 p-2  h-full' />
                <img src="/svg/search.svg" alt="logo" className=' absolute stroke-white invert hover:bg-blue-800
              cursor-pointer bg-yellow-500 top-0 -right-9 w-10  p-2 rounded' />
              </div>
            </form>
          </div>
        </div>

        <div className="lg:flex hidden">
          <ul className="flex justify-center items-center text-sm font-semibold">
            <Link href="/course">
              <li className="whitespace-nowrap px-2 hover:underline hover:text-blue-600 cursor-pointer ">Online Degrees </li></Link>
            <Link href="/course">
              <li className="whitespace-nowrap px-2 hover:underline hover:text-blue-600 cursor-pointer">Find your New Career</li></Link>
            <Link href="/course">
              <li className="whitespace-nowrap px-2 hover:underline hover:text-blue-600 cursor-pointer"> Enterprise</li></Link>
            <Link href="/course">
              <li className="whitespace-nowrap px-2 hover:underline hover:text-blue-600 cursor-pointer"> Universities</li></Link>
            <Link href="/course">
              <li className="whitespace-nowrap px-2 hover:underline hover:text-blue-600 cursor-pointer text-blue-700">
                Log In</li>
            </Link>
          </ul>

          <Web3AccountButton />


        </div>
        <img src="/svg/search.svg" alt="logo" width="18px" height="18px" className='mr-3 lg:hidden' />
      </div>

      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}>

        <div className='w-screen bg-white flex flex-col'>
          <div className='shadow-md items-center flex justify-between w-full py-4 fixed top-0 bg-white z-[1202]'>
            <div className='px-8 '></div>
            <Link href={"/"}>
              <img src="/coursera_logo.svg" alt="logo" className='w-32 md:m-3 lg:w-32 md:mx-6 cursor-pointer' />
            </Link>
            <div className='p-1 mx-2  focus:border-gray-400 focus:border-2 '>
              <CloseOutlinedIcon
                sx={{ fontSize: 30, color: "#605c5c" }}
                onClick={toggleDrawer("left", false)} />
            </div>
          </div>

          <div className='h-24'></div>
          <div className=''>
            <Web3AccountDropdown />
          </div>
          <MobileSideNav />
        </div>
      </SwipeableDrawer>
    </div>
  )
}

export default index