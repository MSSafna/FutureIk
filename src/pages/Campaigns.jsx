import { Input } from '@mui/joy'
import { Box, Button, Grid, Typography } from '@mui/material'
import Footer from 'components/Home/Footer'
import HelpBtn from 'components/Home/HelpBtn'
import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { IoMdSearch } from "react-icons/io";
import Folders from 'components/CampaignsHome/Folders'
import TableData from 'components/CampaignsHome/TableData'
import AddCampaign from 'components/CampaignsHome/AddCampaign'

const Campaigns = () => {

  const [isAddingCampaign, setIsAddingCampaign] = useState(false);

  const handleAddCampaign = () => {
    setIsAddingCampaign(true);
  };

  return (

    <Box sx={{ height: '100%', bgcolor: '#F6F6F6' }}>
      {isAddingCampaign ? (
          <AddCampaign />
      ) : (
        <Box sx={{ p: '34px 34px 0px 34px' }}>
          <Grid container spacing={2}>
            <Grid item xs={2.5}>
              <Folders />
            </Grid>
            <Grid item xs={9.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Input
                    sx={{ height: '32px', border: '1px solid rgba(223, 223, 223, 0.41)', borderRadius: '2px', width: '472px' }}
                    placeholder='Search Campaign'
                    endDecorator={<IoMdSearch style={{ color: '#909090', fontSize: '20px' }} />}
                  />
                </Box>
                <Button variant="contained" sx={{ borderRadius: '0px' }} startIcon={<BsPlus />} onClick={handleAddCampaign}>
                  <Typography sx={{ fontSize: '12px', textTransform: 'none' }}>Add Campaign</Typography>
                </Button>
              </Box>
              <Box sx={{ bgcolor: '#FFFFFF', height: '504px', mt: '1rem' }}>
                <TableData />
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
      <HelpBtn />
      <Box sx={{ position: 'sticky', top: '96%' }}>
        <Footer />
      </Box>
    </Box>
  )
}

export default Campaigns