import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Box, Container } from '@mui/system';

const Footer = () => {

    const CustomContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-around',
        gap: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            textAlign: 'center',
        }
    }));


    const IconBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        }
    }));


    const FooterLink = styled('span')(({ theme }) => ({
        fontSize: '16px',
        color: '#000066',
        fontWeight: '300',
        cursor: 'pointer',
        "&:hover": {
            color: '#66b2ff',
        }
    }));



    return (
        <Box sx={{ py: 10, backgroundColor: '#F05C79' }}>

            <CustomContainer>

                <Box>
                    <Typography sx={{ fontSize: '20px', color: '#1c1c1d', fontWeight: '700', mb: 2, }}>
                        Featured
                    </Typography>

                    <FooterLink>Guides</FooterLink> <br />

                    <FooterLink>Services</FooterLink> <br />

                    <FooterLink>Contact Us</FooterLink> <br />
                </Box>

                <Box>
                    <Typography sx={{ fontSize: '20px', color: '#1c1c1d', fontWeight: '700', mb: 2, }}>
                        Overview
                    </Typography>

                    <FooterLink>Location</FooterLink> <br />

                    <FooterLink>Partnerships</FooterLink> <br />

                    <FooterLink>Terms of use & Privacy Policies</FooterLink> <br />
                </Box>

                <Box>
                    <Typography sx={{ fontSize: '20px', color: '#1c1c1d', fontWeight: '700', mb: 2, }}>
                        Get in touch
                    </Typography>

                    <Typography sx={{ fontSize: '16px', color: '#7a7a7e', fontWeight: '500', mb: 2, }}>
                        Keep in touch with our social media pages.
                    </Typography>

                    <IconBox>
                        <img src="https://i.postimg.cc/zD636pHk/The-Big-4-Glossary-Facebook-Twitter-Linked-In-and-Pinterest-Constant-Contact.png"
                            alt="" style={{ cursor: 'pointer', width: '30px', height: '30px' }} />

                        <img src="https://i.postimg.cc/6qDcgRCp/Twitter-Twitter-Twitter.jpg"
                            alt="" style={{ cursor: 'pointer', width: '30px', height: '30px' }} />

                        <img src="https://i.postimg.cc/XvdTNjsJ/Instagram-Logo-Vector-PNG-Images-Instagram-Logo-Icon-Instagram-Icons-Logo-Icons-Logo-Clipart-PNG.jpg"
                            alt="" style={{ cursor: 'pointer', width: '30px', height: '30px' }} />
                    </IconBox>

                </Box>
            </CustomContainer>
        </Box>
    );

};

export default Footer