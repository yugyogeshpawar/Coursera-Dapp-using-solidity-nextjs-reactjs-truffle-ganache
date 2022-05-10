import useSWR from "swr"
import { useEffect } from "react"

const adminAddress = {
    "0x137aBb20eFb86A9eA65b8520962aEd0c99772EDe": true
}

export const handler = (web3, provider) => () => {

    const { data, mutate, ...rest } = useSWR(() => web3 && "web3/account",
        async () => {
            const accounts = await web3.eth.getAccounts()
            return accounts[0]
        }
    )

    useEffect(() => {  
        
        provider && provider.on('accountsChanged', (accounts) => {
            if (!accounts.length) {
                location.reload()
            }
        })
    }, [])


    return {
        data,
        isAdmin: (data && adminAddress[data]) ?? false,
        mutate, ...rest
    }
}