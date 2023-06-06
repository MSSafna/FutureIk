import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const ProjectInfo = () => {

    const datas = [
        {
            item: 'Adidas Mobile',

        },
        {
            item: 'Campaigns',
            value: 8
        },
        {
            item: 'Channels',
            value: 9 / 10
        },
        {
            item: 'Last Edited by',
            value: 'Varun'
        },
        {
            item: 'Last Edited on',
            value: '5 hours ago'
        }
    ]

    return (
        <Card sx={{ display: 'flex', bgcolor: 'white', height: '5.664rem', mt: '12px', borderRadius: '2px', boxShadow: 'none ', border: '1px solid rgba(244, 244, 244, 0.4)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                {datas.map((data) => (
                    <Box>
                        <Typography>{data.item}</Typography>
                        <Typography>{data.value}</Typography>
                    </Box>
                ))}
            </Box>
        </Card>
    )
}

export default ProjectInfo