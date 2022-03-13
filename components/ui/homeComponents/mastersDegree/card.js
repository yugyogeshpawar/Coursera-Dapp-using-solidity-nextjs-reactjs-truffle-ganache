import Image from 'next/image'

function index({ title, heading, logoUrl, imgUrl }) {

    return (
        <div className="bg-violet-900 w-[265px] overflow-hidden ">

            <div className={`bg-no-repeat h-72 relative bg`}>

                <style jsx>{`.bg {
                    background-image: url(${imgUrl});
                    background-size: auto 265px;
                    background-position: center -15%;
                }`}</style>

                <div className="absolute top-32  w-full bg-white">
                    <div className='h-20 p-6'>
                        <div className="text-blue-700" >{heading}</div>
                        <div className="text-gray-700 text-sm" >{title}</div>
                    </div>
                    <div className="w-56 h-12 bg-blue-400 rotate-6 translate-y-11 -translate-x-2" ></div>
                    <div className="w-72 h-14 bg-blue-800 -rotate-3 -translate-y-2" ></div>

                </div>



                {/* <div className='p-2 bg-white w-max rounded items-center flex'>
                        <Image src={logoUrl} alt="w" width={54} height={54} className="" />
                    </div> */}

                <div className="absolute bottom-2 left-5 w-full text-white uppercase text-sm font-bold flex justify-between align-bottom" >
                    <div className='flex items-end'>
                        <div>
                            100% ONLINE
                        </div>
                    </div>
                    <div className="w-8 mr-7">
                        <img src={logoUrl} className="" alt="University" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default index