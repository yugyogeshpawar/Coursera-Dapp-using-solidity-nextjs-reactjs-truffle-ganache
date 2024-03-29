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
            "id":"1410492",
            link: ""

        },

        {
            title: "Meta",
            heading: "Facebook Marketing Analytics",
            logoUrl: "/professionalCertificates/logo/360-x-360.png",
            imgUrl: "/professionalCertificates/1200x600_DA.png",
            "id":"1410493",
            link: ""
        },
        {
            title: "IBM",
            heading: "IBM Data Engineering",
            logoUrl: "/professionalCertificates/logo/IBM-Logo-Blk---Square.png",
            imgUrl: "/professionalCertificates/1200x600_PgM.png",
            "id":"1410494",
            link: ""
        },

        {
            title: "Intuit",
            heading: "Intuit Bookkeeping",
            logoUrl: "/professionalCertificates/logo/360x360.png",
            imgUrl: "/professionalCertificates/fb-specialization.png",
            "id":"141045",
            link: ""
        },
        {
            title: "Google",
            heading: "Google Data Analytics",
            logoUrl: "/professionalCertificates/logo/Google-G_360x360.png",
            imgUrl: "/professionalCertificates/Group-35.png",
            "id":"1410496",
            link: ""
        },
        {
            title: "Meta",
            heading: "Facebook Social Media Marketing",
            logoUrl: "/professionalCertificates/logo/360-x-360.png",
            imgUrl: "/professionalCertificates/iStock-1169539468.jpg",
            "id":"1410497",
            link: ""
        },
        {
            title: "IBM",
            heading: "IBM Data Science",
            logoUrl: "/professionalCertificates/logo/IBM-Logo-Blk---Square.png",
            imgUrl: "/professionalCertificates/MA_Specialization.png",
            "id":"1410498",
            link: ""
        },
        {
            title: "Google",
            heading: "Google Product Management",
            logoUrl: "/professionalCertificates/logo/Google-G_360x360.png",
            imgUrl: "/professionalCertificates/option2.jpg",
            "id":"1410499",
            link: ""
        },
        {
            title: "Salesforce",
            heading: "Salesforce Sales Operations",
            logoUrl: "/professionalCertificates/logo/Salesforce-Institution-Square-180px-.png",
            imgUrl: "/professionalCertificates/Professional_Certificate_-_IBM_Cybersecurity_Analyst.png",
            "id":"1410500",
            link: ""
        },
        {
            title: "Google",
            heading: "Google IT Support",
            logoUrl: "/professionalCertificates/logo/Google-G_360x360.png",
            imgUrl: "/professionalCertificates/1200x600_DA.png",
            "id":"1410501",
            link: ""
        },
        {
            title: "IBM",
            heading: "IBM Cybersecurity Analyst",
            logoUrl: "/professionalCertificates/logo/IBM-Logo-Blk---Square.png",
            imgUrl: "/professionalCertificates/Search-Thumbnail.jpg",
            "id":"1410502",
            link: ""
        },
        {
            title: "Salesforce",
            heading: "Salesforce Development Representative",
            logoUrl: "/professionalCertificates/logo/Salesforce-Institution-Square-180px-.png",
            imgUrl: "/professionalCertificates/unnamed.png",
            "id":"1410503",
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
                  
                        slidesPerView={"auto"}
                        pagination={{ clickable: true }}

                    >
                        {data.map((item) =>
                            <SwiperSlide key={item.id} className='!w-[250px]'> <Card title={item.title} heading={item.heading} logoUrl={item.logoUrl} imgUrl={item.imgUrl} /> </SwiperSlide>
                        )}
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