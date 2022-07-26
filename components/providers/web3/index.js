import detectEthereumProvider from "@metamask/detect-provider"
import Web3 from 'web3'
import { useEffect, useMemo, useState } from "react"
import { setupHooks } from "./hooks/setupHooks"
import { loadContract } from "@utils/loadContract"


const { createContext, useContext } = require("react")

const Web3Context = createContext(null)

const createWeb3State = ({ web3, provider, contract, isLoading, metamaskInstalled }) => {
    return {
        web3, provider, contract, isLoading, metamaskInstalled, hooks: setupHooks({ web3, provider, contract })
    }
}

export default function Web3Provider({ children }) {

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const [web3Api, setWeb3Api] = useState(
        createWeb3State({
            provider: null,
            web3: null,
            contract: null,
            isLoading: true,
            metamaskInstalled: false,
            hooks: setupHooks({ web3: null, provider: null, contract: null })
        }))

    useEffect(() => {
        const loadProvider = async () => {
            let provider = await detectEthereumProvider()

            if (provider) {
                const web3 = new Web3(provider)
                const contract = await loadContract("Coursera", web3)
                setWeb3Api(createWeb3State({
                    web3, provider, isLoading: false,
                    metamaskInstalled: true, contract
                    // ,hooks: setupHooks({ web3, provider, contract })
                }))
            }
            else {
                setWeb3Api({ isLoading: false, metamaskInstalled: false })
                console.log("please install metamask")
            }
        }
        loadProvider()
    }, [])

    const _web3Api = useMemo(() => {
        const { web3, provider, isLoading } = web3Api


        return {
            ...web3Api,
            connect: provider ? async () => {   
                try {
                    await ethereum.request({ method: 'eth_requestAccounts' })
                    location.reload()
                } catch (error) {
                    await delay(2000)
                    location.reload()
                }
            }
                : console.log("Cannot connect to Metamask, try to reload your browser")
        }
    }, [web3Api])

    return (
        <Web3Context.Provider value={{ _web3Api }}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() {

    return useContext(Web3Context)
}

export function useHooks(callback) {
    const { _web3Api } = useWeb3()
    const { hooks } = _web3Api

    return callback(hooks)
}
