import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import


// ================================|| LANDING ||================================ //

const Landing = () => (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Login</Typography>
                    <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Don't have an account?
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
              
            </Grid>
        </Grid>

);

export default Landing;
