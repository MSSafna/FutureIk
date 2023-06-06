import { Box, Button, Grid, Typography } from '@mui/material'
import ActivityLogs from 'components/DashbaordHome/ActivityLogs'
import DeviceLocation from 'components/DashbaordHome/DeviceLocation'
import DeviceStatus from 'components/DashbaordHome/DeviceStatus'
import DomainQuota from 'components/DashbaordHome/DomainQuota'
import Generalnfo from 'components/DashbaordHome/Generalnfo'
import LiveStatistics from 'components/DashbaordHome/LiveStatistics'
import ProjectOverview from 'components/DashbaordHome/ProjectOverview'
import Footer from 'components/Home/Footer'
import HelpBtn from 'components/Home/HelpBtn'
import NewProjectModal from 'modals/NewProjectModal'
import React from 'react'
import { BsPlus } from 'react-icons/bs'

const Home = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ height: '100%', bgcolor: '#F6F6F6' }}>
      <Box sx={{ p: '34px 34px 0px 34px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography style={{ fontWeight: 400, fontSize: '24px', marginBottom: '1rem' }}>Project</Typography>
          <Button variant="contained" sx={{ borderRadius: '0px' }} onClick={() => setOpen(true)} startIcon={<BsPlus />}>
            <Typography sx={{ fontSize: '12px', textTransform: 'none' }}>Add Project</Typography>
          </Button>
          <NewProjectModal open={open} setOpen={setOpen} />
        </Box>
        <ProjectOverview />
        <Box >
          <Grid container spacing={1}>
            <Grid item xs={8} >
              <Grid container spacing={1} mt='0.5rem'>
                <Grid item xs={6} >
                  <Generalnfo />
                </Grid>
                <Grid item xs={6} >
                  <LiveStatistics />
                </Grid>
                <Grid item xs={6} >
                  <DeviceStatus />
                </Grid>
                <Grid item xs={6} >
                  <ActivityLogs />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} spacing={1} mt='1rem'>
              <Grid container spacing={1}>
                <Grid item xs={12} >
                  <DeviceLocation />
                </Grid>
                <Grid item xs={12} >
                  <DomainQuota />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <HelpBtn />
      <Box sx={{ position: 'sticky', top: '96%' }}>
        <Footer />
      </Box>
    </Box>
  )
}

export default Home