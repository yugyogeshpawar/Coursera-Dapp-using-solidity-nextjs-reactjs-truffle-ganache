import Data from './index.json'
import SmCard from "./smCard"

function index() {


    return (
        <div className='w-full flex justify-center'>
            <div className=" px-2 md:mx-20 lg:mx-16 mx-6 max-w-7xl">
                <h2 className="text-4xl my-8 ">
                    Explore Coursera
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">

                    {Data.map((title) => (
                        <SmCard key={title.courses} title={title.title} courses={title.courses} logoUrl={title.logoUrl} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default index