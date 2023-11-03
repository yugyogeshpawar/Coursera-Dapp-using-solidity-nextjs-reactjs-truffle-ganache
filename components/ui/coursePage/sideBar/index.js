/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
function index() {
  return (
    <div className="flex flex-col">
      <div className="  flex h-10 mx-2 mt-6  pt-2 pb-8">
        <div className="border border-gray-300 mr-4 rounded-full p-1  w-11 h-11 flex items-center justify-center">
          <Image
            className=""
            src={`/svg/shareableCertificates.svg`}
            height={20}
            width={20}
          />
        </div>
        <div className="mr-3">
          <h3 className="text-xl text-gray-700 font-bold">
            Shareable Certificate
          </h3>
          <div className="text-sm text-gray-600">
            Earn a Certificate upon completion
          </div>
        </div>
      </div>

      <div className="  flex h-10 mx-2 my-6  pt-2 pb-8">
        <div className="border border-gray-300 mr-4 rounded-full p-1  w-11 h-11 flex items-center justify-center">
          <Image
            className=""
            src={`/svg/onlineClass.svg`}
            height={20}
            width={20}
          />
        </div>
        <div className="mr-3">
          <h3 className="text-xl text-gray-700 font-bold">
            100% online courses
          </h3>
          <div className="text-sm text-gray-600">
            Start instantly and learn at your own schedule.
          </div>
        </div>
      </div>

      <div className="  flex h-10 mx-2  my-6   pt-2 pb-8">
        <div className="border border-gray-300 mr-4 rounded-full p-1  w-11 h-11 flex items-center justify-center">
          <Image
            className=""
            src={`/svg/flexible.svg`}
            height={20}
            width={20}
          />
        </div>
        <div className="mr-3">
          <h3 className="text-xl text-gray-700 font-bold">Flexible Schedule</h3>
          <div className="text-sm text-gray-600">
            Set and maintain flexible deadlines.
          </div>
        </div>
      </div>

      <div className="  flex h-10 mx-2  my-6  pt-2 pb-8">
        <div className="border border-gray-300 mr-4 rounded-full p-1  w-11 h-11 flex items-center justify-center">
          <Image
            className=""
            src={`/svg/beginnerLevel.svg`}
            height={20}
            width={20}
          />
        </div>
        <div className="mr-3">
          <h3 className="text-xl text-gray-700 font-bold">Beginner Level</h3>
          <div className="text-sm text-gray-600">
            No degree or prior experience required
          </div>
        </div>
      </div>
      <div className="  flex h-10 mx-2  my-6  pt-2 pb-8">
        <div className="border border-gray-300 mr-4 rounded-full p-1  w-11 h-11 flex items-center justify-center">
          <Image className="" src={`/svg/clock.svg`} height={20} width={20} />
        </div>
        <div className="mr-3">
          <h3 className="text-xl text-gray-700 font-bold">
            Approximately 6 months to complete
          </h3>
          <div className="text-sm text-gray-600">
            Suggested pace of 10 hours/week English
          </div>
        </div>
      </div>
      <div className="  flex h-10 mx-2  my-6  pt-2 pb-8">
        <div className="border border-gray-300 mr-4 rounded-full p-1  w-11 h-11 flex items-center justify-center">
          <Image
            className=""
            src={`/svg/subtitle.svg`}
            height={20}
            width={20}
          />
        </div>
        <div className="mr-3">
          <h3 className="text-xl text-gray-700 font-bold">English</h3>
          <div className="text-sm text-gray-600">Subtitles: English</div>
        </div>
      </div>
    </div>
  );
}

export default index;
