'use client';
import { Card, ImageList, ImageListItem, Typography } from '@mui/material';
import '../app/global.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image'

import bet from '../app/imagens/bet.png'
import lions from '../app/imagens/lions.jpg'
import golden from '../app/imagens/gold.png'
import liga from '../app/imagens/liga.jpeg'
import manager from '../app/imagens/manager.jpeg'
import insider from '../app/imagens/insider.jpeg'
import samba from '../app/imagens/samba.jpeg'
import fantasy from '../app/imagens/fantasy.jpg'
import store from '../app/imagens/store.jpeg'
import anguloapp from '../app/imagens/store.jpeg'


export function Features(){
    return(
        <Container id="features" className='features' style={{ paddingTop:'50px' , textAlign:'center'}} >
            <Typography textTransform={'uppercase'} variant='h2' fontWeight={'normal'} textAlign={'center'} paddingBottom={3} className='what-h9'>
                Caracteristicas
            </Typography>
            <Typography textTransform={'uppercase'} variant='h6' fontWeight={'normal'} textAlign={'center'} paddingBottom={3} className='wtext7'>
                Nossas principais ferramentas
            </Typography>
            <Container >
                <Container style={{display:'flex', alignItems:'center', justifyContent:'space-around', paddingBottom:'30px'}} >
                    <Image className='hover-image img-bola ' src={bet} alt="Logo angulo" style={{width:'210px' , height:'210px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}}/>
                    <Image className="hover-image img-bola" src={anguloapp} alt="Logo angulo" style={{width:'210px' , height:'210px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}}/>
                    <Image className="hover-image img-bola" src={golden} alt="Logo angulo" style={{width:'210px' , height:'210px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}}/>
                    <Image className="hover-image img-bola" src={lions} alt="Logo angulo" style={{width:'210px' , height:'210px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}}/>
                </Container>
                <Container style={{display:'flex', alignItems:'center', justifyContent:'space-around',paddingBottom:'30px'}}>
                    <Image className="hover-image img-bola" src={liga} alt="Logo angulo" style={{width:'210px' , height:'210px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}}/>
                    <Image className="hover-image img-bola" src={manager} alt="Logo angulo" style={{width:'210px' , height:'210px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}}/>
                    <Image className="hover-image img-bola" src={insider} alt="Logo angulo" style={{width:'210px' , height:'210px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}}/>
                    <Image className="hover-image img-bola" src={samba} alt="Logo angulo" style={{width:'210px' , height:'210px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}}/>
                </Container>
                <Container style={{display:'flex', alignItems:'center', justifyContent:'space-around', paddingBottom:'70px'}}>
                    <Image className="hover-image img-bolae" src={fantasy} alt="Logo angulo" style={{width:'210px' , height:'210px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}}/>
                    <Image className="hover-image img-bolae" src={store} alt="Logo angulo" style={{width:'210px' , height:'210px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}}/>
                </Container>
               
            </Container>
        </Container>
    )
}