

function partnerLogoImage({ partTitle, partImage }) {
  return (

        <div  key={partImage} className="group p-4  relative">
          <div className="relative rounded-lg overflow-hidden group-hover:opacity-75 ">
            <img src={partImage} alt={partTitle}
              className="w-full h-full object-center object-cover" />
          </div>
          <h3 className="mt-3 text-sm md:text-base font-semibold text-gray-500">
            <a href={"/"} target="_blank" >
              {partTitle}
            </a></h3>
        </div>
  
  )
}

export default partnerLogoImage