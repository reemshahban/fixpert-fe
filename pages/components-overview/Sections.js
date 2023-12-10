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

// Libraries
import axios from 'axios';

const ComponentSections = () => {
    const [data, setData] = useState([]);
    const [loading, setLoding] = useState(true);

    useEffect(() => {
        requestAPI();
    }, []);

    async function requestAPI() {
        axios.get("http://localhost:5000/section")
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
                        <TableCell align="left">Name</TableCell>
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
                                        {row.name}
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                }
            </Table>
        </TableContainer>
    )
}

export default ComponentSections;
