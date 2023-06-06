import { Box, Typography } from '@mui/material'
import React from 'react'

const ProjectOverview = () => {

    const datas = [
        {
            id: 1,
            title: "Adidas Mobile",
        },
        {
            id: 2,
            title: "Campaigns",
            value: '8'
        },
        {
            id: 3,
            title: "Channels",
            value: '9/10'
        },
        {
            id: 4,
            title: "Last Edited by",
            value: 'Varun'
        },
        {
            id: 5,
            title: "Last Edited on",
            value: "5 hours ago"
        }
    ]

    return (
        <Box sx={{ height: '78px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', border: '1px solid rgba(223,223,223, 0.41)', borderRadius: '2px', bgcolor: 'white' }}>
            {datas.map((item) => (
                <Box>
                    <Typography style={{ fontWeight: 400, fontSize: '15px', color: item.id === 1 ? 'black' : '#C6C6C6' }}>{item.title}</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: '15px' }}>{item.value}</Typography>
                </Box>
            ))}
        </Box>
    )
}

export default ProjectOverview