import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { EarnDegree } from '@components/ui/common'


function index() {
  const HtmlTooltip = styled(({ className, ...props }) => (<Tooltip {...props} classes={{ popper: className }} />))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      backgroundColor: '#ffff',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: theme.typography.pxToRem(16),
      border: '1px solid gray',
      maxWidth: '70vw',
      overflow: 'auto',
      maxHeight: '100vh',
      overflowX: 'hidden',
      scrollbar: "4px",
    },
  }));

  return (
    <div className='flex items-center shadow-md fixed top-0 z-50 bg-white w-full justify-center '>

      <div className='w-full max-w-8xl flex  items-center justify-between'>

        {/* mobile navigation icon */}
        <div className='p-6 space-y-[6px] pl-4 lg:hidden'>
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
              <h2 className='font-bold'>Goals</h2>
              <div>Take a free course</div>
              <HtmlTooltip placement="right" leaveDelay={400}
                title={<div className='w-screen bg-white'>
                  <EarnDegree />
                </div>}>
                <div className='flex justify-between'>
                  <div className='py-3'>Earn a Degree</div> <span>&#10140;;</span>
                </div>
              </HtmlTooltip>
            </div>}>
            <button className='bg-blue-600 rounded py-2 px-6 whitespace-nowrap text-white my-3 font-bold lg:block hidden hover:bg-blue-800'>Explore <span>⮟</span></button>
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
          <ul className="flex justify-center items-center">
            <Link href="/course">
              <li className="whitespace-nowrap px-2 hover:underline hover:text-blue-600 cursor-pointer ">Degrees </li></Link>
            <Link href="/course">
              <li className="whitespace-nowrap px-2 hover:underline hover:text-blue-600 cursor-pointer">Find your New Career</li></Link>
            <Link href="/course">
              <li className="whitespace-nowrap px-2 hover:underline hover:text-blue-600 cursor-pointer"> Enterprise</li></Link>
            <Link href="/course">
              <li className="whitespace-nowrap px-2 hover:underline hover:text-blue-600 cursor-pointer"> Universities</li></Link>
            <Link href="/course">
              <li className="whitespace-nowrap px-2 hover:underline hover:text-blue-600 cursor-pointer">Log In</li>
            </Link>
            <button className='bg-blue-600 rounded p-3  text-white ml-3 mr-5  text-sm  font-bold lg:block hidden
          hover:bg-blue-800  whitespace-nowrap '>Join for Free</button>
          </ul>
        </div>
        <img src="/svg/search.svg" alt="logo" width="18px" height="18px" className='mr-3 lg:hidden' />
      </div>
    </div>
  )
}

export default index