

function index() {
    return (
        <div className=" flex flex-col w-full items-center mt-8">
            <div className="text-3xl text-gray-700 my-16 text-center px-3">
                What is a Professional Certificate?
            </div>
            <div className="md:px-8 max-w-7xl my-6 w-full grid place-content-start grid-cols-1 lg:grid-cols-2 ">
                <div className="px-2">
                    <div className="text-2xl font-light">
                        Build the Skills to Get Job Ready
                    </div>
                    <div className=" text-gray-700 my-3 ">
                        Whether you’re looking to start a new career, or change your current one, Professional Certificates on Coursera help you become job ready. Learn at your own pace, whenever and wherever it’s most convenient for you. Enroll today and explore a new career path with a 7 day free trial. You can pause your learning or end your subscription at any time.
                    </div>

                    <div className="text-2xl font-light">
                        Hands-On Projects
                    </div>
                    <div className=" text-gray-700 my-3 ">
                        Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.
                    </div>
                    <div className="text-2xl font-light">
                        Earn a Career Credential
                    </div>
                    <div className=" text-gray-700 my-3 ">
                        When you complete all of the courses in the program, you'll earn a Certificate to share with your professional network as well as unlock access to career support resources to help you kickstart your new career. Many Professional Certificates have hiring partners that recognize the Professional Certificate credential and others can help prepare you for a certification exam. You can find more information on individual Professional Certificate pages where it applies.
                    </div>
                </div>
                <div className="w-full grid place-content-center grid-cols-1">
                    <img className="w-full px-2 md:px-6" src={`/images/lady_looking_at_computer.png`} />
                </div>
            </div>
        </div>

    )
}

export default index