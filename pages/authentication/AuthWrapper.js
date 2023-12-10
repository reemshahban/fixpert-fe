import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { Box, Grid, Typography, Stack } from '@mui/material';

// project import
import AuthCard from './AuthCard';
import Logo from 'components/Logo';

// assets
import AuthBackground from 'assets/images/auth/AuthBackground';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children, isLogin }) => (
    <Box sx={{ minHeight: '100vh' }}>
        <AuthBackground />
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            sx={{
                minHeight: '100vh'
            }}
        >
            <Stack item xs={12} sx={{ mx: 3, mt: 3 }} direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center">
                    <Logo />
                    <Typography variant="h4" color="textPrimary">Fixpert</Typography>
                </Stack>
                {
                    !isLogin &&
                    <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Already have an account?
                    </Typography>
                }

            </Stack>
            <Grid item xs={12}>
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
                >
                    <Grid item>
                        <AuthCard>{children}</AuthCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
);

AuthWrapper.propTypes = {
    children: PropTypes.node
};

export default AuthWrapper;
