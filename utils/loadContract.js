
const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID

export const loadContract = async (name, web3) => {
        const res = await fetch(`/contracts/${name}.json`)
        const Artifact = await res.json()
    
        let contract = null
        
        try {
            contract = new web3.eth.Contract(
                Artifact.abi, Artifact.networks[5777].address
            )

        } catch {   
            console.log(`Contract ${name} connot be loaded`)
        }
    return contract
    }





