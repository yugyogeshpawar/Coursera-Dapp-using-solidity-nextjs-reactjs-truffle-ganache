/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Web3AccountDropdown, Button } from "@components/ui/common";
import { useWeb3 } from "@components/providers";

function index() {
  const { _web3Api } = useWeb3();
  const { connect } = _web3Api;
  const [accountTab, setaccountTab] = useState(false);

  const handleTooltipOpen = () => {
    setaccountTab(true);
  };

  const handleTooltipClose = () => {
    setaccountTab(false);
  };

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      boxShadow:
        "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      backgroundColor: "#ffff",
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: theme.typography.pxToRem(16),
      maxWidth: "60vw",
      overflow: "auto",
      maxHeight: "100vh",
      scrollbar: "4px",
    },
  }));

  if (!_web3Api.isLoading) {
    if (_web3Api.web3) {
      return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <HtmlTooltip
              PopperProps={{ disablePortal: true }}
              onClose={handleTooltipClose}
              open={accountTab}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              TransitionComponent={Zoom}
              placement="bottom-start"
              title={
                <div className="text-base cursor-context-menu text-gray-700 mr-2 w-96">
                  {" "}
                  <Web3AccountDropdown />{" "}
                </div>
              }
            >
              <div>
                {!_web3Api.metamaskInstalled ? (
                  <Button onClick={connect}>
                    {" "}
                    Connect metamask <span>⮟</span>
                  </Button>
                ) : (
                  <Button
                    onClick={
                      accountTab
                        ? () => handleTooltipClose()
                        : () => handleTooltipOpen()
                    }
                  >
                    {" "}
                    Account <span>⮟</span>
                  </Button>
                )}
              </div>
            </HtmlTooltip>
          </div>
        </ClickAwayListener>
      );
    } else
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href={"https://metamask.io/download/"} target="_blank">
          <Button>Install Metamask</Button>
        </a>
      );
  } else return <Button disabled={true}>Loading Web3...</Button>;
}
export default index;
