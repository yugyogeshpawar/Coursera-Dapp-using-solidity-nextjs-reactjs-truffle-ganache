
function index() {
    return (
        <div>
            <div className="h-10 md:h-14 lg:h-28 w-full" ></div>
            <main className='flex text-gray-800 justify-center w-full items-center'>
                <div className="max-w-8xl items-center w-full justify-between flex">
                    <div className='max-w-[436px] lg:max-w-3xl px-4 mx-2 lg:ml-10 sm:w-3/5 justify-center'>
                        <h1 className='text-5xl sm:text-left font-semibold mt-20 sm:text-6xl lg:text-7xl xl:flex '>
                            Learn Without Limits</h1>
                        <p className=' max-w-[24rem]  md:max-w-[45rem] lg:text-2xl mb-6 text-lg mt-8 m-0 pl-1'>Open your door to more with world-class Professional Certificates and degrees.</p>
                        <div className='flex flex-col sm:flex-row px-2 justify-center m-0 max-w-md'>
                            <button className='bg-blue-600 rounded py-3 w-full mb-6 px-8 text-white font-bold mx-2 whitespace-nowrap'>
                                Join for Free</button>
                            <button className='bg-white border-2 border-blue-600 text-blue-600 rounded py-3 w-full mb-6 px-8 font-bold mx-2 whitespace-nowrap'>Try Coursera For Business</button>
                        </div>
                    </div>
                    <div className='w-2/5 hidden sm:block h-full '>
                        <img src="/images/IN_HERO_C_NOV21.png" alt="logo" className=' md:m-auto hidden sm:block  ' />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default index