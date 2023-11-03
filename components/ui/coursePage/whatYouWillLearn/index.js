/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

function index() {
  return (
    <>
      <div className="border px-2  md:px-4 ">
        <div className="uppercase w-full my-3 text-sm font-bold text-gray-500  shadow-sm border-gray-300">
          WHAT YOU WILL LEARN
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          <div className="flex py-4 ">
            <div className="!w-[50px] lg:!w-[100px] mx-2">
              <Image height={24} src="/svg/rightSign.svg" width={24} />
            </div>
            <div>
              {" "}
              Follow the design process: empathize with users, define pain
              points, ideate solutions, create wireframes and prototypes, test
              and iterate on designs{" "}
            </div>
          </div>
          <div className="flex py-4">
            <div className=" !w-[50px] lg:!w-[100px] mx-2">
              <Image height={24} src="/svg/rightSign.svg" width={24} />
            </div>
            <div>
              {" "}
              Understand the basics of UX research, like planning research
              studies, conducting interviews and usability studies, and
              synthesizing research results{" "}
            </div>
          </div>
          <div className="flex justify-start py-4 ">
            <div className="!w-[50px] lg:!w-[100px] mx-2">
              <Image height={24} src="/svg/rightSign.svg" width={24} />
            </div>
            <div>
              {" "}
              Apply foundational UX concepts, like user-centered design,
              accessibility, and equity-focused design{" "}
            </div>
          </div>
          <div className="flex py-4">
            <div className=" !w-[50px] lg:!w-[100px] mx-2">
              <Image height={24} src="/svg/rightSign.svg" width={24} />
            </div>
            <div>
              {" "}
              Create a professional UX portfolio that includes 3 end-to-end
              projects: a mobile app, a responsive website, and a cross-platform
              experience
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="border px-2  md:px-4 py-3 text-gray-600">
          <div className="uppercase w-full my-3 text-sm font-bold text-gray-500">
            SKILLS YOU WILL GAIN
          </div>
          <div className="flex flex-wrap ">
            <div className="whitespace-nowrap bg-gray-200 rounded-full px-4 py-px m-2">
              User Experience (UX)
            </div>
            <div className="whitespace-nowrap bg-gray-200 rounded-full px-4 py-px m-2">
              UX Research
            </div>
            <div className="whitespace-nowrap bg-gray-200 rounded-full px-4 py-px m-2">
              Wireframe
            </div>
            <div className="whitespace-nowrap bg-gray-200 rounded-full px-4 py-px m-2">
              Prototype
            </div>
            <div className="whitespace-nowrap bg-gray-200 rounded-full px-4 py-px m-2">
              User Experience Design (UXD)
            </div>
            <div className="whitespace-nowrap bg-gray-200 rounded-full px-4 py-px m-2">
              Usability Testing
            </div>
            <div className="whitespace-nowrap bg-gray-200 rounded-full px-4 py-px m-2">
              mockup
            </div>
            <div className="whitespace-nowrap bg-gray-200 rounded-full px-4 py-px m-2">
              Figma
            </div>
            <div className="whitespace-nowrap bg-gray-200 rounded-full px-4 py-px m-2">
              Adobe XD
            </div>
            <div className="whitespace-nowrap bg-gray-200 rounded-full px-4 py-px m-2">
              UX design jobs
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
