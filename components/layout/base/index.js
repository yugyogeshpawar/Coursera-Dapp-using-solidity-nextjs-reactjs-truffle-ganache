import { Navbar, Footer } from "@components/ui/common"
import { Web3Provider } from "@components/providers"

function BaseLayout({ children }) {
    return (
        <Web3Provider>
            <div>
                <Navbar />
                <div className="fit">
                    {children}
                </div>
            </div>
            <Footer />
        </Web3Provider>
    )
}

export default BaseLayout