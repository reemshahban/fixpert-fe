import React, { useState, useEffect } from 'react';
// material-ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

// Libraries
import axios from 'axios';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //


const ComponentJoiningRequest = () => {
    const [data, setData] = useState([]);
    const [loading, setLoding] = useState(true);

    useEffect(() => {
        requestAPI();
        // eslint-disable-next-line
    }, []);

    async function requestAPI() {
        axios.get("http://localhost:5000/joiningRequest")
            .then((res) => {
                setData(res.data)
                setLoding(false)
            }).catch(err => {
                setData(rows)
                console.log(err);
            }).finally(() => {
                setLoding(false)
            })
    }

    function createData(
        first_name,
        last_name,
        captain_email,
        captain_phone_number,
        captain_adress,
    ) {
        return { id: 1, first_name, last_name, captain_email, captain_phone_number, captain_adress };
    }
    const rows = [
        createData('Kan', 'Dogan', 'kan@gmail.com', '0945878453', 'Damascus, Malki, ....'),
        createData('Damon', 'Shobr', 'ds34@gmail.com', '0987564324', 'Damascus, al Kosour, ....'),
        createData('caram', 'phoben', 'caram@hotmail.com', '0954678234', 'Damascus, Qassaa, ....'),
        createData('heroma', 'jeff', 'jeff@gmail.com', '098122356', 'Damascus, Adawi, ....'),
        createData('Ginger', 'teboo', 'Ginger@gmail.com', '0912765489', 'Damascus, Mazza, ....'),
    ];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">First Name</TableCell>
                        <TableCell align="left">Last Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Phone Number</TableCell>
                        <TableCell align="left">Adress</TableCell>
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
                                        <Link component={RouterLink} to={`/joining-request/${row.id}`}>{row.first_name}</Link>
                                    </TableCell>
                                    <TableCell align="left">{row.last_name}</TableCell>
                                    <TableCell align="left">{row.captain_email}</TableCell>
                                    <TableCell align="left">{row.captain_phone_number}</TableCell>
                                    <TableCell align="left">{row.captain_adress}</TableCell>
                                    <TableCell align="left">
                                        <Button style={{ marginRight: "8px" }} variant="contained">Accept</Button>
                                        <Button variant="outlined">Decline</Button>
                                    </TableCell>
                                </TableRow>


                            ))}
                        </TableBody>
                }
            </Table>
        </TableContainer>
    )
}

export default ComponentJoiningRequest;
