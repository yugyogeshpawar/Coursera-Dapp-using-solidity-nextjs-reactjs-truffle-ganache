import useSWR from "swr"
import { useEffect } from "react"

const adminAddress = {
    "0x5B24a03Ed498f970d14095F1dAAbab0FFcFCc54f": true
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