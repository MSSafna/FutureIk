import React from 'react'
import { Box } from '@mui/material'
import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <Box sx={{ height: '68px', pl: '3.5rem', bgcolor: '#FAFAFA', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="" style={{ height: '10rem', width: '15rem' }} />
        </Box>
    )
}

export default Navbar  