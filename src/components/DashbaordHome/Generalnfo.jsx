import { Box, Typography } from '@mui/material'
import React from 'react'
import Progress from './Progress'

const Generalnfo = () => {

    const infos = [
        {
            name: 'Projects',
            value: '30',
            ratio: '02/10'
        },
        {
            name: 'Users',
            value: '100',
            ratio: '03/03'
        },
        {
            name: 'Channels',
            value: '100',
            ratio: '10/10'
        },
        {
            name: 'Devices',
            value: '50',
            ratio: '05/10'
        },
    ]

    return (
        <Box sx={{ height: '200px', p: '1rem', border: '1px solid rgba(223,223,223, 0.41)', borderRadius: '2px', bgcolor: 'white' }}>
            <Typography sx={{ fontWeight: 400, fontSize: '16px', my: '0.5rem' }}>General Information</Typography>
            {infos.map((item) => (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3, pb: '0.8rem' }}>
                    <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#909090', width: '3rem' }}>{item.name}</Typography>
                    <Progress variant="determinate" value={item.value} />
                    <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#909090' }}>{item.ratio}</Typography>
                </Box>
            ))}
        </Box>
    )
}

export default Generalnfo