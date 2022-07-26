import EarnADegree2 from '@content/ExploreNavbar/EarnADegree'


function earnDegree() {
  
  return (
    <>
      <div className='my-10 px-6 w-[80vw]'>

        <div className='my-10 px-6'>
          <div className='text-xl my-2 font-bold'>Earn a Degree</div>
          <span className='text-sm '>Breakthrough pricing on 100% online degrees designed to fit into your life.
          </span>
        </div>

        <div className='my-10 grid grid-cols-2'>
          {EarnADegree2.map((data) => (
            <div key={data.title} className='px-6'>
            
              <div className='font-semibold  border-b-2 border-blue-200 mt-5 mb-2'>{data.title}</div>
              {data.data.map((data2) => (
                <div key={ data2.id}>
                  {data2.Link ? <div>{data2.Link}</div>
                    :
                    <div className="flex">
                      <div className="pr-2 pt-1">
                        <img src="/favicon-v2-194x194.png" alt="Logo" className="w-8" />
                      </div>
                      <div>
                        <div className="text-sm">{data2.university}</div>
                        <div className="mb-4">{data2.course}</div>
                      </div>
                    </div>
                  }

                </div>
              ))}
              <div className="text-blue-700">View all {data.title} Degrees</div>
            </div>
          ))}
        </div>






        <div className=' px-6 '>
          <div className='font-semibold  border-b-2 border-gray-500 '>  Earn credit toward a master's</div>
          <div className="flex">
            <div className="w-2/5">
              <div>
                Big Data MasterTrack® Certificate
              </div>
              <div>
                Degree credit•Expert feedback
              </div>
            </div>

            <div className="w-2/5 px-6">
              <div>
                Innovation Management & Entrepreneurship MasterTrack® Certificate
              </div>
              <div>
                Degree credit•Expert feedback
              </div>
            </div>

          </div>
          <div className="py-6">
            View all MasterTrack Certificates
          </div>

        </div>

      </div>
    </>

  )
}
export default earnDegree