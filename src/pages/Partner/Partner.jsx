import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material';
import { Height } from '@mui/icons-material';

const Partner = () => {

    const CustomContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: theme.spacing(4),
        }
    }));


    const CustomBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(4),
        }
    }));

    return (

        <Box sx={{ mt: 10 }}>
            <CustomContainer>
                <CustomBox>
                    <h2 style={{ color: 'black' }}>YumYard</h2>

                    <Typography
                        variant='body2'
                        sx={{ color: '#7d8589', fontSize: '16px', fontWeight: 'bold', mt: 2 }}>
                        More than 45,000 trust Yum Yard
                    </Typography>
                </CustomBox>

                <Box>
                    <img src="https://i.postimg.cc/Jn7rWGjN/Premium-Vector-Five-stars-rating-vector-icon.jpg" alt="" style={{ maxWidth: '100%', Height: '80px', width: '110px' }} />

                    <Typography
                        variant='body2'
                        sx={{ color: '#7d8589', fontSize: '16px', fontWeight: 'bold', mt: 2 }}>
                        5-Star Rating (2k+ Reviews)
                    </Typography>
                </Box>
            </CustomContainer>

            <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                <img src="https://i.postimg.cc/MGJPHLZ5/logos.png" alt="" />
            </Container>
        </Box>
    );
};

export default Partner