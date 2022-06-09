import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Fade,
  useScrollTrigger,
} from '@mui/material';
import MHidden from 'components/@material-extend/MHidden'

export default function ProjectName(props) {

  return (
    <>
      <MHidden width="mdDown">
        <Box style={{backgroundColor:'#232323', textDecoration:"none"}} borderRadius={1.5} position="relative" marginLeft="5px">
            <Box>
                <Box display="flex" position="relative" component="img" src="my_public/images/projects (2).png" width="100%" height="170px"/>
                <Box position="absolute" top="3%" left="3%" borderRadius={0.5} color="white" bgcolor="#56c5ff" fontSize="12px" padding="5px">22/06/2022</Box>
                <Box position="absolute" top="3%" right="3%" borderRadius={0.5} color="white" bgcolor="#56c5ff" fontSize="12px" padding="5px">NFT Deals</Box>
            </Box>
            <Box paddingLeft={'13%'} paddingRight={'13%'} paddingBottom="12%" justifyContent="center">
              <Typography marginTop="15px" align="center" variant="body2" fontSize="20px" fontFamily={'Segoe UI'} color="#24B6E6">
              Project Name
              </Typography>
              <Typography variant="body2" align="center" fontSize="13px" color="white"  fontFamily={'Segoe UI'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography variant="body2" align="center" fontSize="16px"  fontFamily={'Segoe UI'} marginTop="15px" color="#56C5FF">
                <a href="/project" style={{color:"#56C5FF"}}>learn more</a><br/>
                {/* <i class="fa-solid fa-arrow-right text-info"></i> */}
              </Typography>
              <Typography display="flex" justifyContent="center">
                <Box component="img" width="70px" height="70px" src="my_public/images/Ellipse.png"/>
              </Typography>
            </Box>
        </Box>
      </MHidden>
      <MHidden width="mdUp">
        <Grid style={{backgroundColor:'#232323', textDecoration:"none"}} borderRadius={1.5} position="relative" marginLeft="40px" marginBottom="30px">
            <Box>
                <Box display="flex" position="relative" component="img" src="my_public/images/projects (2).png" width="100%" height="170px"/>
                <Box position="absolute" top="3%" left="3%" borderRadius={0.5} color="white" bgcolor="#56c5ff" fontSize="12px" padding="5px">22/06/2022</Box>
                <Box position="absolute" top="3%" right="3%" borderRadius={0.5} color="white" bgcolor="#56c5ff" fontSize="12px" padding="5px">NFT Deals</Box>
            </Box>
            <Box paddingLeft={'13%'} paddingRight={'13%'} paddingBottom="12%" justifyContent="center">
              <Typography marginTop="15px" align="center" variant="body2" fontSize="20px" fontFamily={'Segoe UI'} color="#24B6E6">
              Project Name
              </Typography>
              <Typography variant="body2" align="center" fontSize="13px" color="white"  fontFamily={'Segoe UI'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography variant="body2" align="center" fontSize="16px"  fontFamily={'Segoe UI'} marginTop="15px" color="#56C5FF">
                <a href="/project" style={{color:"#56C5FF"}}>learn more</a><br/>
                {/* <i class="fa-solid fa-arrow-right text-info"></i> */}
              </Typography>
              <Typography display="flex" justifyContent="center" padding="0 80px">
                <Box component="img" width="70px" height="70px" src="my_public/images/Ellipse.png"/>
              </Typography>
            </Box>
        </Grid>
      </MHidden>
    </>
  );
}