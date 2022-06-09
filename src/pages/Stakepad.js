import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import StakePadCard from 'components/StakePadCard'
import ViewAllPools from 'components/ViewAllPools'
import PoolsCardPhone from 'components/PoolsCardPhone'
// material
import {
  Box,
  Grid,
  Button,
} from '@mui/material';

import { getPools } from 'redux/slices/pools';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
// hooks
// components
import Page from 'components/Page';
import MHidden from 'components/@material-extend/MHidden'


// ----------------------------------------------------------------------

export default function Stakepad() {
  const { hash } = useLocation();

  const dispatch = useDispatch();
  const { account } = useActiveWeb3React();

  //Pagination part
  const [tab, setTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const network = useSelector((state) => state.network.chainId);

  //--------------------
  useEffect(() => {
    let unmounted = false;
    (async () => {
      setIsLoading(true);
      await dispatch(getPools(network, tab, account));
      if (!unmounted)
        setIsLoading(false);
    })();
    return () => unmounted = true;
  }, [account, dispatch, network, tab]);

  useEffect(() => {
    switch (hash) {
      case '#my-contributions':
        setTab(1);
        break;
      case '#my-alarms':
        setTab(2);
        break;
      case '#my-presales':
        setTab(3);
        break;
      default:
        setTab(0);
    }
  }, [hash]);
  return (
    <Page title="Megacapital" style={{backgroundColor:"#171819"}}>
      {/* <Container maxWidth='md'> */}
          <Grid >
          <MHidden width="mdDown">
            <Grid paddingLeft={'10%'} paddingRight={'10%'} paddingTop="30px">
              <Grid align="center" justifyContent="center">
                <Box component="a" href="#"><Button class="btn btn-light text-info mx-1">Stakepad</Button></Box>
                <button class="btn btn-dark text-info mx-1" onClick={() => window.scrollTo({ left: 0,top: 580, behavior: "smooth", })}>Staking Pools</button>
                <button class="btn btn-dark text-info mx-1" onClick={() => window.scrollTo({ left: 0,top: 1480, behavior: "smooth", })}>Farming Pools</button>
              </Grid>
              <Grid  align="center" justifyContent="center" marginTop="30px">
                <Box component="p" fontSize="34px" style={{color:"white"}}>
                  Earn high yield by staking mega capital token or join other<br/>attractive staking pools from IDO projects
                </Box>
              </Grid>
              <Grid marginTop="50px">
                <Grid container position="relative" display="flex" marginBottom="60px">
                  <Box fontSize="34px" sx={{position:'absolute', left:'10px', color:"#56C5FF"}}>Stakepad</Box>
                  <Box fontSize="24px" sx={{position:'absolute', right:'10px'}}><ViewAllPools to="#" title="View All Pools"/></Box>
                </Grid>
                <StakePadCard></StakePadCard>
                <StakePadCard></StakePadCard>
                <StakePadCard></StakePadCard>
              </Grid>
              <StakingPool></StakingPool>
              <FarmingPools></FarmingPools>
            </Grid>
          </MHidden>
          <MHidden width="mdUp">
            <Grid paddingLeft={'7%'} paddingRight={'7%'} paddingTop="10px">
              <Grid color="#56C5FF" textAlign="center" fontSize={20} marginBottom="20px">

                <Box component="button" width="90px" marginRight="10px" padding="5px" backgroundColor="#232323" color="#56C5FF" border="none" borderRadius={0.5} fontSize={12}
                onClick={() => window.scrollTo({ left: 0,top: 1280, behavior: "smooth", })}>Stakepad</Box>
                <Box component="button" width="90px" marginRight="10px" padding="5px" backgroundColor="#232323" color="#56C5FF" border="none" borderRadius={0.5} fontSize={12} 
                  onClick={() => window.scrollTo({ left: 0,top: 220, behavior: "smooth", })}>Staking Pools</Box>
                <Box component="button" width="90px" padding="5px" backgroundColor="#232323" color="#56C5FF" border="none" borderRadius={0.5} fontSize={12} 
                  onClick={() => window.scrollTo({ left: 0,top: 550, behavior: "smooth", })}>Farming Pools</Box>
              </Grid>
              <Grid align="center" textAlign="center" color="white">
                  Earn high yield by staking mega capital token or join other attractive staking pools from IDO projects
              </Grid>
              <StakingPool></StakingPool>
              <Grid marginTop="50px">
                <Grid container position="relative" display="flex" marginBottom="60px">
                  <Box fontSize="20px" sx={{position:'absolute', left:'10px', color:"#56C5FF"}}>Stakepad</Box>
                  <Box fontSize="16px" sx={{position:'absolute', right:'10px'}}><ViewAllPools to="#" title="View All Pools"/></Box>
                </Grid>
                <StakePadCard angle="up"></StakePadCard>
                <StakePadCard angle="down"></StakePadCard>
                <StakePadCard angle="down"></StakePadCard>
              </Grid>
            </Grid>
          </MHidden>
      {/* </Container> */}
        </Grid>
    </Page>
  );
}
function StakingPool(){
  return(
    <>
    <MHidden width="mdDown">
      <Grid marginTop="50px">
        <Grid container position="relative" marginBottom="60px">
          <Box fontSize="34px" sx={{position:'absolute', left:'10px', color:"#56C5FF"}}>Staking Pools</Box>
          <Box fontSize="24px" sx={{position:'absolute', right:'10px', color:'white'}}><ViewAllPools to="#" title="View All Pools"/></Box>
        </Grid>
        <PoolBox></PoolBox>
        <PoolBox></PoolBox>
        <PoolBox></PoolBox>
        <Grid container borderRadius={1} bgcolor={'#232323'} marginTop="20px" marginLeft="0px" columnSpacing={4} rowSpacing={2} width="100%">
          <Grid sm="6" item color="#56C5FF">your BUSD balance : 244.64</Grid>
          <Grid sm="6" item color="#56C5FF">your staked : 6,000</Grid>
          <Grid container item sm="6" display="flex" position="relative" height="60px">
            <Box component="input" padding="5px" width="100%" height="50px" placeholder='0.0' style={{backgroundColor:"rgba(255, 255, 255, 0.1)", border:"none", borderRadius:5}}></Box>
            <Box component="button" position="absolute" right="7px" top="20px" style={{backgroundColor:"#56C5FF", height:"70%", border:"none", borderRadius:6}} color="white" paddingLeft="20px" paddingRight="20px">MAX</Box>
          </Grid>
          <Grid container item sm="6" display="flex" position="relative" height="60px">
            <Box component="input" padding="5px" width="99%" height="50px" placeholder='0.0' style={{backgroundColor:"rgba(255, 255, 255, 0.1)", border:"none", borderRadius:5}}></Box>
            <Box component="button" position="absolute" right="17px" top="20px" style={{backgroundColor:"#56C5FF", height:"70%", border:"none", borderRadius:6}} color="white" paddingLeft="20px" paddingRight="20px">MAX</Box>
          </Grid>
          <Grid container item direction="row" marginTop="10px">
            <Button class="btn btn-info mx-1 px-4 text-light">STAKE</Button>
            <Button class="btn btn-outline-secondary mx-1 px-4 text-info">UNSTAKE</Button>
          </Grid>
          <Grid item>
            <Button class="btn btn-outline-secondary mx-1 px-4 mt-2 text-light" width="100px">HARVEST 43.66 MGV</Button>
            <Box marginTop="8px">Harvesting will reset the lock time</Box>
          </Grid>
          <Grid container item direction="row" marginTop="10px">
            <Grid item sm='2' ><Box color="white">DEPOSIT FEE</Box></Grid>
            <Grid item color="#56C5FF" sm='3.5' justifyContent="right" display="flex">None</Grid>
          </Grid>
          <Grid container item direction="row" marginTop="10px">
            <Grid sm='2'><Box color="white">WITHDRAW FEE</Box></Grid>
            <Grid sm='3.5' color="#56C5FF" justifyContent="right" display="flex"><Box>None</Box></Grid>
          </Grid>
          <Grid container item direction="row" marginTop="10px">
            <Grid sm='2'><Box color="white">PERFORMANCE FEE TIME</Box></Grid>
            <Grid color="#56C5FF" sm='3.5' justifyContent="right" display="flex"><Box>None</Box></Grid>
          </Grid>
          <Grid container item direction="row" marginTop="10px">
            <Grid sm='2'><Box color="white">LOCK TIME</Box></Grid>
            <Grid color="#56C5FF" sm='3.5' justifyContent="right" display="flex"><Box>30 Days</Box></Grid>
          </Grid>
          <Grid item color="#56C5FF" marginBottom="25px" marginTop="10px">Buy Token</Grid>
        </Grid>
      </Grid>
    </MHidden>
    <MHidden width="mdUp">
      <Grid marginTop="50px">
        <Grid container position="relative" marginBottom="60px">
          <Box fontSize="20px" sx={{position:'absolute', left:'10px', color:"#56C5FF"}}>Staking Pools</Box>
          <Box fontSize="16px" sx={{position:'absolute', right:'10px', color:'white'}}><ViewAllPools to="#" title="View All Pools"/></Box>
        </Grid>
        <PoolsCardPhone></PoolsCardPhone>
        <PoolsCardPhone></PoolsCardPhone>
        <PoolsCardPhone></PoolsCardPhone>
        <Grid container borderRadius={1} bgcolor={'#232323'} marginTop="20px" marginLeft="0px" columnSpacing={1} rowSpacing={2} width="100%" padding="0 7px">
          <Grid xs="12" item color="#56C5FF">your BUSD balance : 244.64</Grid>
          <Grid container item xs="12" display="flex" position="relative" height="60px">
            <Box component="input" padding="5px" width="98%" height="50px" placeholder='0.0' style={{backgroundColor:"rgba(255, 255, 255, 0.1)", border:"none", borderRadius:5}}></Box>
            <Box component="button" position="absolute" right="14px" top="20px" style={{backgroundColor:"#56C5FF", height:"70%", border:"none", borderRadius:6}} color="white" paddingLeft="20px" paddingRight="20px">MAX</Box>
          </Grid>
          <Grid xs="12" item color="#56C5FF">your staked : 6,000</Grid>
          <Grid container item xs="12" display="flex" position="relative" height="60px">
            <Box component="input" padding="5px" width="98%" height="50px" placeholder='0.0' style={{backgroundColor:"rgba(255, 255, 255, 0.1)", border:"none", borderRadius:5}}></Box>
            <Box component="button" position="absolute" right="14px" top="20px" style={{backgroundColor:"#56C5FF", height:"70%", border:"none", borderRadius:6}} color="white" paddingLeft="20px" paddingRight="20px">MAX</Box>
          </Grid>
          <Grid item xs={6}><Box component="button" padding="10px" backgroundColor="#56C5FF" width="100%" border="none" color="white" borderRadius={1} >STAKE</Box></Grid>
          <Grid item xs={6}><Box component="button" padding="10px" backgroundColor="rgb(255, 255, 255, 0)" width="100%" border="1px solid #56C5FF" color="#56C5FF" borderRadius={1} >UNSTAKE</Box></Grid>
          <Grid item xs={12}><Box component="button" padding="10px" backgroundColor="rgb(255, 255, 255, 0)" width="100%" border="1px solid #56C5FF" color="white" borderRadius={1} >HARVEST 44.36 SFEX</Box></Grid>
          <Grid item xs={12} justifyContent="center" display="flex">
            <Box marginTop="8px" textAlign="center" >Harvesting will reset the lock time</Box>
          </Grid>
          <Grid container item direction="row" marginTop="10px">
            <Grid item xs='6' ><Box color="white">DEPOSIT FEE</Box></Grid>
            <Grid item color="#56C5FF" xs='6' justifyContent="right" display="flex">None</Grid>
          </Grid>
          <Grid container item direction="row" marginTop="10px">
            <Grid xs='6'><Box color="white">WITHDRAW FEE</Box></Grid>
            <Grid xs='6' color="#56C5FF" justifyContent="right" display="flex"><Box>None</Box></Grid>
          </Grid>
          <Grid container item direction="row" marginTop="10px">
            <Grid xs='6'><Box color="white">PERFORMANCE FEE TIME</Box></Grid>
            <Grid color="#56C5FF" xs='6' justifyContent="right" display="flex"><Box>None</Box></Grid>
          </Grid>
          <Grid container item direction="row" marginTop="10px">
            <Grid xs='6'><Box color="white">LOCK TIME</Box></Grid>
            <Grid color="#56C5FF" xs='6' justifyContent="right" display="flex"><Box>30 Days</Box></Grid>
          </Grid>
          <Grid item xs={12} marginBottom="25px" marginTop="10px" justifyContent="center" display="flex">
            <Box component="button" border="none" color="#56C5FF" backgroundColor="rgb(255, 255, 255, 0)" >Buy Token</Box>
          </Grid>
        </Grid>
      </Grid>
    </MHidden>
    </>
  );
}
function PoolBox() {
  return (
    <Box borderRadius={1} sx={{ bgcolor: '#272727', p: '10px', marginBottom: '15px' }}>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <Box sx={{ display: 'flex', flexDirection: 'row', }}>
            <Box component="img" src="my_public/images/pool-logo.png" sx={{ width: '50px', marginRight: '10px' }} />
            <Box fontSize="20px" sx={{ marginTop: '10px', color:'white' }}>Megacapital</Box>
          </Box>
        </Grid>
        <Grid container item sm={8} display="flex" justifyContent="right" direction="row">
          <Grid item sx={{ marginRight: '20px' }}>
            <Box sx={{ fontSize: 15, color:'white' }}>Duration</Box>
            <Box sx={{ fontSize: 20 }} color="white" gutterBottom>
            1 Month
            </Box>
          </Grid>
          <Grid item sx={{ marginRight: '20px' }}>
            <Box sx={{ fontSize: 15, color:'white' }}>Staked</Box>
            <Box sx={{ fontSize: 20 }} color="white" gutterBottom>
              6,000
            </Box>
          </Grid>
          <Grid item sx={{ marginRight: '20px' }}>
            <Box sx={{ fontSize: 15, color:'white' }}>bonus</Box>
            <Box sx={{ fontSize: 20 }} color="white" gutterBottom>
            20%
            </Box>
          </Grid>
          <Grid item sx={{ marginRight: '20px' }}>
            <button class="btn btn-info text-light mt-2 mx-4">Discover</button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
function FarmingPools(){
  return(
    <Grid marginTop="50px">
      <Grid container position="relative" marginBottom="30px">
        <Box component="h4" class="text-info" sx={{position:'absolute', left:'10px'}}>Farming Pools</Box>
        <Box component="h4" sx={{position:'absolute', right:'10px'}}><ViewAllPools to="#" title="View All Pools"/></Box>
      </Grid>
      <StakePadCard></StakePadCard>
      <StakePadCard></StakePadCard>
      <StakePadCard></StakePadCard>
    </Grid>
  );
}