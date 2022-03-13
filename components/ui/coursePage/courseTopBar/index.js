import Image from "next/image";
function index({Hero, className }) {
    return (
        <>
            <div className={`bg w-full lg:overflow-x-hidden whitespace-nowrap  ${className} ${Hero.bgColor} overflow-hidden`}>
                <div className="w-full flex px-2 md:px-10 max-w-7xl text-sm md:text-base m-auto items-center justify-between">
                    <div className="flex py-4 items-center">
                        <div className="hidden sm:block">
                            <Image src={Hero.offeredByIMG} width={122} height={40} />
                        </div>
                        <div className="font-bold sm:px-5 text-white whitespace-pre-wrap 
                            ">{Hero.Heading ? Hero.Heading : "Coursera 😈"}</div>
                    </div>
                    <button className={` ${Hero.buttonColor} font-bold p-2 lg:p-4 rounded text-sm my-1`}>
                        <div>Enroll for free</div>
                        <div>Starts Mar 5</div>
                    </button>
                </div>
            </div>
            {/* <style jsx>{`.bg {
                background-image: linear-gradient(90deg, rgb(66, 133, 244), rgb(52, 168, 83))}`}
            </style> */}

        </>
    )
}

export default index