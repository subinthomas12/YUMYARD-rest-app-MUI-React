import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CustomButton from '../CustomButton/CustomButton';

import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcons from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { useState } from 'react';

function Header() {

    const [mobileMenu, setMobileMenu] = useState({ left: false })

    const toogleDrawer = (anchor, open) => (event) => {

        if (event.type === "keydown" && (event.type === "Tab" || event.type === "shift")) {
            return;
        }
        setMobileMenu({ ...mobileMenu, [anchor]: open })
    }


    const list = (anchor) => (
        <Box sx={{
            width: anchor === "top" || anchor === "bottom" ? "auto" : 250
        }}
            role="presentation"
            onClick={toogleDrawer(anchor, false)}
            onKeyDown={toogleDrawer(anchor, false)}>
            <List>
                {
                    nav_titles.map((item, index) => (
                        <ListItem key={item.index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {
                                        index === 0 && <HomeIcon />
                                    }
                                    {
                                        index === 1 && <FeaturedPlayListIcon />
                                    }
                                    {
                                        index === 2 && <MiscellaneousServicesIcons />
                                    }
                                    {
                                        index === 3 && <ContactsIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText primary={item.display} />
                            </ListItemButton>
                        </ListItem>

                    ))
                }
            </List>
        </Box>
    )


    const nav_titles = [
        {
            path: '/',
            display: 'Home'
        },
        {
            path: '/',
            display: 'Dishes'
        },
        {
            path: '/',
            display: 'Services'
        },
        {
            path: '/',
            display: 'About Us'
        }
    ]

    const NavBarLinksBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: 'none'
        }
    }));

    const NavBarLink = styled(Typography)(() => ({
        fontSize: '15px',
        color: '#333333',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff'
        }
    }));

    const NavBarLogo = styled("h3")(({ theme }) => ({
        cursor: 'pointer',
        [theme.breakpoints.down("md")]: {
            display: 'none',
        }
    }));


    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: 'pointer',
        display: 'none',
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: 'block',
        }
    }));

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '40px',
                maxWidth: 'auto',
                backgroundColor: '#DC143C',
                marginLeft: '0px',
                marginBottom: '-24px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2.5rem',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '25px',
                        // fontWeight:'800',
                        color: '#ffffff',

                    }}
                >
                    <CustomMenuIcon onClick={toogleDrawer("left", true)} />

                    <Drawer
                        acnchor="left"
                        open={mobileMenu["left"]}
                        onClose={toogleDrawer("left", false)}>
                        {list("left")}
                    </Drawer>

                    <NavBarLogo>YumYard </NavBarLogo>
                </Box>
                <NavBarLinksBox>
                    {
                        nav_titles.map((item, index) => (
                            <NavBarLink variant='body2'>
                                {item.display}
                            </NavBarLink>
                        ))
                    }
                </NavBarLinksBox>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                }}
            >
                <NavBarLink variant='body2'>
                    Sign Up
                </NavBarLink>
                <CustomButton
                    backgroundColor='#0F184C'
                    color='#fff'
                    buttonText='Register'
                />
            </Box>

        </Box>
    )
}

export default Header