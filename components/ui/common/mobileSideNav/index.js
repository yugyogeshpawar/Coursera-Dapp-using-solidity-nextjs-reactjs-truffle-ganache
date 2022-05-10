import solutions from './index.json'
import Link from 'next/link';


function index() {

  return (
    <div className=' overflow-y-scroll '>
      {/* <div className='shadow-md items-center flex justify-between w-full py-4 fixed top-0 bg-white'>
        <div className='px-8 '></div>
        <Link href={"/"}>
          <img src="/coursera_logo.svg" alt="logo" className='w-32 md:m-3 lg:w-32 md:mx-6 cursor-pointer' />
        </Link>
        <div className='p-1 mx-2  focus:border-gray-400 focus:border-2 ' >
          <CloseOutlinedIcon sx={{ fontSize: 30, color: "#605c5c" }} />
        </div>
      </div> */}
      <div className=''>
        <div className="mt-14 overflow-scroll">
          <nav className="grid gap-y-1">
            {solutions.map((item) => (
              <div key={item.menuTitle}
                className="mx-2 p-3 flex  rounded-md hover:bg-gray-50 flex-col">
                <span className="ml-3 text-base  text-gray-900 font-bold">{item.menuTitle}</span>
                <span className="ml-3 text-base  text-gray-900">
                  {item.menus.map((item2) => (
                    <a
                      key={item2.menu}
                      className=" py-3 flex  rounded-md hover:bg-gray-50">
                      <span className="text-base  text-gray-900">{item2.menu}</span>
                    </a>
                  ))}</span>
              </div>
            ))}
          </nav>
        </div>

      </div>
    </div>
  )
}

export default index