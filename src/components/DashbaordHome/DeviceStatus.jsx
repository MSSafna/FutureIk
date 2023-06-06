import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const DeviceStatus = () => {

    const items = [
        {
            id: '1',
            name: 'Test device 01',
            status: 'Online',
            time: 'Wed Apr 26 2023 ; 03:00:10'
        },
        {
            id: '2',
            name: 'Test device 02',
            status: 'Online',
            time: 'Wed Apr 26 2023 ; 15:00:10'
        },
        {
            id: '3',
            name: 'Test device 03',
            status: 'Offline',
            time: 'Wed Apr 26 2023 ; 20:00:10'
        },
        {
            id: '4',
            name: 'Test device 04',
            status: 'Offline',
            time: 'Wed Apr 26 2023 ; 10:00:10'
        },
        {
            id: ' 5',
            name: 'Test device 05',
            status: 'Online',
            time: 'Wed Apr 26 2023 ; 12:00:10 '
        },
        {
            id: ' 5',
            name: 'Test device 05',
            status: 'Online',
            time: 'Wed Apr 26 2023 ; 12:00:10 '
        },
        {
            id: ' 5',
            name: 'Test device 05',
            status: 'Online',
            time: 'Wed Apr 26 2023 ; 12:00:10 '
        },
        {
            id: ' 5',
            name: 'Test device 05',
            status: 'Online',
            time: 'Wed Apr 26 2023 ; 12:00:10 '
        },

    ]

    return (


        <Box sx={{ height: '200px', p: '1rem', border: '1px solid rgba(223,223,223, 0.41)', borderRadius: '2px', bgcolor: 'white' }}>
            <Typography sx={{ fontWeight: 400, fontSize: '16px', my: '0.5rem' }}>Device Status</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: '0.5rem' }}>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#545454' }}>Device Status</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#545454', }}>Status</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#545454', mr: '7.5rem' }}>Last Responce</Typography>
            </Box>
            <Box sx={{ height: '7rem', overflow: 'auto' }}>
                {items.map((item) => (
                    <Box sx={{  display: 'flex', alignItems: 'center', pb: '0.5rem', backgroundColor: item.id % 2 === 1 ? '#F6F6F6' : 'transparent', gap: 1.5 }}>
                        <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#545454' }}>{item.name}</Typography>
                        {item.status === "Online" ? (<Button size='sm' contained variant="contained" sx={{ backgroundColor: '#009421', textTransform: 'none', height: '14px', width: '37px', fontSize: '10px', fontWeight: '400' }}>{item.status}</Button>) :
                            <Button size='sm' contained variant="contained" sx={{ backgroundColor: '#E40404', textTransform: 'none', height: '14px', width: '37px', fontSize: '10px', fontWeight: '400' }}>{item.status}</Button>
                        }
                        <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#545454' }}>{item.time}</Typography>
                        {/* {item.id === '2' && <img src={rht} style={{ height: '12px', width: '12px', opacity: '0.3' }} alt="" />}
                            {item.id === '4' && <img src={lft} style={{ height: '12px', width: '12px', opacity: '0.3' }} alt="" />} */}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default DeviceStatus