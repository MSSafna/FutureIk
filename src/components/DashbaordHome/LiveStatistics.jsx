import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import CircleProgress from './CircleProgress'

const LiveStatistics = () => {
    const live = [
        {
            value: '35',
            text: '15',
            btn: 'Info'
        },
        {
            value: '75',
            text: '27',
            btn: 'Warnings'
        },
        {
            value: '10',
            text: '1',
            btn: 'Errors'
        }
    ]
    return (
        <Box sx={{ height: '200px', p: '1rem', border: '1px solid rgba(223,223,223, 0.41)', borderRadius: '2px', bgcolor: 'white' }}>
            <Typography sx={{ fontWeight: 400, fontSize: '16px', my: '0.5rem' }}>Live Statistics</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3, pb: '0.8rem' }}>
                {live.map((item) => (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <CircleProgress value={item.value} text={item.text} />
                        <Button variant="outlined" autoCapitalize='' size="small" sx={{ textTransform: 'none', border: '1px solid rgba(13, 109, 228, 0.5)', borderRadius: '2px' }}>{item.btn}</Button>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default LiveStatistics 