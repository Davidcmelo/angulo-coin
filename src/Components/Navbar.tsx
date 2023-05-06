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
import Link from "next/link";

import  {Carousel}  from '@/Components/Carousel'

import { Sobre } from '@/Components/Sobre';
import { Nav } from '@/Components/Nav';
import { Market } from '@/Components/Market';
import { What } from '@/Components/What';
import { Social } from '@/Components/Social';
import { Solucoes } from '@/Components/Solucoes';
import { Features } from '@/Components/Features';
import { Roadmap } from '@/Components/Roadmap';
import { Footer } from '@/Components/Footer';



export function Navbar(){

    function handleNavigationClick(id:any) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    return(
        <AppBar position="static" style={{backgroundColor:'#0A0E17'}} sx={{ flexGrow: 1, display: 'flex', alignItems:'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Image src={logo} alt="Logo angulo"  width={50} height={50} style={{padding:'5px'}}/>
                </Typography>
                <Box>
                    
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