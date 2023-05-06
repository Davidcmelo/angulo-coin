'use client';
import { Card, Container, Typography } from '@mui/material';
import '../app/global.css';

import Image from 'next/image'
import  campeao from '../app/imagens/campeao.jpg'
import europeu from '../app/imagens/europeu.jpg'
import social from '../app/imagens/social.jpg'
import crianca from '../app/imagens/crianca.jpg'


export function Market(){
    return(
        <Container id="market" className='market-fundo' maxWidth={false} style={{height:'100vh'}} >
            <Container>
                <Typography variant='h2' textTransform={'uppercase'} textAlign={'center'} paddingTop={10} fontWeight={'normal'}>
                    oportunidades
                </Typography>
            </Container>
            <Container style={{display:'flex', justifyContent:'center'}}>
                <Typography textAlign={'center'} padding={5} width={'80%'} fontSize='1.5rem'>
                    Um mercado trilionário e uma empresa com atuação de 13 anos no mercado sulamericano e europeu,
                    trabalhando desde os principais clubes profissionais até as divisões de base e esportes sociais, dando
                    oportunidade aos menos favorecidos.
                </Typography>
            </Container>
            <Container maxWidth={false} style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <Card style={{height:'400px', width:'300px'}}>
                <Image src={social} alt="social"/>
                </Card>
                <Card style={{height:'400px', width:'300px'}}>
                    <Image src={campeao} alt="campeao"/>
                </Card>
                <Card style={{height:'400px', width:'300px'}}>
                    <Image src={europeu} alt="time"/>
                </Card>
                <Card style={{height:'400px', width:'300px'}}>
                    <Image src={crianca} alt="criancas"/>
                </Card>
            </Container>
        </Container>
    )
}



