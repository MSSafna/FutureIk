import { Box, Typography } from '@mui/material'
import React from 'react'
import quality from 'images/quality.png'
import notification_c from 'images/notification_c.png'
import account from 'images/account_c.png'
import { FaArrowLeft } from "react-icons/fa";

const CampaignTopBar = () => {
    return (
        <Box bgcolor={'#FAFAFA'} sx={{ height: '3.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ color: '#909090', display: 'flex', alignItems: 'center', gap: 1 }}>
                <FaArrowLeft sx={{ color: '#909090' }} />
                <Typography>Projects</Typography><span>{'>'}</span>
                <Typography>FutureIK - Cinemas</Typography><span>{'>'}</span>
                <Typography>Campaigns</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15px', width: '15px', position: 'relative', borderRadius: '50%', bgcolor: '#F05C5C', top: '8px', left: '28px', zIndex: 5 }}>
                        <Typography sx={{ fontSize: '9px' }}>1</Typography>
                    </Box>
                    <img src={quality} alt="" style={{ height: '24px', width: '26.61px', opacity: '0.7', marginLeft: '15px' }} />
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15px', width: '15px', position: 'relative', borderRadius: '50%', bgcolor: '#F05C5C', top: '10px', left: '28px', zIndex: 5 }}>
                        <Typography sx={{ fontSize: '9px' }}>23</Typography>
                    </Box>
                    <img src={notification_c} alt="" style={{ height: '24px', width: '26.61px', opacity: '0.7', marginLeft: '15px' }} />
                </Box>
                <Box>
                    <img src={account} alt="" style={{ height: '24px', width: '26.61px', opacity: '0.7', marginLeft: '15px', marginTop: '15px' }} />
                </Box>
            </Box>
        </Box>
    )
}

export default CampaignTopBar