'use client';
import { Typography } from '@mui/material';
import '../app/global.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image'
import coin from '../app/imagens/coin.png'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export function Sobre(){
    return(
        <Container id="sobre" maxWidth={false}  style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.9), 0 0 100px rgba(0, 0, 0, 0.9)'}}>
            <Container style={{display:'flex', justifyContent:'center'}}>
                <Image src={coin} alt="Logo angulo" style={{padding:'20px', animation: 'pulse 8.5s ease-in-out infinite'}}/>
            </Container>
            <Container maxWidth={false}  >
                <Box style={{border: '4px double white', borderRadius:'10px', boxShadow: '0px 0px 100px 0px rgba(255, 255, 255, 0.3)'}} >
                    <Box paddingBottom={2} textAlign={'center'} paddingTop={10} fontWeight={'normal'} textTransform={'uppercase'}>
                        <Typography variant='h3' >Visão geral</Typography>
                    </Box>
                    <Typography fontSize='1.3rem' lineHeight={2} textAlign={'center'} padding={5}>
                            Angulo Coin conecta o mundo tecnológico com todas as áreas esportivas.                      
                            Games, ligas esportivas, atletas, manufatura, premiações, apostas, mundo profissional, divisões de base,
                            aplicativo esportivo, a Angulo está em todas as partes.                     
                            Desenvolvido pela maior empresa de divisões de base do planeta, a Angulo trás uma oportunidade única de
                            entrar em um mercado gigantesco e que cresce em números assombrosos a cada ano.
                                                   
                    </Typography>
                </Box>
            </Container>
        </Container>
    )
}

