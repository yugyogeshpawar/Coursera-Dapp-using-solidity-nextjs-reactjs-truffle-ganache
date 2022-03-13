import { Star } from "@components/ui/common"
import Image from "next/image";


function index({ Hero, Course }) {

    return (
        <div className={`flex justify-center bg px-6 md:px-24 lg:px-36 w-full md:pt-12 pt-8 md:pb-16 pb-12 
            ${Hero.bgColor ? Hero.bgColor : "bg-gradient-to-r from-[#67788A] to-[#96a9bd]"} `}>
            <div className=" max-w-7xl grid grid-cols-3 place-content-center ">
                <div className=" col-span-3 md:col-span-2  ">
                    <div className="md:mb-8 mb-4 ">
                        <div className="text-white md:flex whitespace-nowrap hidden font-bold">
                            {Course.Breadcrumbs[0] ? Course.Breadcrumbs[0] : "Browse"}
                            <div className="mx-2">&gt;</div>
                            {Course.Breadcrumbs[1] ? Course.Breadcrumbs[1] : "Browse"}
                            <div className="mx-2"> &gt;</div>
                            {Course.Breadcrumbs[2] ? Course.Breadcrumbs[2] : "Browse"}
                        </div>
                        <div className="text-white flex whitespace-nowrap md:hidden">
                            <div className="mr-2"> {"<"} </div>
                            {Course.Breadcrumbs[1] ? Course.Breadcrumbs[1] : "Browse"}
                        </div>
                    </div>
                    <div className="text-white sm:text-4xl text-3xl font-bold lg:pr-20">
                        {Hero.Heading} </div>
                    <div className="text-white mt-2 lg:pr-20">
                        {Hero.mainDsc}
                    </div>
                    <div className="flex items-center space-x-3 h-8">
                        <div className="flex space-x-[1px] ">
                            <Star /><Star /><Star /><Star /><Star />
                        </div>
                        <h3 className="text-[#F7BB56] text-sm font-bold">{Hero.rating}</h3>
                        <h3 className="text-white text-sm">_ {Hero.ratings} ratings</h3>
                    </div>
                    <div className="flex space-x-4 items-center mt-4 flex-wrap">
                        <Image
                            src={Hero.instructorLogo ? Hero.instructorLogo : "/"}
                            className="rounded-full" width={30} height={30}
                        />
                        <h5 className="text-white">
                            {Hero.instructor ? Hero.instructor : "Not Define"}
                        </h5>
                        {Hero.topInstructor ? <div className="uppercase text-[0.6rem]  font-bold px-1 mt-2 text-white bg-blue-600 h-min p-px border-white border-2 whitespace-nowrap">Top instructor</div> : ""}
                    </div>

                    <div className="md:hidden">
                        <h3 className="mx-4 mt-8 mb-2 text-white">Offered By</h3>
                        <div className="w-full">
                            <Image
                                src={Hero.offeredByIMG ? Hero.offeredByIMG : "/"}
                                className="" width={214} height={70}
                            />
                        </div>
                    </div>

                    <div className="mt-2 md:mt-4 lg:mt-10">
                        <div>
                            <div className="flex flex-wrap lg:flex-nowrap ">
                                <form action="" className=" flex flex-col sm:flex-row w-full lg:w-auto">
                                    <input type="email" placeholder="Enter email" className="h-12 px-3 placeholder:text-lg placeholder:font-light rounded-sm mt-2 w-full lg:max-w-[190px]" />
                                    <button type="submit" className={`${Hero.buttonColor} px-5 flex justify-center items-center mt-2 rounded-sm w-full lg:max-w-[190px]`} >
                                        <div className="  ">
                                            <div className="font-bold whitespace-nowrap">Enroll for free</div>
                                            <div className="text-sm">{Hero.Enroll_for_free}</div></div>
                                        <div className="p-1 box-border w-4">
                                            <svg className="fill-white text-white pl-1" height={20} width={20} viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.793 11.5l-9.147-9.146.708-.708L22.707 12 12.354 22.354l-.708-.707 9.147-9.147H2v-1h18.793z" fill="currentColor">
                                                </path>
                                            </svg></div></button></form>
                                <div className="text-sm px-2 py-2 text-white font-medium whitespace-nowrap">
                                    Financial aid available
                                </div>
                            </div>
                            <div className="text-white my-3 text-sm">
                                or continue with <span className="underline">Google</span> or <span className="
                                underline">facebook</span></div>
                        </div>
                        <h3 className="text-white mt-10 text-lg pb-4">
                            <span className="font-bold"> {Hero.already_enrolled ? Hero.already_enrolled : "Not Define"}</span> already enrolled </h3>
                    </div>
                </div>
                <div className="hidden col-span-1 md:flex flex-col px-10 ">
                    <h3 className="mx-4 mt-8 mb-2 text-white">Offered By</h3>
                    <div>
                        <Image
                            src={Hero.offeredByIMG ? Hero.offeredByIMG : "/instructors/logo_Google.png"}
                            className="" width={214} height={70}
                        /></div>
                </div>
                <div id="about" className="lg:pb-10 hidden lg:block">

                </div>
                {/* <div className="w-0 h-0 bg-gradient-to-r from-[#4285f4] to-[#34a853]"></div> */}    
            </div>
            {/* <style jsx>{`.bg { 
                background-image: linear-gradient(90deg, rgb(66, 133, 244), rgb(52, 168, 83))                
                }`}</style> */}

        </div>
    )
}

export default index





