'use client';
import { Typography } from '@mui/material';
import '../app/global.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image'

export function Social (){
    return (
        <Container id="social" className='favela' maxWidth={false} style={{ display: 'flex', justifyContent: 'flex-end', boxShadow: 'inset 0 0 100px rgba(255, 255, 255, 0.2)' }}>
            <Container maxWidth={false} style={{width:'50%', margin:'0px'}}  >
                    <Container maxWidth={false} style={{paddingTop:'100px', paddingBottom:'50px'}} >
                        <Typography variant='h2' textTransform={'uppercase'} textAlign={'center'} fontWeight={'normal'} >
                            Projetos Sociais
                        </Typography >
                    </Container>
                    <Container maxWidth={false}>
                        <Typography fontSize={'1.3rem'} textAlign={'center'} lineHeight={'2'}>
                            Hoje, muitos atletas não têm condições de correr atrás dos seus sonhos devido ao caro mercado esportivo,
                            sendo assim, a Angulo dá bolsas a alguns atletas de comunidades e também criou a Tecno Favela, que
                            ensina tecnologia a moradores de comunidades do Rio de Janeiro e São Paulo desde 2020.
                            Inclusive, a Tecno Favela hoje está presente em algumas escolas públicas do Rio de Janeiro no serviço
                            Tecno Carioca em parceria com a prefeitura do Rio de Janeiro.
                        </Typography>
                    </Container>
            </Container>
        </Container>
    )
}