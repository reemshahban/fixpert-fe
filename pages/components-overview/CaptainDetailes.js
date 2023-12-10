import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// material-ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

// 
import MainCard from '../../components/MainCard';
import Loader from '../../components/Loader';

// Libraries
import axios from 'axios';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //


const ComponentCaptaiDetailes = () => {
    const [data, setData] = useState([]);
    const [loading, setLoding] = useState(true);
    let { id } = useParams();

    useEffect(() => {
        requestAPI();
        // eslint-disable-next-line
    }, []);

    async function requestAPI() {
        axios.get(`http://localhost:5000/captains/${id}`)
            .then((res) => {
                setData(res.data[0])
                setLoding(false)
            }).catch(err => {
                setData({})
                console.log(err);
            }).finally(() => {
                setLoding(false)
            })
    }

    return (
        <MainCard title="Joining Request Detailes">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                {
                    loading ?
                        <TableBody>
                            <TableRow>
                                <TableCell><Loader /></TableCell>
                            </TableRow>
                        </TableBody>
                        :
                        <TableBody>
                            <TableRow>
                                <TableCell align="left" sx={{ fontWeight: 500 }}>First Name</TableCell>
                                <TableCell align="left">{data.first_name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left" sx={{ fontWeight: 500 }}>Last Name</TableCell>
                                <TableCell align="left">{data.last_name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left" sx={{ fontWeight: 500 }}>Email</TableCell>
                                <TableCell align="left">{data.email}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left" sx={{ fontWeight: 500 }}>Is Activated</TableCell>
                                <TableCell align="left">{data.is_activated_or_not}</TableCell>
                            </TableRow>
                        </TableBody>
                }
            </Table>
        </MainCard>
    )
}


export default ComponentCaptaiDetailes;
