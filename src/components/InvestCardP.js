
import {
    Box,
    Grid,
} from '@mui/material';
export default function InvestCard(props) {
  
    return (
      <>
      <Grid container item xs={12} backgroundColor="#232323" marginBottom="10px" borderRadius={1} paddingRight="10px">
        <Grid item xs={3.5} color="#F4FCFF" fontSize={14} alignItems="center"display="flex"> IDO, Nft</Grid>
        <Grid item xs={4.5} color="white" alignItems="center"> <Box component="img" src="my_public/images/logo.png" width="30%" height="28px"/></Grid>
        <Grid item xs={4} color="white" alignItems="center" justifyContent="right" display="flex" fontSize={14}> <Box backgroundColor="#303030" borderRadius={0.5} width="80%">{props.info}</Box></Grid>
        <Grid item xs={3.5} color="white" alignItems="center" fontSize={15} display="flex"> ...MGV</Grid>
        <Grid item xs={4.5} color="white" alignItems="center"  fontSize={16}> {props.name}</Grid>
        <Grid item xs={4} color="white" alignItems="center"  justifyContent="right" display="flex" fontSize={14}> Allocation X {props.num}</Grid>
      </Grid>
      </>
    );
  }