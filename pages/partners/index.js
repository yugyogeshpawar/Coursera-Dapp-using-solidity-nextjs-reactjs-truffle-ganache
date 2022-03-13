
import { PartnerLogoImage } from '@components/ui/common/'
import { getPartners } from '@content/partners/partner'
function index({ partner }) {
  return (
    <>
     <div className='w-0 h-10 lg:h-20'></div>
      <div className='grid-cols-2 es:grid-cols-3 xl:grid-cols-6 grid lg:grid-cols-5 mx-auto sm:px-10          md:grid-cols-4 max-w-5xl items-center '> {
        partner.map((part) => (
          <PartnerLogoImage
            partTitle={part.Title}
            partImage={part.Url}
            key={part.Title}
          />
        ))}
      </div>
    </>
  )
}

export default index

export function getStaticProps() {
  const { partner } = getPartners()
  return { props: { partner } }
}