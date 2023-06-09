'use client';
import '../app/global.css'
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Image from 'next/image';
import fut1 from '../app/imagens/fut1.jpeg'
import fut2 from '../app/imagens/fut2.jpeg'
import fut3 from '../app/imagens/fut3.jpeg'
import fut6 from '../app/imagens/fut6.jpeg'
import fut5 from '../app/imagens/fut5.jpeg'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { autoPlay} from 'react-swipeable-views-utils';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export function Carousel(){
    const [activeIndex, setActiveIndex] = useState(0);
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
   
    const handleChangeIndex = (index:any) => {
        setActiveIndex(index);
    };
    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 4 ? 0 : prevIndex + 1
        );
    };
    
    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? 4 : prevIndex - 1
        );
    };
 
    return(
        <Container maxWidth={false} style={{ padding:'50px'}} className='cont-fundo' >
            <Container className='slide' style={{ width: '65%',maxWidth: '100%',display:'flex',alignItems:'center'}} >
                <Box className='boximg' >
                    <AutoPlaySwipeableViews index={activeIndex} onChangeIndex={handleChangeIndex} interval={5000} className='cont-slide '>
                        <Image src={fut1} className='imgs' alt="Img angulo" style={{ width: '100%', height: '75vh', objectFit: 'cover',borderRadius:'10px' , border: '3px solid white' }}/>
                        <Image src={fut2} className='imgs' alt="Img angulo" style={{ width: '100%', height: '75vh', objectFit: 'cover',borderRadius:'10px' , border: '3px solid white'}}/>
                        <Image src={fut3} className='imgs' alt="Img angulo" style={{ width: '100%', height: '75vh', objectFit: 'cover',borderRadius:'10px', border: '3px solid white' }}/>
                        <Image src={fut6} className='imgs' alt="Img angulo" style={{ width: '100%', height: '75vh', objectFit: 'cover',borderRadius:'10px' , border: '3px solid white'}}/>
                        <Image src={fut5} className='imgs' alt="Img angulo" style={{ width: '100%', height: '75vh', objectFit: 'cover',borderRadius:'10px' , border: '3px solid white'}}/>
                    </AutoPlaySwipeableViews>
                </Box> 
                <Box >
                    <ArrowBackIosRoundedIcon className='seta' sx={{position: 'absolute',left: '22%',fontSize:'3rem',  cursor: 'pointer', zindex:'1','&:hover': {transition: 'transform 0.5s ease',transform: 'scale(1.3)'} }}
                    onClick={handlePrev}  />
                    <ArrowForwardIosRoundedIcon className='seta'  sx={{ position: 'absolute' , right: '22%',fontSize:'3rem',  cursor: 'pointer', zindex:'1','&:hover': {transition: 'transform 0.5s ease',transform: 'scale(1.3)'}, }}
                    onClick={handleNext} />
                </Box>
            </Container>
        </Container>
             
    );
    
}
