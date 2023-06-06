import { Box } from '@mui/material'
import React from 'react'
import headphone from '../../images/headphone.png'

const HelpBtn = () => {
    return (
        <Box sx={{ position: 'absolute', bottom: '15px', right: '24px', zIndex:1000 }}>
            <img style={{ heigth: '48px', width: '48px', filter: ' drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} src={headphone} alt="" />
        </Box>
    )
}

export default HelpBtn    