import '../styles/globals.css'
import { Navbar, Footer } from '@components/ui/common'

const Noop = ({ children }) => <>{children}</>
function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout ?? Noop

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>
  )

}

export default MyApp


