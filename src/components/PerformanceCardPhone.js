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
export default function PerfofomanceCardPhone() {
    return (
        <Grid container item sm={12} marginLeft="13px" marginBottom="15px" direction="row" border='1px solid #56C5FF' borderRadius={1} backgroundColor='#272727' style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
          <Grid item sm={6} marginRight="15px">
            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
              <Box component="img" src="img/icon1.png" sx={{ width: '30px', marginRight: '10px', marginTop:"5px" }} />
              <Box fontFamily={'Arial'} marginTop="10px" sx={{ fontSize: 12}} color="white">Project Name</Box>
            </Box>
          </Grid>
          <Grid item sm={3} marginRight="14px">
            <Typography fontFamily={'Arial'} sx={{ fontSize: 11}} color="white">Total Raise</Typography>
            <Typography fontFamily={'Arial'} sx={{ fontSize: 16, color:"#00BFFF" }} gutterBottom>
              $2356
            </Typography>
          </Grid>
          <Grid item sm={3} marginRight="14px">
            <Typography fontFamily={'Arial'} sx={{ fontSize: 11}} color="white">ROI(ATH)</Typography>
            <Typography fontFamily={'Arial'} sx={{ fontSize: 16, color:"#13BF00" }} gutterBottom>
              71.00x
            </Typography>
          </Grid>
          <Grid item sm={3} marginRight="14px" justifyContent="right">
            <Typography fontFamily={'Arial'} sx={{ fontSize: 11}} color="white">Token Price</Typography>
            <Typography fontFamily={'Arial'} sx={{ fontSize: 16, color:"#00BFFF" }} gutterBottom>
              $0.08
            </Typography>
          </Grid>
        </Grid>
    );
  }