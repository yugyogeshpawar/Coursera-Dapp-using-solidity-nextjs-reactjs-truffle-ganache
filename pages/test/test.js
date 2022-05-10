import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useState } from 'react';


export default function SwipeableTemporaryDrawer() {

  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  return (
    <div className='w-full h-screen bg-gray-800 flex justify-center'>
      <>
        <div
          onClick={toggleDrawer("left", true)}
        >
          {"left"}
        </div>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          <div className='w-screen '>Left</div>
        </SwipeableDrawer>
      </>

    </div>
  );
}