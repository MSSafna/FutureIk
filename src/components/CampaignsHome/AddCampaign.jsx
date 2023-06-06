import { FormControl, FormLabel, Input } from '@mui/joy'
import { Box, Button, Chip } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import AddCampaignNext from './AddCampaignNext';

const AddCampaign = () => {
    const [isNextClicked, setIsNextClicked] = useState(false);

    const handleNext = () => {
        setIsNextClicked(true);
    };
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <Box sx={{ p: '3rem' }}>
            {isNextClicked ? (
                <AddCampaignNext />
            ) : (
                <form id="demo">
                    <FormControl>
                        <FormLabel
                            sx={(theme) => ({
                                '--FormLabel-color': '#676767',
                                mb: '1rem'
                            })}
                        >
                            Campaign Name <span style={{ color: '#E40404', marginLeft: '2px' }}>*</span>
                        </FormLabel>
                        <Input
                            sx={{ '--Input-decoratorChildHeight': '45px', border: '1px solid #DFDFDF', borderRadius: '2px', width: '432px', height: '45px ' }}
                            placeholder="Enter Campaign Name"
                            type="text"
                            required
                        />
                        <FormLabel
                            sx={(theme) => ({
                                '--FormLabel-color': '#676767',
                                mt: '3rem', mb: '1rem'
                            })}
                        >
                            Tags
                        </FormLabel>
                        <Input
                            sx={{ '--Input-decoratorChildHeight': '45px', border: '1px solid #DFDFDF', borderRadius: '2px', width: '432px', height: '45px ', paddingInline: 0, pl: '0.8rem' }}
                            placeholder="Eg: Outdoor"
                            type="text"
                            required
                            endDecorator={
                                <Button sx={{ bgcolor: '#0C66D6', height: '45px', borderRadius: '2px' }}
                                >
                                    <AiOutlinePlus style={{ fontSize: '1rem', color: 'white' }} />
                                </Button>
                            }
                        />
                        <Box sx={{ mt: '1rem', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Chip sx={{ borderRadius: '2px', border: '1px solid #DFDFDF', height: '30px', width: '7rem', color: '#002DA3' }} label="Outdoor" variant="outlined" onDelete={handleDelete} />
                            <Chip sx={{ borderRadius: '2px', border: '1px solid #DFDFDF', height: '30px', width: '7rem', color: '#002DA3' }} label="Kuwait" variant="outlined" onDelete={handleDelete} />
                        </Box>
                        <Box sx={{ mt: '13rem', alignSelf: 'flex-end' }}>
                            <Button variant='outlined' type="submit" sx={{ borderRadius: '0px', width: '8rem', textTransform: 'none', mr: '2rem' }} >Cancel</Button>
                            <Button variant='contained' type="submit" sx={{ borderRadius: '0px', width: '8rem', textTransform: 'none' }} onClick={handleNext}>Next</Button>
                        </Box>
                    </FormControl >
                </form >)}
        </Box >
    )
}

export default AddCampaign