'use client';
import { Typography } from '@mui/material';
import '../app/global.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image'
import brasil from '../app/imagens/brasil.png'
import argentina from '../app/imagens/argentina.png'
import espanha from '../app/imagens/espanha.png'
import italia from '../app/imagens/italia.png'
import trofeu from '../app/imagens/trofeu.png'

export function What(){
    return(
        <Container id="what" maxWidth={false} style={{ display:'flex', paddingTop:'30px',textAlign:'center', boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.9), 0 0 100px rgba(0, 0, 0, 0.9)',paddingBottom:'50px' }}>
            <Container className='pad'>
                <Typography variant='h3' textTransform={'uppercase'} padding={5} className='what-h3'>
                    Oque fazemos
                </Typography>
               
                    <Typography fontSize={'1.2rem'} className='wtext' >
                        A Angulo trabalha em todas as áreas do esporte, desde representação de atletas profissionais e de base,
                        até aplicativo esportivo, conteúdo próprio de notícias a ligas esportivas de base, na qual organiza os
                        principais eventos nas divisões de base.
                    </Typography>
                    <Typography fontSize={'1.2rem'} className='wtext' >
                        Temos as principais ligas de divisões de base, onde jogam atletas de 6 a 23 anos como Ligas estaduais:
                        Liga Rio de Janeiro, Liga São Paulo, Liga Buenos Aires…
                        Continentais como: Liga América del Sur que é realizada no CT do Racing em Avellaneda em Buenos
                        Aires-Argentina e Copa Europa que é realizada em Roma.
                    </Typography>
                
                <Box display={'flex'} justifyContent={'center'} >
                    <Image src={italia} alt="Logo angulo" style={{animation: 'pulse 5s ease-in-out infinite', width:'120px',}} className='bandeira'/>
                    <Image src={brasil} alt="Logo angulo" style={{animation: 'pulse 5s ease-in-out infinite', width:'120px'}} className='bandeira'/>
                    <Image src={argentina} alt="Logo angulo" style={{animation: 'pulse 5s ease-in-out infinite', width:'120px'}} className='bandeira'/>
                </Box>
            </Container>
            <Container style={{display:'flex', alignItems:'center'}} className='colu'>
                <Image src={trofeu} alt="Logo angulo" style={{padding:'20px',animation:' swing 5s infinite' }} className='trof' />
                <Typography fontSize={'1.5rem'} fontStyle={'italic'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} className='wtext'>
                    A partir de dezembro deste ano: Copa Mundial que será realizada em Madrid.
                    <Image src={espanha} alt="Logo angulo" style={{animation: 'pulse 5s ease-in-out infinite', width:'200px'}} className='bandeira'/>
                </Typography>
            </Container>
        </Container>
    )
}
