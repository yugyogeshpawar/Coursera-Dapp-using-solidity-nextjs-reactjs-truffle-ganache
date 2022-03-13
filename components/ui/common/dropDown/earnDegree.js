

function earnDegree() {
  const EarnADegree = [
    {
      title: "Data Science",
      data: [{ university: "University of Michigan", course: "Master of Applied Data Science" },
      { university: "University of Illinois at Urbana-Champaign", course: "Master in Computer Science" },
      { university: "University of Colorado Boulder", course: "Master of Science in Data Science" },
      { university: "HSE University", course: "Master of Data Science" },
      { university: "HSE University", course: "Master of Data and Network Analysis" },
      { university: "Universidad de los Andes", course: "Maestría en Inteligencia Analítica de Datos" },]
    },
    {
      title: "Business",
      data: [{ university: "O.P. Jindal Global University", course: "MBA in Business Analytics" },
      { university: "University of North Texas", course: "Bachelor of Applied Arts and Sciences" },
      { university: "University of Illinois at Urbana-Champaign", course: "Master of Business " },
      { university: "HEC Paris", course: "MSc in Innovation and Entrepreneurship" },
      { university: "HSE University", course: "Master of Business Analytics" },
      { university: "Universidad de Palermo", course: "Maestría en Dirección de Empresas (MBA)" },
      ]
    },
    
    {
      title: "Business",
      data: [{ university: "University of London", course: "Bachelor of Science in Computer Science" },
      { university: "University of Illinois at Urbana-Champaign", course: "Master of Computer Science" },
      { university: "Penn Engineering", course: "Master of Computer and Information Technology" },
      { university: "Universidad de los Andes", course: "Maestría en Ingeniería de Software" },
      { university: "HSE University", course: "Master of Computer Vision" },
      { university: "University of Colorado Boulder", course: "Master of Science in Electrical " },]
    },
    {
      title: "More Degrees",
      data: [{ Link: "Public Health" },
      { Link: "Bachelor's Degrees" },
      { Link: "Engineering" },
      { Link: "Master's Degrees" },
      { Link: "Social Sciences" },
      ]
    }
  ]


  return (
    <>
      <div className='my-10 px-6 w-[80vw]'>

        <div className='my-10 px-6'>
          <div className='text-xl my-2 font-bold'>Earn a Degree</div>
          <span className='text-sm '>Breakthrough pricing on 100% online degrees designed to fit into your life.
          </span>
        </div>

        <div className='my-10 grid grid-cols-2'>
          {EarnADegree.map((data) => (
            <div key={data.title} className='px-6'>
            
              <div className='font-semibold  border-b-2 border-blue-200 mt-5 mb-2'>{data.title}</div>
              {data.data.map((data2) => (
                <div key={data2.EarnADegree}>
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