import { Link } from 'react-router-dom';

// material-ui
import { Stack, Typography, Box, Grid, Button } from '@mui/material';

// project import
import AuthBackground from 'assets/images/auth/AuthBackground';
import AuthCard from './AuthCard';


// ================================|| LANDING ||================================ //

const Landing = () => (

    <Box sx={{ minHeight: '100vh' }}>
        <AuthBackground />
        <Grid
            item
            xs={12}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' }, px: "15vw" }}
        >
            <Typography sx={{ fontSize: "100px", color:"primary.main" }}>Fixpert</Typography>
            <AuthCard>

                <Stack container spacing={3} >
                    <Typography variant="h2">Fixpert, Easy access to home repair service, you can become a member of Fixpert now.</Typography>
                    <Typography variant="h1">Join Us</Typography>

                    <Button component={Link} to="/register" variant="contained">Send Joining Request</Button>

                </Stack>
            </AuthCard>

        </Grid>
    </Box>

);

export default Landing;
