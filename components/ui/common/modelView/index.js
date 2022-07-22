import Box from '@mui/material/Box'
import { Button } from "@components/ui/common"
import { useEffect, useState } from "react"
import { useEthPrice } from "@components/hooks/useEthPrice"
import { useWeb3 } from '@components/providers'
import Modal from '@mui/material/Modal'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24
}
const defaultOrder = {
    price: "",
    email: "",
    confirmationEmail: ""
}

const _createFormState = (isDisabled = false, message = "") => ({ isDisabled, message })

const createFormState = ({ price, email, confirmationEmail }, hasAgreedTOS) => {
    if (!price || Number(price) <= 0) {
        return _createFormState(true, "Price is not valid.")
    }

    if (false) {  //isNewPurchase
        if (confirmationEmail.length === 0 || email.length === 0) {
            return _createFormState(true)
        }
        else if (email !== confirmationEmail) {
            return _createFormState(true, "Email are not matching.")
        }
    }

    if (!hasAgreedTOS) {
        return _createFormState(true, "You need to agree with terms of service in order to submit the form")
    }
    return _createFormState()
}


function index({ coursePopTitle, onClose,onSubmit ,courseId}) {

    const { web3Api } = useWeb3()
    const [isOpen, setIsOpen] = useState(false)
    const [order, setOrder] = useState(defaultOrder)
    const [enablePrice, setEnablePrice] = useState(false)
    const [hasAgreedTos, setHasAgreedTOS] = useState(false)
    const { eth } = useEthPrice()

    const formState = createFormState(order, hasAgreedTos)

    const closeModel = () => {
        setIsOpen(false)
        setHasAgreedTOS(false)
        setEnablePrice(false)
        setOrder(defaultOrder)
        onClose()
    }

    useEffect(() => {
        if (!!coursePopTitle) {
            console.log("fgsdfg");
            setIsOpen(true)
            setOrder({
                ...defaultOrder,
                price: eth.perItem
            })
        }
    }, [coursePopTitle])

    // const canPurchaseCourse = !!(web3Api.metamaskInstalled && network.isSupport)

    return (

        <Modal
            className={`bg-gray-800 bg-opacity-60`}
            open={isOpen}
            onClose={() => closeModel()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">


            <Box sx={style} className=" lg:rounded-xl  rounded-md overflow-y-visible">
                <div className=" align-middle rounded-lg text-left  shadow-xl transform transition-all   max-w-lg w-full bg-white overflow-y-scroll max-h-[95vh] ">
                    <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="mb-7 text-lg font-bold leading-6 text-gray-900" id="modal-modal-title">
                                    {coursePopTitle}
                                </h3>
                                <div className="mt-1 relative rounded-md">
                                    <div className="mb-1">
                                        <label className="mb-2 font-bold">Price(eth)</label>
                                        <div className="text-sm text-gray-700 flex">
                                            <label className="flex items-center mr-2">
                                                <input
                                                    checked={enablePrice}
                                                    onChange={({ target: { checked } }) => {
                                                        setOrder({ ...order, price: checked ? order.price : eth.perItem })
                                                        setEnablePrice(checked)
                                                    }}
                                                    type="checkbox"
                                                    className="form-checkbox placeholder:text-lg placeholder:font-light placeholder:text-gray-600"
                                                />
                                            </label>
                                            <span >Adjust Price - only when the price is not correct</span>
                                        </div>
                                    </div>
                                    <input
                                        disabled={!enablePrice}
                                        onChange={({ target: { value } }) => {
                                            if (isNaN(value)) { return; }
                                            setOrder({ ...order, price: value })
                                        }}
                                        value={order.price}
                                        type="text"
                                        name="price"
                                        id="price"
                                        className=" w-80 mb-1 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-3 sm:text-sm border-gray-300 rounded-md"
                                    />
                                    <p className="text-sm text-gray-700">
                                        Price will be verified at the time of the order. If the price will be lower, order can be declined (+- 2% slipage is allowed)
                                    </p>
                                </div>
                                {true && //isNewPurchase
                                    <>
                                        <div className="mt-2 relative rounded-md">
                                            <div className="mb-1">
                                                <label className="mb-2 font-bold">Email</label>
                                            </div>
                                            <input
                                                onChange={({ target: { value } }) => {
                                                    setOrder({ ...order, email: value.trim() })
                                                }}
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-3 sm:text-sm border-gray-300 rounded-md"
                                                placeholder="x@y.com"
                                            />
                                            <p className="text-sm text-gray-700 mt-1">
                                                It&apos;s important to fill a correct email, otherwise the order cannot be verified. We are not storing your email anywhere
                                            </p>
                                        </div>
                                        <div className="my-2 relative rounded-md">
                                            <div className="mb-1">
                                                <label className="mb-2 font-bold">Repeat Email</label>
                                            </div>
                                            <input
                                                onChange={({ target: { value } }) => {
                                                    setOrder({ ...order, confirmationEmail: value.trim })
                                                }}
                                                type="email"
                                                name="confirmationEmail"
                                                id="confirmationEmail"
                                                className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-3 sm:text-sm border-gray-300 rounded-md" placeholder="x@y.com" />
                                        </div>
                                    </>
                                }
                                <div className="text-sm text-gray-700 flex mt-5">
                                    <label className="flex items-center mr-2">
                                        <input
                                            checked={hasAgreedTos}
                                            onChange={({ target: { checked } }) => {
                                                setHasAgreedTOS(checked)
                                            }}
                                            type="checkbox"
                                            className="form-checkbox" />
                                    </label>
                                    <span>I accept Eincode &apos;terms of service&apos; and I agree that my order can be rejected in the case data provided above are not correct</span>
                                </div>
                                {formState.message &&
                                    <div className="p-4 my-3 text-yellow-700 bg-yellow-200 rounded-lg text-sm">
                                        {formState.message}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 flex">
                        <Button
                            disabled={formState.isDisabled}
                            className="mr-1"
                            onClick={() => { onSubmit(order, courseId) }}>
                            Submit
                        </Button>
                        <Button
                            onClick={() => closeModel()}
                            className='bg-red-700'>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )


}

export default index