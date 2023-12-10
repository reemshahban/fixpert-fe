import React, { useState, useEffect } from 'react';
// material-ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

// Libraries
import axios from 'axios';


const ComponentCaptains = () => {

    const [data, setData] = useState([]);
    const [loading, setLoding] = useState(true);

    useEffect(() => {
        requestAPI();
    }, []);

    async function requestAPI() {
        axios.get("http://localhost:5000/captians")
            .then((res) => {
                setData(res.data)
                setLoding(false)
            }).catch(err => {
                setData([])
                console.log(err);
            }).finally(() => {
                setLoding(false)
            })
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">First Name</TableCell>
                        <TableCell align="left">Last Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Is Activated</TableCell>
                    </TableRow>
                </TableHead>
                {
                    loading ?
                        <TableBody>
                            <TableRow>
                                <TableCell><CircularProgress /></TableCell>
                            </TableRow>
                        </TableBody>
                        :
                        <TableBody>
                            {data.map((row, i) => (

                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">
                                        <Link component={RouterLink} to={`/captin/${row.id}`}>{row.first_name}</Link>
                                    </TableCell>
                                    <TableCell align="left">{row.last_name}</TableCell>
                                    <TableCell align="left">{row.captain_email}</TableCell>
                                    <TableCell align="left">{row.activated_or_not}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                }
            </Table>
        </TableContainer>
    )

}

export default ComponentCaptains;
