'use client';
import { Container, Typography } from '@mui/material';
import '../app/global.css'
import Box from '@mui/material/Box';


export function Roadmap(){
    return(
        <Container style={{textAlign:'center', height:'90vh'}}>
            <Container style={{paddingTop:'100px'}}>
                <Typography textTransform={'uppercase'} variant='h2'>
                    Roteiro
                </Typography>
                <Typography  variant='h3' fontWeight={'normal'}>
                    2023
                </Typography>
                
                <Typography>
                    Abril: Trazer parcerias oficiais com clubes de todo o mundo já parceiros da Angulo e licenciamento para jogos
                </Typography>
                <Typography>8 a 19 de maio: Pré-Venda</Typography>
                <Typography>21 de maio: ICO</Typography>
                <Typography>22 de maio: Atualização da rede AnguloApp e Site</Typography>
                <Typography>Julho: Lançamento Angulo Podcast e Angulo Insider</Typography>
                <Typography>
                    Agosto: Estreia do SAMBA FC, equipe social de base da Angulo nas comunidades
                    da Rocinha e Guarabu/Dendê, ambas no Rio de Janeiro, Brasil.
                </Typography>
                <Typography>Agosto: Criação de websérie do Samba FC no Youtube</Typography>
                <Typography>
                    Setembro: Estreia do Tango FC, equipe Social da Angulo em Buenos Aires, Argentina.
                    Setembro: Estreia do Angulo Manager
                </Typography>
                <Typography>Outubro: Criação da websérie do Tango FC no Youtube.</Typography>
                <Typography>Novembro: Estreia do Angulo Manager 2D</Typography>
                <Typography>Dezembro: Angulo Manager Modo Online</Typography>
                <Typography variant='h3'>
                    2024
                </Typography>
                <Typography>Março: Angulo Fantasy</Typography>
                <Typography>Julho: Angulo Store</Typography>
                <Typography>Setembro: Marketplace da Angulo Store</Typography>
                <Typography>Novembro: Lançamento oficial da Lions</Typography>
                <Typography variant='h3'>
                    2025
                </Typography>
                <Typography>Fevereiro: Angulo Bet</Typography>
                <Typography>Julho: Angulo Football League</Typography>
                <Typography variant='h5'>
                    Esteja com os maiores e em todas as partes do esporte
                </Typography>
            </Container>

        </Container>
    )
}