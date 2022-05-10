
function index({
    children,
    className = "",
    ...rest
}) {
    return (
        <button
            {...rest}
            className={` disabled:bg-blue-800 disabled:opacity-70 bg-blue-600 rounded py-2 px-3 border border-gray-500 text-white ml-3 my-2 mr-5  text-sm  font-bold lg:block hidden hover:bg-blue-800  whitespace-nowrap ${className} `}>
            {children}
        </button>
    )
}

export default index