/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { BaseLayout } from "@components/layout";

function course() {
  return (
    <>
      <div className="text-6xl w-full h-screen flex justify-center items-center cursor-pointer flex-col">
        <div>No such Page availble right now</div>
        <Link href={`/`}>
          <div className="hover:underline my-5 text-4xl text-blue-700 ">
            Home
          </div>
        </Link>
      </div>
    </>
  );
}

export default course;

course.Layout = BaseLayout;
