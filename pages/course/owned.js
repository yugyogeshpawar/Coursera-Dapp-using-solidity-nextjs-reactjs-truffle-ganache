import Link from "next/link"
import { BaseLayout } from "@components/layout"
import { useAccount, useOwnedCourses } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"




function owned({ courses }) {
  const { _web3Api } = useWeb3()
  const { metamaskInstalled } = _web3Api
  if (metamaskInstalled) {

    const { account } = useAccount()

    const { ownedCourses } = useOwnedCourses(courses, account.data)
    if (ownedCourses.data != undefined) {

      return (
        <>

          {/* <div>
            {ownedCourses.data && <div>isEmpty</div>}
          </div> */}

          <div className='text-2xl w-full items-center h-full'>
            <header className="bg-slate-100 h-96 w-full">

              <div className="h-full flex px-6 md:px-10">
                <div className="w-1/3 font-semibold text-5xl h-full flex flex-col mt-auto">
                  <div className="w-full mt-auto m-4">
                    Wellcome back!
                  </div>
                </div>
                <div></div>
              </div>
            </header>
            <div className="  bg-slate-50">
              <div className="h-12 w-full bg-white flex">
                <div className="flex text-xl font-bold w-full overflow-x-scroll md:overflow-x-hidden">

                  <div className=" my-auto ml-10 lg:ml-20 border-b-4 border-blue-700 w-32 text-center h-full flex items-center justify-center cursor-pointer"> Home </div>
                  <div className=" my-auto ml-10 lg:ml-20 border-b-4 hover:border-blue-700 w-32 text-center h-full flex items-center justify-center cursor-pointer whitespace-nowrap"> In Progress </div>
                  <div className=" my-auto ml-10 lg:ml-20 border-b-4 hover:border-blue-700 w-32 text-center h-full flex items-center justify-center cursor-pointer"> Completed </div>
                  <div className=""></div>
                </div>

              </div>
              {
                ownedCourses.hasInitialRes && (
                  !ownedCourses.data || ownedCourses?.data.length >= 1 
                ) &&
                <div className="text-2xl text-yellow-600">
                  <div> You don't own any course ! </div>
                  <Link> <a className=""> </a> </Link>
                </div>
              }
              {ownedCourses.data.map(course =>
                <div className="bg-white  h-40 m-4 md:m-8 lg:m-14 shadow-lg flex items-center">


                  <img src={course.instructorLogo} alt="" className="w-32 mx-10 hidden sm:hidden md:block" />
                  <div className="w-full px-6 md:px-10">
                    <div className="flex text-sm ">
                      <div className="">Course</div><span className="mx-2 border-r border-gray-600"></span>
                      <div className="">{course.title}</div>
                    </div>

                    <div>
                      {course.Heading}
                    </div>

                    <div className="text-sm">
                      overoll progress
                    </div>

                    <div>
                    </div>

                  </div>
                </div>

              )}
            </div>

          </div>


        </>
      )
    } else {
      return (
        <div className='text-6xl w-full h-screen flex justify-center items-center  flex-col'>
          <div className="flex">

            <div>Please unlock metamask</div>

          </div>
          <Link href={`/`}>
            <div className="hover:underline my-5 text-4xl text-blue-700 cursor-pointer">Go to Home</div>
          </Link>
        </div >
      )
    }

  } else {
    return (
      <div className='text-6xl w-full h-screen flex justify-center items-center  flex-col'>
        <div className="flex">

          <div>Please connect to Wallet...</div>
          <Link href={`/`}>
            <div className="hover:underline my-5 text-4xl text-blue-700 underline cursor-pointer">Install Metamask</div>
          </Link>
        </div>
        <Link href={`/`}>
          <div className="hover:underline my-5 text-4xl text-blue-700 cursor-pointer">Go to Home</div>
        </Link>
      </div >
    )
  }
}

export const getServerSideProps = async (context) => {

  // const { slug } = context.query
  const res = await fetch("http://localhost:3000/api/blogs")
  const parsed = await res.json()

  var courses = []

  for (let i = 0; i < parsed.length; i++) {
    let resp = await fetch(`http://localhost:3000/api/blogId/${parsed[i]}`)
    courses[i] = await resp.json()
  }


  return {
    props: { courses }
  }
}





export default owned

owned.Layout = BaseLayout