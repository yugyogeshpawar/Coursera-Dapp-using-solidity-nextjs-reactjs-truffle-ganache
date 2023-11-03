/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from "next/link";

function index({ title, heading, logoUrl, imgUrl, slug }) {
  return (
    <Link href={`/course/${slug}`}>
      <div className="bg-violet-900 w-[265px] ">
        <div className={`bg-no-repeat h-[336px] relative bg cursor-pointer`}>
          <style jsx>{`
            .bg {
              background-image: url(${imgUrl});
              background-size: auto 265px;
              background-position: center -15%;
            }
          `}</style>

          <div className="">
            <svg
              id="ewbFiEQ63571"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="165 59 132 472"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
            >
              <path
                d="M163.868395,136.390828v337.387836h287.138584v-411.565304L163.868395,136.390828Z"
                transform="translate(0 0.000004)"
                fill="#211b55"
              />
            </svg>
            {/* <img src="/professionalCertificates/3.svg" alt="" /> */}
          </div>

          <div className="absolute top-28 left-6  ">
            <div className="p-2 bg-white w-max rounded items-center flex">
              <Image
                src={logoUrl}
                alt="w"
                width={54}
                height={54}
                className=""
              />
            </div>
            <div className="text-white mt-5 text-xl">{heading}</div>
            <div className="text-white">{title}</div>
          </div>

          <div className="absolute bottom-5 left-5 text-white uppercase text-sm font-bold">
            Professional Certificate
          </div>
        </div>
      </div>
    </Link>
  );
}

export default index;
