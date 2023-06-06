import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import playlist from 'images/playlist1.png'
import layout from 'images/layout.png'
import arrowIcon from 'images/arrowIcon.png'

const AddCampaignNext = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography>Choose the type of Campaign<span style={{ color: '#E40404', marginLeft: '2px' }}>*</span></Typography>
            <Box sx={{ width: '432px', height: '103px', border: '1px solid #DFDFDF', borderRadius: '2px', p: '2rem', display: 'flex', bgcolor: 'white', gap: 3, mt: '1rem', alignItems: 'center' }}>
                <Box sx={{ border: '1px solid #0C66D6', height: '55px', width: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={playlist} alt="" />
                </Box>
                <Typography sx={{ fontSize: '15px', color: '#545454', fontWeight: 400 }}>Zone</Typography>
            </Box>
            <Box sx={{ width: '432px', height: '103px', border: '1px solid #DFDFDF', borderRadius: '2px', p: '2rem', display: 'flex', bgcolor: 'white', mt: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Box sx={{ border: '1px solid #0C66D6', height: '55px', width: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#0C66D6' }}>
                        <img src={layout} alt="" />
                    </Box>
                    <Typography sx={{ fontSize: '15px', color: '#545454', fontWeight: 400 }}>Template</Typography>
                </Box>
                <img src={arrowIcon} alt="" />
            </Box>
            <Box sx={{ mt: '13rem', alignSelf: 'end' }}>
                <Button variant='outlined' type="submit" sx={{ borderRadius: '0px', width: '8rem', textTransform: 'none', mr: '2rem' }} >Cancel</Button>
                <Button variant='contained' type="submit" sx={{ borderRadius: '0px', width: '8rem', textTransform: 'none' }} >Next</Button>
            </Box>
        </Box>
    )
}

export default AddCampaignNext