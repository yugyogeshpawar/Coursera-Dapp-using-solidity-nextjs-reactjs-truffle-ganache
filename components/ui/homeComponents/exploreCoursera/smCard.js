
import Image from "next/image"

function smCard({ title, courses, logoUrl }) {
    return (


        <div className="flex my-2 cursor-pointer    ">
            <div className="flex rounded-md shadow-gray-200 transition-all shadow-lg  hover:shadow-lg hover:shadow-gray-400 w-full mr-4 overflow-hidden ">

                <Image src={logoUrl}                    
                    width={70}
                    height={70}
                    className="rounded-l-md"
                    alt="google" />
                <div className="text-sm font-bold justify-center px-4 flex flex-col bg-white ">
                    <h3 className="text-gray-900 my-1">{title}</h3>
                    <h4 className="text-gray-700">{courses} Courses</h4>
                </div>
            </div>
        </div>
    )
}

export default smCard