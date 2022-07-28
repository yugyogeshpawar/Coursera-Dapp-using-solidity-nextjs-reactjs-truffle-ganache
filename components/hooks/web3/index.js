import { useHooks } from "@components/providers/web3"



const _isEmpty = data => {
    

    return (
        data == null || data == "" || (Array.isArray(data) && data.length === 0) ||
        ( data.constructor === Object && Object.keys(data).length === 0 ) 
    )
}

const enhanceHook = swrRes => {

    const { data, error } = swrRes
    const hasInitialRes = !!(data || error)
    const isEmpty = hasInitialRes && _isEmpty(data)


    return {
        ...swrRes,
        isEmpty,
        hasInitialRes

    }
}

export const useAccount = () => {
    const swrRes = enhanceHook(useHooks(hooks => hooks.useAccount)())
    return {
        account: swrRes
    }
}



export const useOwnedCourses = (...args) => {
    const swrRes = enhanceHook(useHooks(hooks => hooks.useOwnedCourses)(...args))
    return {
         ownedCourses: swrRes
     }
}


export const useNetwork = () => {
    const swrRes = enhanceHook(useHooks(hooks => hooks.useNetwork)())
    return {
         network: swrRes
     }
}

