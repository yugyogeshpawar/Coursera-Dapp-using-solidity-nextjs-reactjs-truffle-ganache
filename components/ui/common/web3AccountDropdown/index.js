/* eslint-disable react-hooks/rules-of-hooks */
import { useAccount, useNetwork } from "@components/hooks/web3/";
import { LoadingScreen } from "@components/ui/common";
import { useWeb3 } from "@components/providers";

function web3AccountDropdown() {
  const { _web3Api } = useWeb3();
  const { connect } = _web3Api;

  if (_web3Api.metamaskInstalled) {
    const { account } = useAccount();

    const { network } = useNetwork();

    return (
      <div className={`w-full flex flex-col rounded-lg pb-12 items-center`}>
        {
          <div className="text-sm text-center w-full font-normal px-4 max-w-lg">
            <div
              className="mb-3 mt-4  text-base flex justify-center"
              onClick={connect}
            >
              Account :{" "}
              {account.isAdmin && (
                <div className="font-bold text-base text-blue-600">- Admin</div>
              )}
            </div>

            <div
              className={`font-bold mb-3 text-base 
             ${network.isSupport ? "" : "text-red-600"}
            `}
            >
              {account.data ? (
                <div className="text-blue-600 font-sans"> {account.data} </div>
              ) : (
                <div className="text-red-600" onClick={connect}>
                  Unlock Metamask
                </div>
              )}
            </div>

            <div
              className={`text-right flex justify-end items-end text-sm 
          ${network.isSupport ? "text-blue-600" : "text-red-600"} `}
            >
              <div className="font-semibold pb-px"> Currently On</div>
              <div
                className={`ml-1 px-4 py-1 font-bold text-lg rounded border-2 
              ${
                network.isSupport
                  ? "text-blue-600 border-blue-600"
                  : "text-white bg-red-600"
              }`}
              >
                {network.data}
              </div>
            </div>
            {!network.isSupport && (
              <div className="my-6 px-4 py-1 font-bold text-lg rounded text-red-600">
                Connected to wrong Network <br /> Please connect to Ganache
              </div>
            )}
          </div>
        }
        <div className="mt-5">
          <div className="">Go to</div>
        </div>
      </div>
    );
  } else return <LoadingScreen />;
}

export default web3AccountDropdown;
