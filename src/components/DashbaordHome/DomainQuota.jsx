import { Box, Typography } from '@mui/material'
import React from 'react'
import CircleProgress from './CircleProgress'

const DomainQuota = () => {
    const data = [
        {
            info: 'Today',
            value: '30.00',
            growth: 'Increase',
            growthVal: '15.00'
        },
        {
            info: 'This Week ',
            value: '15.00',
            growth: 'Decrease',
            growthVal: "-15.00"
        },
        {
            info: 'This Month',
            value: "55.00",
            growth: 'Decrease',
            growthVal: "+25.00"
        }
    ]
    return (
        <Box sx={{ height: '139px', bgcolor: 'white', pl: '1rem', border: '1px solid rgba(223, 223, 223, 0.41)', borderRadius: '2px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 400, fontSize: '16px', my: '0.5rem', alignSelf: 'flex-start' }}>Domain Quota</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CircleProgress value={60.33} text={'60.33% used'} domain='true' />
                        <Box >
                            <Typography sx={{ color: '#909090', fontSize: '13px' }}>Data usage</Typography>
                            <Typography sx={{ fontSize: '18px' }}>60.33gb/100gb</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '1.5rem' }}>
                    {data.map((item) => (<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box>
                            <Typography sx={{ color: '#909090', fontSize: '9.97px' }}>{item.info}</Typography>
                            <Typography sx={{ color: '#909090', fontSize: '12.46px' }}>{item.value}%</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ color: item.growth === 'Increase' ? "#3CC25A" : "#FF6A6A", fontSize: '9.97px' }}>{item.growth}</Typography>
                            <Typography sx={{ color: '#909090', fontSize: '9.97px' }}>{item.value}%</Typography>
                        </Box>
                    </Box>))}
                </Box>
            </Box>
        </Box>
    )
}

export default DomainQuota