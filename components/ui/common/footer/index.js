import Data from './data.json'
import FooterData from './footer.json'
import Image from 'next/image'
function index() {


    return (
        <div className='flex flex-col justify-center w-full bg-gray-200 px-8 pt-14 mt-14 md:px-14 lg:px-16'>
            <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-7xl m-auto'>{Data.map(itmes =>
                <div key={itmes.menuTitle} className='w-64 mx-4'>
                    <div className=' my-3 font-bold text-gray-800'>{itmes.menuTitle}</div>
                    <div className=''>{itmes.menus.map(menu =>
                        <h3 key={menu.id} className='my-2 text-sm hover:underline w-fit cursor-pointer'>{menu.menu}
                        </h3>
                    )}
                    </div>
                </div>

            )}
            </div>
            <div className='flex md:flex-col w-full'>

                <div className='grid grid-cols-1 px-8 md:py-10  md:my-5 md:px-14 lg:px-16 sm:grid-cols-2 md:grid-cols-3 bg-gray-200 lg:grid-cols-4 max-w-7xl m-auto'>{FooterData.map(itmes =>
                    <div
                        key={itmes.menuTitle} className='w-64 mx-4'>
                        <div className=' my-3 font-bold text-gray-800'>{itmes.heading}</div>
                        <div className=''>
                            {itmes.menus.map(menu =>
                                <h3 key={menu.id}
                                    className='my-2 text-sm hover:underline cursor-pointer w-fit'>
                                    {menu.menu}
                                </h3>)}
                        </div>
                    </div>
                )}
                    <div className='flex my-4 lg:my-auto lg:items-center flex-col space-y-3'>
                        <div>
                            <Image width={170} height={50} className="" src={`/footer_icon/download_on_the_app_store_badge_en.svg`} />
                        </div>
                        <div>
                            <Image width={170} height={50} className="" src={`/footer_icon/en_generic_rgb_wo_45.png`} />
                        </div>
                        <div>
                            <Image width={82} height={120} className="" src={`/footer_icon/2018-B-Corp-Logo-Black-S.png`} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider md:mx-20 mx-10  border-b-2 border-gray-300"></div>

            <div className='flex justify-center text-center w-full'>
                <div className='flex justify-between p-10 lg:mx-10 text-center max-w-7xl w-full'>

                    <div className='whitespace-nowrap text-sm'>© 2022 Coursera Inc. All rights reserved.
                    </div>
                    <div className='hidden md:flex space-x-5'>
                        <img src="/footer_icon/facebook.png" alt="Coursera Facebook" />
                        <img src="/footer_icon/linkedin.png" alt="Coursera Linkedin" />
                        <img src="/footer_icon/twitter.png" alt="Coursera Twitter" />
                        <img src="/footer_icon/youtube.png" alt="Coursera Youtube" />
                        <img src="/footer_icon/instagram.png" alt="Coursera instagram" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default index