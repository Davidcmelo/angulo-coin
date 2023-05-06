'use client';
import Box from "@mui/material/Box";
import * as React from 'react';
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../app/imagens/logo.png'
import { Toolbar } from "@mui/material";
import '../app/global.css'
import '@fontsource/roboto/500.css';


const pages = ['Visão geral', 'Mercado', 'Oque fazemos','Responsabilidade social','Caracteristicas'];


export function Nav(){
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
   
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  
    return(       
        <AppBar position="static" sx={{ backgroundColor: '#0A0E17'}}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems:'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Box className='logospan' sx={{ display: 'flex', alignItems: 'center' }}>
                        <Image src={logo} alt="Logo angulo"  width={50} height={50} style={{padding:'5px'}}/>
                        <span style={{marginLeft: '10px', fontFamily:'Roboto', fontSize:'1.3rem'}}>AnguloCoin</span>
                    </Box>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto',  '&:hover': {cursor: 'pointer', transform: 'scale(1.3)'} }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                            display: { xs: 'block', md: 'none' } ,
                            }}
                        >
                            <Box sx={{ '& .menu-item:hover': { color: '#1B2335' ,transform: 'scale(1.1)',transition: 'transform 0.3s ease'} }}>
                                {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} className="menu-item" >
                                    <Typography textAlign="center" >{page}</Typography>
                                </MenuItem>
                                ))}
                            </Box>
                        </Menu>
                    </Box> 
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display:'block', '&.highlight:hover': {
                                    color: '#03A9F4',
                                    transform: 'scale(1.1)',
                                    transition: 'transform 0.3s ease'
                                  }, }}className="highlight"
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}


// const pages = [
//     { id: 'visao-geral', label: 'Visão geral', component: Sobre },
//     { id: 'mercado', label: 'Mercado', component: Market },
//     { id: 'oque-fazemos', label: 'O que fazemos', component: What},
//     { id: 'responsabilidade-social', label: 'Responsabilidade social', component: Social },
//     { id: 'caracteristicas', label: 'Características', component: Features },
//   ];
