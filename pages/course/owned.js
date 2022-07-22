import Link from "next/link"
import { BaseLayout } from "@components/layout"
import { useAccount, useOwnedCourses } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"




function owned({ courses }) {
  const { _web3Api } = useWeb3()
  const { metamaskInstalled } = _web3Api
  if (metamaskInstalled) {
    const { account } = useAccount()

    // const { ownedCourses } = useOwnedCourses(courses, account.data)
    // console.log(JSON.stringify(ownedCourses))

    return (
      <>
        <div className='text-6xl w-full h-screen items-center '>
          <header className="bg-slate-100 h-96 w-full">

            <div className="h-full flex px-10">
              <div className="w-1/3 font-semibold text-5xl h-full flex flex-col mt-auto">
                <div className="w-full mt-auto m-4">
                  Wellcome back!
                </div>
                </div>
              <div></div>
            </div>
          </header>
          <div className="h-full bg-slate-50">
            <div className="h-12 w-full bg-white flex"> 
              <div className="flex text-xl font-bold w-full ">

                <div className=" my-auto ml-20 hover:border-b-4 border-blue-700 w-32 text-center h-full flex items-center justify-center cursor-pointer"> Home </div>
                <div className=" my-auto ml-20 hover:border-b-4 border-blue-700 w-32 text-center h-full flex items-center justify-center cursor-pointer"> In Progress </div>
                <div className=" my-auto ml-20 hover:border-b-4 border-blue-700 w-32 text-center h-full flex items-center justify-center cursor-pointer"> Completed </div>
                <div className=""></div>
              </div>

            </div>
            
          </div>

        </div >
      </>
    )

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
    console.log(`http://localhost:3000/api/blog/${parsed[i]}`);
    let resp = await fetch(`http://localhost:3000/api/blogId/${parsed[i]}`)
    courses[i] = await resp.json()
  }


  return {
    props: { courses }
  }
}





export default owned

owned.Layout = BaseLayout