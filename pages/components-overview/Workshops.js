// material-ui
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
// project import
import ComponentSkeleton from './ComponentSkeleton';

// ============================|| COMPONENT - SHADOW ||============================ //

const ComponentWorkshops = () => {


    return (
        <ComponentSkeleton>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                </Table>
            </TableContainer>
        </ComponentSkeleton>
    )

}

export default ComponentWorkshops;
