import {handler as createAccountHook } from "./useAccount" 
import {handler as createNetworkHook } from "./useNetwork" 
import {handler as createOwnedCoursesHook } from "./useOwnedCourses"

export const setupHooks = ({web3, provide, contract}) => {
    return {
        useAccount: createAccountHook(web3, provide),
        useNetwork: createNetworkHook(web3, provide),
        useOwnedCourses: createOwnedCoursesHook(web3, contract)
    } 

}