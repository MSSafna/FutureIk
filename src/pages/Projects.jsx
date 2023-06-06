import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { BsPlus } from "react-icons/bs";
import NewProjectModal from '../modals/NewProjectModal';
import HelpBtn from '../components/Home/HelpBtn';
import ProjectInfo from '../components/projectPage/ProjectInfo';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';

const Projects = () => {



    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Navbar />
            <Box sx={{ height: 'calc(100% - 98px)', px: '148px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: '36px' }}>
                    <Typography sx={{ fontSize: '24px' }}>Project</Typography>
                    <Button variant="contained" sx={{ borderRadius: '0px' }} onClick={() => setOpen(true)} startIcon={<BsPlus />}>
                        <Typography sx={{ fontSize: '12px', textTransform: 'none' }}>Add Project</Typography>
                    </Button>
                </Box>
                <NewProjectModal open={open} setOpen={setOpen} />
                <HelpBtn />
                <Box sx={{ mt: '1rem', height: '80%', overflowY: 'scroll' }}>
                    <ProjectInfo />
                    <ProjectInfo />
                    <ProjectInfo />
                    <ProjectInfo />
                    <ProjectInfo />
                    <ProjectInfo />
                    <ProjectInfo />
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Projects 