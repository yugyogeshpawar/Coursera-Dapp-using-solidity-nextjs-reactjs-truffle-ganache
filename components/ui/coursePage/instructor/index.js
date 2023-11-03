/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

function instructor() {
  return (
    <div className=" w-full flex justify-center flex-col px-4 lg:px-16 text-gray-800">
      <div className="w-full max-w-7xl flex flex-col px-8 mx-auto flex-wrap">
        <div className="text-3xl mb-5">Instructor</div>
        <div className="flex flex-wrap">
          <div className="min-w-fit">
            <Image
              src={`/images/500x500_Google.jpg`}
              height={112}
              width={112}
            />
          </div>
          <div className="flex flex-col mx-5 ">
            <div className="flex flex-wrap pt-4">
              <div className="text-xl">Google Career Certificates</div>
              <div className="uppercase text-[0.6rem]  font-bold ml-2 px-2  text-white bg-blue-600 h-min p-px border-white border-2 whitespace-nowrap">
                Top instructor
              </div>
            </div>
            <div className="text-xs mt-2">
              <span className="font-bold">3,106,628</span> Learners
            </div>
            <div className="text-xs mt-px">
              <span className=" font-bold">118</span> Courses
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl flex flex-col lg:mt-32 mt-12 mx-auto px-8">
        <div className="text-3xl mb-5">Offered by</div>
        <div className="flex flex-col md:flex-row">
          <div className="min-w-fit">
            <Image
              src={`/images/500x500_Google.jpg`}
              height={130}
              width={130}
            />
          </div>
          <div className="flex flex-col mx-5 ">
            <div className="flex flex-col">
              <div className="my-3 text-xl">Google</div>
              <div className=" my-1 md:my-3 text-sm lg:w-1/2">
                Google Career Certificates are part of Grow with Google, an
                initiative that draws on Google's 20-year history of building
                products, platforms, and services that help people and
                businesses grow. Through programs like these, we aim to help
                everyone– those who make up the workforce of today and the
                students who will drive the workforce of tomorrow – access the
                best of Google’s training and tools to grow their skills,
                careers, and businesses.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default instructor;
