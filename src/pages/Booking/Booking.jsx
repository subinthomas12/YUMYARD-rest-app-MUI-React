import React from 'react'
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';
import CustomButton from '../../components/CustomButton/CustomButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Booking = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        width: '30%',
        [theme.breakpoints.down('md')]: {
            width: '85%',
        }
    }));


    const GuidesBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-around',
        width: '70%',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '0',
            flexDirection: 'column'
        }
    }));


    const GuideBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(2, 0, 2, 0),
        }
    }));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px'
            }}>

            <div style={{ width: '5%', height: '5px', backgroundColor: '#000339', margin: '0 auto' }}>

            </div>

            <Typography variant='h3'
                sx={{ fontSize: '35px', fontWeight: 'bold', color: '#000339', my: 3 }}>
                How to Book?
            </Typography>

            <CustomBox>
                <Typography
                    variant='body2'
                    sx={{ fontSize: '16px', fontWeight: '500', color: '#5a6473', textAlign: 'center' }}>
                    Everything you need to know when you book foe advance slot
                </Typography>
            </CustomBox>

            <GuidesBox>

                <GuideBox>
                    <img src="https://i.postimg.cc/YCJ2dZQQ/buy-icon.png" alt="" />

                    <Typography
                        variant='body2'
                        sx={{ fontWeight: '500', fontSize: '20px', color: '#3b3c45', my: 1, }}>
                        Order Guides
                    </Typography>
                    <Box sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='body2'
                            sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689ff' }}>
                            How to order
                        </Typography>
                        <ArrowRightAltIcon style={{ color: '#0689ff' }} />
                    </Box>
                </GuideBox>

                <GuideBox>
                    <img src="https://i.postimg.cc/L6Sx135D/sell-icon.png" alt="" />

                    <Typography
                        variant='body2'
                        sx={{ fontWeight: '500', fontSize: '20px', color: '#3b3c45', my: 1, }}>
                        Booking Guides
                    </Typography>
                    <Box sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='body2'
                            sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689ff' }}>
                            How to Book
                        </Typography>
                        <ArrowRightAltIcon style={{ color: '#0689ff' }} />
                    </Box>
                </GuideBox>

                <GuideBox>
                    <img src="https://i.postimg.cc/L6Sx135D/sell-icon.png" alt="" />

                    <Typography
                        variant='body2'
                        sx={{ fontWeight: '500', fontSize: '20px', color: '#3b3c45', my: 1, }}>
                        Payment Guides
                    </Typography>
                    <Box sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='body2'
                            sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689ff' }}>
                            Payment Method
                        </Typography>
                        <ArrowRightAltIcon style={{ color: '#0689ff' }} />
                    </Box>
                </GuideBox>

            </GuidesBox>

            <CustomButton
                backgroundColor='#0f1b4c'
                color='#fff'
                buttonText='See Full Guides'
                guideBtn={true}></CustomButton>
        </Box>


    );
};

export default Booking