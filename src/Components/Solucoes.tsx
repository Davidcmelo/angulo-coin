'use client';
import { Card, ImageList, ImageListItem, Typography } from '@mui/material';
import '../app/global.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image'
import app from '../app/imagens/logoapp.png'
import bet from '../app/imagens/bet.png'
import lions from '../app/imagens/lions.jpg'
import golden from '../app/imagens/gold.png'
import liga from '../app/imagens/liga.jpeg'
import anguloapp from '../app/imagens/anguloapp.jpeg'

export function Solucoes(){
    return(
        <Container style={{height:'100vh'}}  maxWidth={false} className='hg-sol'>
            <Container>
                <Typography variant='h2' textTransform={'uppercase'} textAlign={'center'} paddingTop={'50px'} fontWeight={'normal'} className='what-h5'>
                    nossas Soluções
                </Typography>
                <Typography fontSize={'1.3rem'} textAlign={'center'} variant='body1' paddingTop={'20px'} paddingBottom={'50px'} className='wtext'  >
                        A Angulo possui mais de 200 mil atletas nas suas ligas de divisões de base, contando desde escolinhas até
                        aos principais clubes do Brasil, Argentina e Europa.
                        <Typography fontSize={'1.3rem'} textAlign={'center'} variant='body1' className='wtext'>
                            A Angulo quer transformar o aplicativo em rede social esportiva, tendo o maior database esportivo do
                            mundo, já que é a maior empresa de divisões de base do planeta.
                        </Typography>

                        <Typography fontSize={'1.3rem'} textAlign={'center'} variant='body1' className='wtext tchau' >
                            E como de costume, parte do faturamento vai para ajudar atletas sem condições, como já fazemos hoje,
                            mas potencializando cada vez mais.
                            Em todos os eventos, em todas as partes, obviamente, faremos propaganda da moeda.
                        </Typography >
                    <Typography className='tchau'>A Angulo é parceira dos maiores clubes do mundo.</Typography>
                </Typography>
            </Container>
                
            <Container style={{display:'flex', alignItems:'stretch',textAlign:'center'}}   >
            
                    <Container style={{display:'flex', alignItems:'center', flexDirection:'column', padding:'50px'}} className='bolas'>
                        <Image src={anguloapp} alt="Logo angulo" style={{width:'230px' , height:'230px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}} className='img-bola'/>
                        <Typography  fontSize={'1.2rem'} className='tchau'>
                            Também possuímos um aplicativo onde é exibido
                            resultados e classificações.
                        </Typography >
                    </Container>
                    <Container style={{display:'flex', alignItems:'center', flexDirection:'column',padding:'50px'}} className='bolas'>
                        <Image src={liga} alt="Logo angulo" style={{width:'230px' , height:'230px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}} className='img-bola'/>
                        <Typography  fontSize={'1.2rem'} className='tchau'>
                            Criaremos tokens de clubes e jogos com NFTs.
                        </Typography>
                    </Container>
                    
                    <Container style={{display:'flex', alignItems:'center', flexDirection:'column',padding:'50px',}}className='bolas'>
                        <Image src={bet} alt="Logo angulo" style={{width:'230px' , height:'230px', borderRadius:'50%',boxShadow: '0px 0px 50px 0px rgba(255, 255, 255, 0.2)'}} className='img-bola'/>
                        <Typography  fontSize={'1.2rem'} className='tchau' >
                            Além de jogos, site de apostas somente com as principais ligas profissionais do mundo, marketplace, entre
                            outras coisas.
                        </Typography>
                    </Container>
                
            </Container>
           
        </Container>
    )
}

