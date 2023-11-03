/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function index() {
  return (
    <div className="bg-gray-200 mt-4 lg:mt-10 mb-14 transition-all w-full">
      <Link href={`/partners`}>
        <h2 className=" pt-14 pb-6 px-4 items-center text-2xl font-semibold cursor-pointer">
          <div className="text-center text-gray-800">
            {`We collaborate with `}
            <span className="text-blue-600 hover:underline">
              200+ leading universities and companies
            </span>
          </div>
        </h2>
      </Link>

      <div className="flex flex-wrap justify-center  pb-16 items-center lg:mb-24 lg:mx-10">
        <div className="h-14 max-h-12 lg:my-8 mx-3">
          <img
            className=" max-h-11 lg:max-h-11"
            src="/partner_images/partnerHero/IIT_Bombay.png"
            alt=""
          />
        </div>
        <div className="h-14 mx-3">
          <img
            className=" max-h-11 lg:max-h-11"
            src="/partner_images/partnerHero/Indian_Institute_of_Technology_Roorkee_logo.png"
            alt="Indian_Institute_of_Technology_Roorkee"
          />
        </div>
        <div className="h-14 mx-3">
          <img
            className=" max-h-11 lg:max-h-11"
            src="/partner_images/partnerHero/1200px-IIM_Calcutta_Logo.svg.png"
            alt="1200px-IIM_Calcutta_Logo"
          />
        </div>
        <div className="h-14 mx-3 lg:my-8">
          <img
            className=" max-h-11 lg:max-h-11"
            src="/partner_images/partnerHero/google.png"
            alt="google"
          />
        </div>
        <div className="h-14 mx-3">
          <img
            className=" max-h-11 lg:max-h-11"
            src="/partner_images/partnerHero/ISB_transparent_logo.png"
            alt="ISB_transparent_logo"
          />
        </div>
        <div className="h-9 mx-3 lg:my-8">
          <img
            className=" max-h-6"
            src="/partner_images/partnerHero/stanford.png"
            alt="standford"
          />
        </div>
        <div className="h-14 mx-3">
          <img
            className=" max-h-11 lg:max-h-11"
            src="/partner_images/partnerHero/meta.png"
            alt="meta"
          />
        </div>
        <div className="h-14 mx-5 lg:my-8">
          <img
            className=" max-h-11 lg:max-h-11"
            src="/partner_images/partnerHero/umich.jfif"
            alt="Culcutta_Logo"
          />
        </div>
        <div className="h-14 mx-3">
          <img
            className=" max-h-11 lg:max-h-11"
            src="/partner_images/partnerHero/1200px-Amazon_Web_Services_Logo.png"
            alt="amazon_logo"
          />
        </div>
        <div className="h-14 mx-3 lg:my-8">
          <img
            className=" max-h-10"
            src="/partner_images/partnerHero/ibm.png"
            alt="ibm"
          />
        </div>
      </div>
    </div>
  );
}

export default index;
