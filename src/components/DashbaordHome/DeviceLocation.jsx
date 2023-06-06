import { Box, Typography } from '@mui/material'
import React from 'react'

const DeviceLocation = () => {
    return (
        <Box sx={{ height: '262px', bgcolor: 'white' }}>
            <Typography sx={{ fontSize: '15px', p: '0.5rem' }}>Location - Devices</Typography>
            <Box >
                <iframe src="https://www.google.com/maps/d/embed?mid=1nxxfsdOOs2x2HPEsNV-YlJDLFzM&hl=en&ehbc=2E312F" style={{ width: '100%', height: '14rem' }} title='map'></iframe>
            </Box>
        </Box>
    )
}

export default DeviceLocation