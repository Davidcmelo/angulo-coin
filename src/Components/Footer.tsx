'use client';
import { Container, Grid, Link, Typography } from '@mui/material';
import '../app/global.css'
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../app/imagens/logo.png';
import Image from 'next/image'
import { Height } from '@material-ui/icons';
import GitHubIcon from '@mui/icons-material/GitHub';

export function Footer(){
    return(
        <Container style={{backgroundColor:'#0A0E17' }} maxWidth={false}>
            <Container maxWidth={false} style={{display:'flex', flexDirection:'column', alignItems:'center', paddingTop:'20px'}}>
                <Typography variant='h5' textTransform={'uppercase'} textAlign={'center'}>
                    Se junte a maior comunidade esportiva do mundo
                </Typography>
                <Image src={logo} alt="Logo angulo"  width={50} height={50} style={{padding:'5px'}}/>
            </Container>
            
            <Container style={{alignItems:'center', padding:'20px', display:'flex', justifyContent:'center'}} maxWidth={false}>
                <a href="https://github.com/Davidcmelo?tab=repositories" target="_blank"><FacebookIcon style={{width:'50px', height:'50px'}}/></a>
                <a href="https://github.com/Davidcmelo?tab=repositories" target="_blank"><InstagramIcon style={{width:'50px', height:'50px'}}/></a>
                <a href="https://github.com/Davidcmelo?tab=repositories" target="_blank"><TwitterIcon style={{width:'50px', height:'50px'}}/></a>
                <a href="https://github.com/Davidcmelo?tab=repositories" target="_blank"><GitHubIcon style={{width:'50px', height:'50px'}}/></a>
            </Container>
            <Box>
                <Typography textAlign={'center'}>
                    © 2023 - David Cardoso. Todos os direitos reservados.
                </Typography>
            </Box>

        </Container>
    )
}