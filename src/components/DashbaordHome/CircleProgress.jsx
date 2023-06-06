import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import { Typography } from '@mui/material';
import * as React from 'react';

export default function CircleProgress({ value, text, domain }) {

    return (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            {domain ?
                (<CircularProgress determinate value={value} sx={{
                    "--CircularProgress-size": "70px",
                    "--CircularProgress-trackThickness": "12px",
                    "--CircularProgress-progressThickness": "12px",
                    "--CircularProgress-progressColor": '#0B3366',
                    "--CircularProgress-trackColor": '#EDEDED',
                }} size="lg" >
                    <Typography sx={{ color: '#909090', fontSize: '8px', textAlign: 'center' }}>60.33% <br /> used</Typography>
                </CircularProgress>) :
                (<CircularProgress determinate value={value} sx={{
                    "--CircularProgress-size": "88px",
                    "--CircularProgress-trackThickness": "12px",
                    "--CircularProgress-progressThickness": "12px",
                    "--CircularProgress-progressColor": '#0B3366',
                    "--CircularProgress-trackColor": '#EDEDED',
                    transform: 'rotate(-173deg)',
                    "--CircularProgress-linecap": "2px"
                }} size="lg" >
                    <Typography sx={{ transform: 'rotate(-188deg)', color: '#909090', fontSize: '20px' }}>{text}</Typography>
                </CircularProgress>)
            }
        </Box>
    );
}

