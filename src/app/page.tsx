'use client';
import  {Carousel}  from '@/Components/Carousel'
import Box from "@mui/material/Box";
import { Sobre } from '@/Components/Sobre';
import { Nav } from '@/Components/Nav';
import { Market } from '@/Components/Market';
import { What } from '@/Components/What';
import { Social } from '@/Components/Social';
import { Solucoes } from '@/Components/Solucoes';
import { Features } from '@/Components/Features';
import { Roadmap } from '@/Components/Roadmap';
import { Footer } from '@/Components/Footer';
import { Navbar } from '@/Components/Navbar';


export default function Home() {

  return (
    <main>
      <Box >
        <Box  >
          <Navbar/>
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
          <Carousel/>
        </Box>
        <Box>
            <Sobre/>
        </Box>
        <Box>
          <Market/>
        </Box>
        <Box>
          <What/>
        </Box>
        <Box>
          <Social/>
        </Box>
        <Box>
        <Solucoes/>
        </Box>
        <Box>
          <Features/>
        </Box>
        <Box>
          <Roadmap/>
        </Box>
        <Box>
          <Footer/>
        </Box>
      </Box>
    </main>
  )
}
