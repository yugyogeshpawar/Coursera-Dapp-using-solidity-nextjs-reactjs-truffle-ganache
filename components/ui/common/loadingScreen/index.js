import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react'

export default function index() {

    const delay = ms => new Promise(res => setTimeout(res, ms))
    
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false);
    }

    const handleToggle = async() => {        
        setOpen(!open);
    }

    return (
        <Backdrop
            sx={{ color: '#1c6dce', backgroundColor: "white", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true} onClick={handleClose}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
