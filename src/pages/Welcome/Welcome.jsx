import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material';
import { Container } from '@mui/material';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Title } from '@mui/icons-material';


const Welcome = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));


    const Title = styled(Typography)(({ theme }) => ({
        fontSize: '64px',
        color: '#fff',
        fontWeight: 'bold',
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px'
        }
    }));

    return (
        <Box sx={{ backgroundColor: "#DC143C", minHeight: "80vh" }}>
            <Container>
                <CustomBox>
                    <Box sx={{ flex: '1' }}>
                        <Typography
                            variant='body2'
                            sx={{
                                fontSize: '18px',
                                color: '#fff',
                                fontWeight: '500',
                                mt: 10,
                                mb: 4,
                            }}>
                            Welcome to YumYard Restaurant
                        </Typography>
                        <Title variant='h1'>
                            Discover a place where you'll love to Eat.
                        </Title>
                        <Typography
                            variant='body2'
                            sx={{ fontSize: '18px', color: '#fff', my: 4 }}>
                            Immerse yourself in the elegant ambiance as you savor each bite, accompanied by our extensive selection of hand-picked wines and carefully curated cocktails.
                        </Typography>
                        <CustomButton
                            backgroundColor='#0f1b4c'
                            color='#fff'
                            buttonText='More About Us'
                            welcomeBtn={true} />
                    </Box>

                    <Box sx={{ flex: '1.25' }}>
                        <img
                            src='https://i.postimg.cc/rp7rQzQj/b6307554-9cdc-4de2-9508-7251630e3f59.jpg'
                            alt=''
                            style={{ maxWidth: '100%', marginBottom: '2rem', height: '500px' }} />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );

};

export default Welcome