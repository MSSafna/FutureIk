import React from 'react'
import { Box, Divider,Typography } from '@mui/material'
import devices from '../../images/Devices.png'
import cmd from '../../images/cmd.png'
import plist from '../../images/plist.png'

const ActivityLogs = () => {

    const datas = [
        {
            img: devices,
            name: 'Device',
            desc: 'FutureIK-device 1 report generated successfully',
            date: '16 Mar 2023,',
            time: '06:30:25 PM'
        },
        {
            img: cmd,
            name: 'Campaign',
            desc: 'FutureIK-cinemas Modified successfully',
            date: '16 Mar 2023, ',
            time: '06:30:25 PM'
        },
        {
            img: plist,
            name: 'Device',
            desc: 'FutureIK-device 1 report generated successfully',
            date: '16 Mar 2023, ',
            time: '06:30:25 PM'
        },
        {
            img: plist,
            name: 'Device',
            desc: 'FutureIK-device 1 report generated successfully',
            date: '16 Mar 2023, ',
            time: '06:30:25 PM'
        },
        {
            img: plist,
            name: 'Device',
            desc: 'FutureIK-device 1 report generated successfully',
            date: '16 Mar 2023, ',
            time: '06:30:25 PM'
        },
        {
            img: plist,
            name: 'Device',
            desc: 'FutureIK-device 1 report generated successfully',
            date: '16 Mar 2023, ',
            time: '06:30:25 PM'
        },
    ]

    return (
        <Box sx={{ height: '200px', p: '1rem', border: '1px solid rgba(223,223,223, 0.41)', borderRadius: '2px', bgcolor: 'white' }}>
            <Typography sx={{ fontWeight: 400, fontSize: '16px', my: '0.5rem' }}>Activity Logs</Typography>
            <Box sx={{ overflowY: 'scroll', height:'8.5rem' }}>
                {datas.map((item) => (
                    <>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: '0.5rem' }}>
                            <img src={item.img} alt="" style={{ height: '13.46px', width: '14px', opacity: '0.4' }} />
                            <Box sx={{ width: '14rem' }}>
                                <Typography sx={{ fontWeight: 400, color: '#545454', fontSize: '15px' }}>{item.name}</Typography>
                                <Typography sx={{ fontWeight: 400, color: '#545454', fontSize: '10px' }}>{item.desc}</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: 400, color: '#909090', fontSize: '12px' }}>{item.date}</Typography>
                                <Typography sx={{ fontWeight: 400, color: '#909090', fontSize: '12px' }}>{item.time}</Typography>
                            </Box>
                        </Box>
                        <Divider width={'97%'} />
                    </>
                ))}
            </Box>
        </Box>
    )
}

export default ActivityLogs