import Link from "next/link"

function index() {

    return (
        <div>
           
            <div className="w-full shadow shadow-gray-300 scroll-smooth">
                <div className=" px-2 max-w-7xl m-auto">
                    <ul className="flex items-center py-5 md:px-8 overflow-x-scroll md:overflow-x-hidden overflow-hidden  whitespace-nowrap ">
                        <Link href={`#about`} passHref><a>
                        <li  className="active:text-blue-700 active:font-bold px-2 lg:px-4">About</li></a>
                        </Link>
                        <Link href={`#whatisprocer`} passHref><a>                        
                        <li className="active:text-blue-700 active:font-bold px-2 lg:px-4">How is it work</li></a></Link>
                        <Link href={`#course`} passHref><a>                       
                        <li className="active:text-blue-700 active:font-bold px-2 lg:px-4">Course</li></a></Link>
                        <Link href={`#instructor`} passHref><a>                       
                        <li className="active:text-blue-700 active:font-bold px-2 lg:px-4">Instructors</li></a></Link>
                        <Link href={`#33`} passHref><a>                          
                        <li className="active:text-blue-700 active:font-bold px-2 lg:px-4">Enrollment Options</li></a></Link>
                        <Link href={`#faq`} passHref><a>
                        <li className="active:text-blue-700 active:font-bold px-2 lg:px-4">FAQ</li></a></Link>
                    </ul>
                </div>
            </div>                  
        </div>
    )
}

export default index