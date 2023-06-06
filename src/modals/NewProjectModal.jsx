import React from 'react'
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import project from '../images/project.png'
import { Box, Button, Typography } from '@mui/material';

const NewProjectModal = ({ open, setOpen }) => {

    return (
        <Modal open={open} onClose={() => setOpen(false)} sx={{
            '& .css-114iouz-JoyModal-backdrop': {
                backdropFilter: 'none',
                backgroundColor: 'var(--joy-palette-background-backdrop, rgba(123 123 123 / 0.5))',
            }
        }}>
            <ModalDialog
                aria-labelledby="basic-modal-dialog-title"
                aria-describedby="basic-modal-dialog-description"
                sx={{ width: '714px', heigth: '363px', top: '275px', backgroundColor: '#F9F9F9', borderRadius: '3px', p: '0px' }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#FFFFFF', p: '1.5rem' }}>
                    <img style={{ height: '50px', width: '45.17px' }} src={project} alt="" />
                    <Typography sx={{ fontWeight: '700', fontSize: '22px', mt: '0.5rem' }}>New Project</Typography>
                </Box>
                <Box>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            setOpen(false);
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', margin: '3rem' }}>
                            <Typography sx={{ width: '5rem' }}>Name <span style={{ color: 'red' }}>*</span> </Typography>
                            <Input placeholder="Enter your project name" sx={{ color: '#909090', width: '100%', borderRadius: '0px' }} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '3rem', p: '1rem', bgcolor: 'white' }}>
                            <Button variant='outlined' type="submit" sx={{ borderRadius: '0px', width: '8rem', textTransform: 'none' }} >Cancel</Button>
                            <Button variant='contained' type="submit" sx={{ borderRadius: '0px', width: '8rem', textTransform: 'none' }} >Ok</Button>
                        </Box>
                    </form>
                </Box>
            </ModalDialog>
        </Modal>
    )
}

export default NewProjectModal