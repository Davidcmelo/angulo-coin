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
import { useRef } from 'react';

import { useState } from "react";



export function Navbar(){
   
    const [anchorEl, setAnchorEl] = useState<EventTarget | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    function handleNavigationClick(id:string) {
        console.log('clicked on', id);
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
      setAnchorEl(null);
    }
 
    return(
        <AppBar  position="static" style={{backgroundColor:'#0A0E17'}}  sx={{ flexGrow: '1', display: 'flex', alignItems:'center', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Image src={logo} alt="Logo angulo"  width={50} height={50} style={{padding:'5px'}}/>
                </Typography>
                <Box sx={{ display: { xs: 'block', md: 'none' } }} >
                    <IconButton
                       size="large"
                       edge="end"
                       aria-label="menu"
                       aria-haspopup="true"
                       onClick={() => setAnchorEl(buttonRef.current)}
                       color="inherit"
                       ref={buttonRef}
                        >
                        <MenuIcon />
                    </IconButton >
                    <Menu
                    
                        anchorEl={Boolean(anchorEl) ? buttonRef.current : null}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        elevation={1}>
                        <MenuItem onClick={() => handleNavigationClick('sobre')} >
                            VISÃO GERAL
                        </MenuItem>
                        <MenuItem onClick={() => handleNavigationClick('market')}>
                            MERCADO
                        </MenuItem>
                        <MenuItem onClick={() => handleNavigationClick('what')}>
                            OQUE FAZEMOS
                        </MenuItem>
                        <MenuItem onClick={() => handleNavigationClick('social')}>
                            RESPONSABILIDADE SOCIAL
                        </MenuItem>
                        <MenuItem onClick={() => handleNavigationClick('features')}>
                            CARACTERISTICAS
                        </MenuItem>
                    </Menu>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
                    
                    <Button onClick={() => handleNavigationClick('sobre')} color="inherit"  sx={{'&:hover': {color: '#05D5CB' ,transform: 'scale(1.1)',transition: 'transform 0.3s ease'}}}>
                        visão geral
                    </Button>
                
                    <Button onClick={() => handleNavigationClick('market')} color="inherit"  sx={{'&:hover': {color: '#05D5CB' ,transform: 'scale(1.1)',transition: 'transform 0.3s ease'}}}>
                        mercado
                    </Button>

                    <Button onClick={() => handleNavigationClick('what')} color="inherit"  sx={{'&:hover': {color: '#05D5CB' ,transform: 'scale(1.1)',transition: 'transform 0.3s ease'}}}>
                        oque fazemos
                    </Button>

                    <Button onClick={() => handleNavigationClick('social')} color="inherit"  sx={{'&:hover': {color: '#05D5CB' ,transform: 'scale(1.1)',transition: 'transform 0.3s ease'}}}>
                        responsabilidade social
                    </Button>

                    <Button onClick={() => handleNavigationClick('features')} color="inherit"  sx={{'&:hover': {color: '#05D5CB' ,transform: 'scale(1.1)',transition: 'transform 0.3s ease'}}}>
                        caracteristicas
                    </Button>
                </Box>
            </Toolbar> 
        </AppBar>
    )
}


// import  {Carousel}  from '@/Components/Carousel'

// import { Sobre } from '@/Components/Sobre';
// import { Nav } from '@/Components/Nav';
// import { Market } from '@/Components/Market';
// import { What } from '@/Components/What';
// import { Social } from '@/Components/Social';
// import { Solucoes } from '@/Components/Solucoes';
// import { Features } from '@/Components/Features';
// import { Roadmap } from '@/Components/Roadmap';
// import { Footer } from '@/Components/Footer';

{/* <MenuItem onClick={() => handleNavigationClick('sobre')} >
VISÃO GERAL
</MenuItem>
<MenuItem onClick={() => handleNavigationClick('market')}>
 MERCADO
</MenuItem>
<MenuItem onClick={() => handleNavigationClick('what')}>
 OQUE FAZEMOS
</MenuItem>
<MenuItem onClick={() => handleNavigationClick('social')}>
 RESPONSABILIDADE SOCIAL
</MenuItem>
<MenuItem onClick={() => handleNavigationClick('features')}>
 CARACTERISTICAS
</MenuItem> */}