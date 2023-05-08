'use client';
import { Container, Typography } from '@mui/material';
import '../app/global.css'
import Box from '@mui/material/Box';


export function Roadmap(){
    return(
        <Container style={{textAlign:'center', height:'90vh'}}>
            <Container style={{paddingTop:'100px'}} className='rotp'>
                <Typography textTransform={'uppercase'} variant='h2' className='rot'>
                    Roteiro
                </Typography>
                <Typography  variant='h3' fontWeight={'normal'} className='txtroad'>
                    2023
                </Typography>
                
                <Typography className='txtroad'>
                    Abril: Trazer parcerias oficiais com clubes de todo o mundo já parceiros da Angulo e licenciamento para jogos
                </Typography>
                <Typography className='txtroad'>8 a 19 de maio: Pré-Venda</Typography>
                <Typography className='txtroad'>21 de maio: ICO</Typography>
                <Typography className='txtroad'>22 de maio: Atualização da rede AnguloApp e Site</Typography>
                <Typography className='txtroad'>Julho: Lançamento Angulo Podcast e Angulo Insider</Typography>
                <Typography className='txtroad'>
                    Agosto: Estreia do SAMBA FC, equipe social de base da Angulo nas comunidades
                    da Rocinha e Guarabu/Dendê, ambas no Rio de Janeiro, Brasil.
                </Typography>
                <Typography className='txtroad'>Agosto: Criação de websérie do Samba FC no Youtube</Typography>
                <Typography className='txtroad'>
                    Setembro: Estreia do Tango FC, equipe Social da Angulo em Buenos Aires, Argentina.
                    Setembro: Estreia do Angulo Manager
                </Typography>
                <Typography className='txtroad'>Outubro: Criação da websérie do Tango FC no Youtube.</Typography>
                <Typography className='txtroad'>Novembro: Estreia do Angulo Manager 2D</Typography>
                <Typography className='txtroad'>Dezembro: Angulo Manager Modo Online</Typography>
                <Typography variant='h3' className='txtroad'>
                    2024
                </Typography>
                <Typography className='txtroad'>Março: Angulo Fantasy</Typography>
                <Typography className='txtroad'>Julho: Angulo Store</Typography>
                <Typography className='txtroad'>Setembro: Marketplace da Angulo Store</Typography>
                <Typography className='txtroad'>Novembro: Lançamento oficial da Lions</Typography>
                <Typography className='txtroad' variant='h3'>
                    2025
                </Typography>
                <Typography className='txtroad'>Fevereiro: Angulo Bet</Typography>
                <Typography className='txtroad'>Julho: Angulo Football League</Typography>
                <Typography variant='h5' className='txtroad'>
                    Esteja com os maiores e em todas as partes do esporte
                </Typography>
            </Container>

        </Container>
    )
}