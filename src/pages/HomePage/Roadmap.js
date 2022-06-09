import {
    Box,
    Typography,
    Grid,
} from '@mui/material';
import { MHidden} from '../../components/@material-extend';

export default function Roadmap(){
  const font_Family = 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
  return(
        <>
        <MHidden width="mdDown">
        <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"  sx={{ marginTop: '20px', marginBottom: '20px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, borderRadius: 1,}}>
            <Box  component="img"  src={"my_public/images/h-6.png"}></Box>
          </Box>
          <Typography fontFamily={'Segoe UI'} align='center' sx={{ marginBottom: '35px' }}>
            <Box data-aos="zoom-in" fontFamily={font_Family} sx={{display:'flex', position:'relative', justifyContent:'center'}}>
              <MHidden width="mdDown">
                <h1 class="text-mute text-center fw-bold position-absolute start-50 translate-middle" style={{fontSize:120, top:'30px', left:'50%', color:"#232323", fontFamily:{font_Family}}}>MAP</h1>
              </MHidden>
              <h2 class="text-light text-center position-absolute start-50 translate-middle-x" style={{top:'13px',fontFamily:{font_Family}}}>Roadmap</h2>
            </Box>
          </Typography>
          <Box  style={{marginTop:'150px'}}>
          <div id="one" class="animate corner m-auto">
            <div class="road-map">  
                <div class="animate road-map-text text-light">
                    <h4>Q2</h4>
                    <p>2022</p>
                </div>

              <a href="#"><i class="fa-solid fa-play text-light"></i></a> 
                <div class="road-map-text text-light">
                    <h4>Q3</h4>
                    <p>2022</p>
                </div>
              <a href="#"><i class="fa-solid fa-play text-light"></i><i class="fa-solid fa-play text-light"></i></a> 
                <div class="road-map-text text-light">
                    <h4>Q4</h4>
                    <p>2022</p>
                </div>
              <a href="#"><i class="fa-solid fa-play text-light"></i><i class="fa-solid fa-play text-light"></i><i class="fa-solid fa-play text-light"></i></a> 
            </div>
        </div>
        <Grid container paddingLeft="20%">
            <Grid item sm={3.1} paddingTop="7%" borderLeft="1px solid white" paddingLeft="3px">
              <p style={{color:'white'}}>Marketing And Media</p>
              <p style={{color:'white'}}>Private Sale</p>
              <p style={{color:'white'}}>IDO/ Public Sale</p>
              <p style={{color:'white'}}>Contract Audits</p>
              <p style={{color:'white'}}>Token Lunch</p>
              <p style={{color:'white'}}>Pancakeswap Listing</p>
            </Grid>

            <Grid item sm={3.5} borderLeft="1px solid white" position="relative" paddingLeft="3px">
              <Box position="absolute" bottom="1px">
                <p style={{color:'white'}}>First IDO Launch</p>
                <p style={{color:'white'}}>First Seed Sale Launch</p>
                <p style={{color:'white'}}>First Net Launch</p>
                <p style={{color:'white'}}>DAO Governance</p>
                </Box>
            </Grid>
            <Grid item sm={3} borderLeft="1px solid white" position="relative" paddingLeft="3px">
              <Box position="absolute" bottom="1px">
                <p style={{color:'white'}}>Integration Of SOLANA</p>
                <p style={{color:'white'}}>Integration Of CARDANO</p>
                <p style={{color:'white'}}>Extra Farms</p>
              </Box>
            </Grid>
        </Grid>
        </Box>
        </Box>
        </MHidden>
        <MHidden width="mdUp">
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, borderRadius: 1,}}>
            <Box  component="img"  src={"my_public/images/h-6.png"}></Box>
          </Box>
          <Typography fontFamily={'Segoe UI'} align='center' sx={{ marginBottom: '35px' }}>
            <Box data-aos="zoom-in" fontSize={20} fontFamily={font_Family} sx={{display:'flex', position:'relative', justifyContent:'center'}}>
              Roadmap              
            </Box>
          </Typography>
          <Grid paddingLeft="8%" paddingRight="8%">
            <Box width="100%" height="270px" position="relative" display="flex" backgroundColor="#232323" borderRadius={1}>
              <Box component="img" width="100%" src="my_public/images/road1.png"></Box>
              <Box position="absolute" width="100%" height="150px">
                <Grid container columnSpacing={2}>
                  <Grid xs={12} item justifyContent="center" display="flex" fontSize={18} color="#56C5FF">Q2-2022</Grid>
                  <Grid xs={12} item color="white" justifyContent="center" display="flex" marginTop="9px">Marketing and Media</Grid>
                  <Grid xs={12} item color="white" justifyContent="center" display="flex" marginTop="9px">Seed Sale</Grid>
                  <Grid xs={12} item color="white" justifyContent="center" display="flex" marginTop="9px">Private Sale</Grid>
                  <Grid xs={12} item color="white" justifyContent="center" display="flex" marginTop="9px">IDO/Public Sale</Grid>
                  <Grid xs={12} item color="white" justifyContent="center" display="flex" marginTop="9px">Token Launch</Grid>
                  <Grid xs={12} item color="white" justifyContent="center" display="flex" marginTop="9px">Pancake swap Listing</Grid>
                  <Grid xs={12} item color="white" justifyContent="center" display="flex" marginTop="9px">Contract Audits</Grid>
              </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid display="flex" justifyContent="center">
            <Box component="img" height="30px" width="2%" src="my_public/images/Road_Stick.png"/>
          </Grid>
          <Grid paddingLeft="8%" paddingRight="8%">
            <Box width="100%" height="250px" position="relative" display="flex" backgroundColor="#232323" borderRadius={1}>
              <Box component="img" width="100%" src="my_public/images/road2.png"></Box>
              <Box position="absolute" width="100%" height="150px">
                <Grid container columnSpacing={2}>
                  <Grid xs={12} item justifyContent="center" display="flex" fontSize={18} color="#56C5FF">Q3-2022</Grid>
                  <Grid xs={12} item color="white" justifyContent="center" display="flex" marginTop="25px">First IDO launch</Grid>
                  <Grid xs={12} item color="white" justifyContent="center" display="flex" marginTop="25px">First VC DEALS launch</Grid>
                  <Grid xs={12} item color="white" justifyContent="center" display="flex" marginTop="25px">First NFT launchPAD</Grid>
                  <Grid xs={12} item color="white" justifyContent="center" display="flex" marginTop="25px">Dao Governance</Grid>
              </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid display="flex" justifyContent="center">
            <Box component="img" height="30px" width="2%" src="my_public/images/Road_Stick.png"/>
          </Grid>
          <Grid paddingLeft="8%" paddingRight="8%">
            <Box width="100%" height="250px" position="relative" display="flex" backgroundColor="#232323" borderRadius={1}>
              <Box component="img" width="100%" src="my_public/images/road3.png"></Box>
              <Box position="absolute" width="100%" height="150px">
                <Grid container columnSpacing={2}>
                  <Grid xs={12} item justifyContent="center" display="flex" fontSize={18} color="#56C5FF">Q4-2022</Grid>
                  <Grid xs={12} color="white" item justifyContent="center" display="flex" marginTop="35px">Integration of SOLANA</Grid>
                  <Grid xs={12} color="white" item justifyContent="center" display="flex" marginTop="35px">Integration of CARDANO</Grid>
                  <Grid xs={12} color="white" item justifyContent="center" display="flex" marginTop="35px">Extra Farms</Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </MHidden>
        </>
    );
}