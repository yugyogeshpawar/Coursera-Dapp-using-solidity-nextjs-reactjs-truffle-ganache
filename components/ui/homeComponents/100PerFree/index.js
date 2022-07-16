import Card from './card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy, Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Data from './100%free.json'


function index() {
   



    return (

        <div className='flex w-full justify-center'>
            <div className="my-8 max-w-8xl w-full ">
                <div className="my-4 lg:mx-20 mx-6 md:mx-12">
                    <div className="text-xl font-semibold text-blue-900">100% Free</div>
                    <div className="my-6 text-4xl">Start Learning with Free Courses</div>
                    <div className="text-xl mb-10">Free online courses from the world's top universities and companies.
                    </div>
                </div>
                <div className=" h-2/4 flex justify-center mx-1 px-6 md:px-12 lg:px-20 ">
                    <Swiper
                        // install Swiper modules
                        modules={[Lazy, Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        navigation
                        slidesPerGroup={2}
                        lazy={true}
                        rewind={true}
                        slidesPerView={"auto"}
                        pagination={{ clickable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                    >
                        {Data.map((item) =>
                            <SwiperSlide key={item.heading} className='!w-[250px]'> <Card title={item.title} heading={item.heading} logoUrl={item.logoUrl} imgUrl={item.imgUrl} /></SwiperSlide>)}
                    </Swiper>
                </div>

                <div className='h-10 text-center mt-8 mb-8 lg:mb-20 font-bold text-blue-800 hover:underline flex justify-center cursor-pointer'><div>
                    Explore Degrees</div>
                    <span className='ml-2 items-center pt-px' ><svg aria-hidden="true" focusable="false" height="20" viewBox="0 0 20 20" width="20" className="fill-blue-800 " id="cds-8"><path d="M9 12.46H2V7.53h7V2l9 8-9 8v-5.54z" fill="currentColor"></path></svg></span>
                </div>
            </div>

        </div>
    )
}

export default index