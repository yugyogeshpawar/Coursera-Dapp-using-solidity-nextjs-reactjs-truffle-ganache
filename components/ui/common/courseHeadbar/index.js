import Image from "next/image";
function index({ className }) {
    return (
        <>
            <div className={`bg w-full ${className}`}>
                <div className="w-full flex px-4 md:px-10 max-w-7xl text-sm md:text-base m-auto items-center justify-between">
                    <div className="flex py-4 items-center">
                        <div className="hidden md:block">
                            <Image src={`/instructors/logo_Google.png`} width={122} height={40} />
                        </div>
                        <div className="font-bold md:px-5 text-white whitespace-pre-wrap 
                            
                            ">Google UX Design Professional Certificate</div>
                    </div>
                    <button className="font-bold text-white bg-yellow-500 p-2 lg:p-4 rounded text-sm my-1">
                        <div>Enroll for free</div>
                        <div>Starts Mar 5</div>
                    </button>
                </div>
            </div>
            <style jsx>{`.bg {
                background-image: linear-gradient(90deg, rgb(66, 133, 244), rgb(52, 168, 83))}`}
            </style>

        </>
    )
}

export default index