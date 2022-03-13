import Card from './card'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Lazy, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function index() {

    const data = [
        {
            title: "Google",
            heading: "Google UX Design",
            logoUrl: "/professionalCertificates/logo/Google-G_360x360.png",
            imgUrl: "/professionalCertificates/1200x600_UXD.png",
            link: ""

        },

        {
            title: "Meta",
            heading: "Facebook Marketing Analytics",
            logoUrl: "/professionalCertificates/logo/360-x-360.png",
            imgUrl: "/professionalCertificates/1200x600_DA.png",
            link: ""
        },
        {
            title: "IBM",
            heading: "IBM Data Engineering",
            logoUrl: "/professionalCertificates/logo/IBM-Logo-Blk---Square.png",
            imgUrl: "/professionalCertificates/1200x600_PgM.png",
            link: ""
        },

        {
            title: "Intuit",
            heading: "Intuit Bookkeeping",
            logoUrl: "/professionalCertificates/logo/360x360.png",
            imgUrl: "/professionalCertificates/fb-specialization.png",
            link: ""
        },
        {
            title: "Google",
            heading: "Google Data Analytics",
            logoUrl: "/professionalCertificates/logo/Google-G_360x360.png",
            imgUrl: "/professionalCertificates/Group-35.png",
            link: ""
        },
        {
            title: "Meta",
            heading: "Facebook Social Media Marketing",
            logoUrl: "/professionalCertificates/logo/360-x-360.png",
            imgUrl: "/professionalCertificates/iStock-1169539468.jpg",
            link: ""
        },
        {
            title: "IBM",
            heading: "IBM Data Science",
            logoUrl: "/professionalCertificates/logo/IBM-Logo-Blk---Square.png",
            imgUrl: "/professionalCertificates/MA_Specialization.png",
            link: ""
        },
        {
            title: "Google",
            heading: "Google Product Management",
            logoUrl: "/professionalCertificates/logo/Google-G_360x360.png",
            imgUrl: "/professionalCertificates/option2.jpg",
            link: ""
        },
        {
            title: "Salesforce",
            heading: "Salesforce Sales Operations",
            logoUrl: "/professionalCertificates/logo/Salesforce-Institution-Square-180px-.png",
            imgUrl: "/professionalCertificates/Professional_Certificate_-_IBM_Cybersecurity_Analyst.png",
            link: ""
        },
        {
            title: "Google",
            heading: "Google IT Support",
            logoUrl: "/professionalCertificates/logo/Google-G_360x360.png",
            imgUrl: "/professionalCertificates/1200x600_DA.png",
            link: ""
        },
        {
            title: "IBM",
            heading: "IBM Cybersecurity Analyst",
            logoUrl: "/professionalCertificates/logo/IBM-Logo-Blk---Square.png",
            imgUrl: "/professionalCertificates/Search-Thumbnail.jpg",
            link: ""
        },
        {
            title: "Salesforce",
            heading: "Salesforce Development Representative",
            logoUrl: "/professionalCertificates/logo/Salesforce-Institution-Square-180px-.png",
            imgUrl: "/professionalCertificates/unnamed.png",
            link: ""
        }
    ]

    return (
        <div className='flex  w-full justify-center'>
            <div className="my-8 w-full max-w-8xl">
                <div className="my-4 lg:mx-20 mx-6 md:mx-12">
                    <h2 className="text-xl font-semibold text-blue-900">Courses and Specializations</h2>
                    <h2 className="my-6 text-4xl">Advance your career with new skills</h2>
                    <h3 className="text-xl mb-10">Choose from over 4,000 courses in topics like business analytics, graphic design, Python, and more.
                    </h3>
                </div>
                <div className=" h-2/4 flex justify-center mx-1 px-6 md:px-12 lg:px-20 ">
                    <Swiper
                        // install Swiper modules
                        modules={[Lazy,Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        navigation
                        slidesPerGroup={2}
                        lazy={true}
                        rewind={true}
                        slidesPerView={"auto"}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}>
                        {data.map((item) =>
                            <SwiperSlide key={item.heading} className='!w-[250px]'> <Card title={item.title} heading={item.heading} logoUrl={item.logoUrl} imgUrl={item.imgUrl} /> </SwiperSlide>
                        )}
                    </Swiper>
                </div>
                <div className='h-10 text-center mt-8 mb-28 font-bold text-blue-800 hover:underline flex justify-center'><div>
                    Explore Degrees</div>
                    <span className='ml-2 items-center pt-px' ><svg aria-hidden="true" focusable="false" height="20" viewBox="0 0 20 20" width="20" className="fill-blue-800 " id="cds-8"><path d="M9 12.46H2V7.53h7V2l9 8-9 8v-5.54z" fill="currentColor"></path></svg></span>
                </div>
            </div>
        </div>
    )
}

export default index