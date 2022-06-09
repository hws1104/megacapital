import {
    Box,
    Typography,
    Grid,
} from '@mui/material';
import { MHidden} from '../../components/@material-extend';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.min.css';
import Carousel from "react-simply-carousel";
// import 'swiper/swiper.scss'
import {useState} from 'react';
import ProjectCard from 'components/ProjectCard'
import MySwiper from './MySwiper'

export default function Projects(){
    let reactSwipeEl;
    const font_Family = 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
    return(
        <>
        <MHidden width="mdDown">
        <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"  sx={{ marginTop:'80px', FontFace: "Segoe UI", }} fontFamily={'Segoe UI'}>
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, borderRadius: 1,}}>
            <Box  component="img"  src={"my_public/images/h-2.png"}></Box>
          </Box>
          <Typography align='center'>
            <Box data-aos="zoom-in" fontFamily={font_Family} sx={{display:'flex', position:'relative', justifyContent:'center'}}>
              <h1 class="text-mute text-center fw-bold position-absolute start-50 translate-middle" style={{fontSize:120, top:'30px', left:'50%', color:"#232323", fontFamily:{font_Family}}}>PROJECTS</h1>
              <h2 class="text-light text-center position-absolute start-50 translate-middle-x" style={{top:'13px'}}>Upcoming Projects</h2>
            </Box>
          </Typography>
          <Grid container spacing={2} sx={{marginBottom:'20px'}}>
              <Grid container spacing={3} align='center' style={{paddingLeft:'25px', paddingRight:'15px'}} marginTop="100px">
                <Grid item xs={12} sm={2.4} lg={2.4} md={2.4}>
                  <ProjectCard></ProjectCard>
                </Grid>
                <Grid item xs={12} sm={2.4} lg={2.4} md={2.4}>
                  <ProjectCard></ProjectCard>
                </Grid>
                <Grid item xs={12} sm={2.4} lg={2.4} md={2.4}>
                  <ProjectCard></ProjectCard>
                </Grid>
                <Grid item xs={12} sm={2.4} lg={2.4} md={2.4}>
                  <ProjectCard></ProjectCard>
                </Grid>
                <Grid item xs={12} sm={2.4} lg={2.4} md={2.4}>
                  <ProjectCard></ProjectCard>
                </Grid>
              </Grid>
              {/* // </Stack> */}
            {/* )} */}
          </Grid>
          <Typography fontFamily={'Segoe UI'} fontSize={'25px'} align='center' sx={{ marginBottom: '5px', color : '#24B6E6' }}>
            <a href="#" style={{textDecoration:'none',  color:"#24B6E6"}}>View All</a>
          </Typography>
        </Box>
        </MHidden>
        
        <MHidden width="mdUp">
        <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"  sx={{ marginTop:'80px', FontFace: "Segoe UI", }} fontFamily={'Segoe UI'}>
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, borderRadius: 1,}}>
            <Box  component="img"  src={"my_public/images/h-2.png"}></Box>
          </Box>
          <Typography align='center'>
            <Box data-aos="zoom-in" fontFamily={font_Family} sx={{display:'flex', position:'relative', justifyContent:'center'}}>
              <MHidden width="mdUp">
              <h2 class="text-light text-center position-absolute start-50 translate-middle-x" style={{top:'13px',fontSize:18}}>Upcoming Projects</h2>
              </MHidden>
            </Box>
          </Typography>
          <Grid container spacing={2} sx={{marginBottom:'20px'}} marginTop="100px">
              {/* <Swiper> */}
              <MySwiper>
              </MySwiper>
                {/* </Swiper> */}
          </Grid>
          <Typography fontFamily={'Segoe UI'} fontSize={'25px'} align='center' sx={{ marginBottom: '5px', color : '#24B6E6' }}>
            <a href="#" style={{textDecoration:'none',  color:"#24B6E6"}}>View All</a>
          </Typography>
        </Box>
          </MHidden>
        </>
    );
}