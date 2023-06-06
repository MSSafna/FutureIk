import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30px' }}>
            <Typography color={'#909090'} sx={{ fontSize: '12px' }}>Copyright@2023.FutureIK</Typography>
        </Box>
    )
}

export default Footer