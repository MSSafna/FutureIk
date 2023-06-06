import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BFolder from 'images/Bfolder.png'
import { Divider, Typography } from '@mui/material';
import campaign from 'images/campaign1.png'
import { Button } from '@mui/joy';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.gray,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // '&:nth-of-type(odd)': {
    //     backgroundColor: theme.palette.action.hover,
    // },
    // // hide last border
    // '&:last-child td, &:last-child th': {
    //     border: 0,
    // },
}));

function createData(name, lasteditedby, lasteditedon, startson, endson, type, status) {
    return { name, lasteditedby, lasteditedon, startson, endson, type, status };
}

const rows = [
    createData('Quadfos - cinemas', 'Keerthana', '01-03-2023 13:00:00', '01-03-2023 13:00:00', '03-03-2023 13:00:00', 'Template', 'Inactive'),
    createData('Quadfos - cinemas', 'Keerthana', '01-03-2023 13:00:00', '01-03-2023 13:00:00', '03-03-2023 13:00:00', 'Template', 'Inactive'),
    createData('Quadfos - cinemas', 'Keerthana', '01-03-2023 13:00:00', '01-03-2023 13:00:00', '03-03-2023 13:00:00', 'Template', 'Inactive'),
    createData('Quadfos - cinemas', 'Keerthana', '01-03-2023 13:00:00', '01-03-2023 13:00:00', '03-03-2023 13:00:00', 'Template', 'Inactive'),
];

export default function TableData() {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow >
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right"> Last Edited by</StyledTableCell>
                        <StyledTableCell align="right"> Last Edited on</StyledTableCell>
                        <StyledTableCell align="right">Starts on</StyledTableCell>
                        <StyledTableCell align="right">Ends on</StyledTableCell>
                        <StyledTableCell align="right">Type</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow sx={{ display: 'flex', alignItems: 'center', gap: 2, pl: '1rem', height: '3rem' }}>
                        <img src={BFolder} alt="" style={{ width: '22px', height: "16.99px" }} />
                        <Typography>Quadfos</Typography>
                    </StyledTableRow>
                    <Divider></Divider>
                    {rows.map((row) => (
                        <>
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    <img src={campaign} alt="" style={{ marginRight: '1rem' }} />{row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.lasteditedby}</StyledTableCell>
                                <StyledTableCell align="right">{row.lasteditedon}</StyledTableCell>
                                <StyledTableCell align="right">{row.startson}</StyledTableCell>
                                <StyledTableCell align="right">{row.endson}</StyledTableCell>
                                <StyledTableCell align="right">{row.type}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button sx={{ backgroundColor: 'rgba(228, 4, 4, 0.7)', borderRadius: '2px' }}>{row.status}</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        </>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
