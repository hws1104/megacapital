import { useState, useEffect } from 'react';
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import LaunchCard from 'components/LaunchCard'
import MyProjectCard from 'components/MyProjectCard'
import PhoneProjectCard from 'components/PhoneProjectCard'
import {Modal} from '@mui/material'
// material
import {
  Box,
  Grid,
} from '@mui/material';

import { getPools } from 'redux/slices/pools';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
// components
import Page from 'components/Page';
import MyCalendar from './MyCalendar';
import { MHidden} from '../components/@material-extend';


// ----------------------------------------------------------------------

export default function IdoDeals(){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            <MHidden width="mdDown">
            <Grid paddingLeft={'14%'} paddingRight={'14%'} paddingTop="30px">
              <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box margin="150px 14% 0px 14%" style={{backgroundColor:"rgba(35, 35, 35, 0.5)", blurRadius:12}}> 
                  <MyCalendar/>
                </Box>
              </Modal>
                <Grid container direction="row" align="center" justifyContent={'center'}>
                    <Box item component="a" href="/idodeals" class="btn btn-light text-info mx-1">IDO Deals</Box>
                    <Box item component="a" href="/vcdeals" class="btn btn-dark text-info mx-1">VC Deals</Box>
                    <Box item component="a" href="/inodeals" class="btn btn-dark text-info mx-1">INO Deals</Box>
                    <Box item component="button"  onClick={handleOpen} class="btn btn-dark text-info mx-1">
                        <i class="fa-solid fa-calendar-days text-info mx-1"></i>Calendar
                    </Box>
                    {/* <Box item component="a" href="/phonecalendar" class="btn btn-dark text-info mx-1">
                        <i class="fa-solid fa-calendar-days text-info mx-1"></i>Calendar
                    </Box> */}
                </Grid>
                <Box component="h2" marginTop="20px" display="flex" align="center" justifyContent="center" color="#00BFFF">PROJECTS</Box>
                <Grid align="center" justifyContent={'center'}><Box component="img" marginTop="30px" src="my_public/images/projects.png"></Box></Grid>
                <Grid container direction="row" marginTop="90px" marginBottom="50px">
                    <Grid item md="8.5"></Grid>
                    <Grid item md="3.5" position="relative" display="flex">
                        <Box component="input" placeholder="Search..." borderRadius={1} style={{ paddingLeft:"10px", height:"50px", width:"100%", border:"none", backgroundColor:"rgba(255, 255, 255, 0.1)"}}/>
                        <Box component="button" border="none" borderRadius={1} height="40px" width="90px" position="absolute" right="10px" top="5px" style={{ backgroundColor:"#56C5FF", color:"white" }}>Search</Box>

                    </Grid>
                </Grid>
                <Box component="h2" color="#00BFFF" marginTop="20px">Next To Launch</Box>
                <Grid container spacing={2}>
                    <LaunchCard></LaunchCard>
                    <LaunchCard></LaunchCard>
                    <LaunchCard></LaunchCard>
                    <LaunchCard></LaunchCard>
                    <LaunchCard></LaunchCard>
                </Grid>
                <Grid marginTop="50px" dispay="flex" position="relative" container direction="row">
                    <Box item component="h4" position="relative" color="#56C5FF" fontSize={34}>Completed Projects</Box>
                    <Box item component="p" position="absolute" right="0px" top="10px" fontSize={24} color="white">View All Pools</Box>
                </Grid>
                <MyProjectCard></MyProjectCard>
                <MyProjectCard></MyProjectCard>
                <MyProjectCard></MyProjectCard>
                <MyProjectCard></MyProjectCard>
            </Grid>
            </MHidden>
            
            <MHidden width="mdUp">
            <Grid paddingLeft={'5%'} paddingRight={'5%'} paddingTop="30px">
                <Grid container direction="row" align="center" justifyContent={'center'}>
                    <Box item component="a" style={{textDecoration:"none"}} width="90px" marginRight="10px" padding="5px" backgroundColor="#232323" color="#56C5FF" border="none" borderRadius={0.5} fontSize={12}>IDO Deals</Box>
                    <Box item component="a" style={{textDecoration:"none"}} href="/vcdeals" width="90px" marginRight="10px" padding="5px" backgroundColor="#232323" color="#56C5FF" border="none" borderRadius={0.5} fontSize={12}>VC Deals</Box>
                    <Box item component="a" style={{textDecoration:"none"}} href="/inodeals" width="90px" marginRight="10px" padding="5px" backgroundColor="#232323" color="#56C5FF" border="none" borderRadius={0.5} fontSize={12}>INO Deals</Box>
                    {/* <Box item component="button"  onClick={handleOpen} class="btn btn-dark text-info mx-1">
                        <i class="fa-solid fa-calendar-days text-info mx-1"></i>Calendar
                    </Box> */}
                </Grid>
                <Box component="h2" marginTop="20px" display="flex" align="center" justifyContent="center" color="#00BFFF">PROJECTS</Box>
                <Grid align="center" justifyContent={'center'}><Box component="img" marginTop="30px" src="my_public/images/projects.png"></Box></Grid>
                {/* <Grid container direction="row" marginTop="90px" marginBottom="50px">
                    <Grid item md="8.5"></Grid>
                    <Grid item md="3.5" position="relative" display="flex">
                        <Box component="input" placeholder="Search..." style={{ paddingLeft:"10px", borderRadius:2, height:"50px", width:"100%", border:"none", backgroundColor:"rgba(255, 255, 255, 0.1)"}}/>
                        <Box component="button" border="none" borderRadius={1} height="40px" width="90px" position="absolute" right="10px" top="5px" style={{ backgroundColor:"#56C5FF", color:"white" }}>Search</Box>

                    </Grid>
                </Grid> */}
                <Grid container marginBottom="20px">
                  <Grid item xs={8} component="h2" color="#00BFFF" fontSize={18} marginTop="20px">Next To Launch</Grid>
                  <Grid item xs={2} marginTop="15px">
                    <a href="/phonecalendar"><Box component="button" href="/phonecalendar" padding="10px" backgroundColor="rgba(255, 255, 255, 0.1)" border="none" borderRadius={0.5}>
                      <Box component="img" src="my_public/images/Calendar.png"/>
                    </Box></a>
                  </Grid>
                  <Grid item xs={2} marginTop="15px">
                    <Box component="button" padding="10px" backgroundColor="rgba(255, 255, 255, 0.1)" border="none" borderRadius={0.5}>
                      <Box component="img" src="my_public/images/Search.png"/>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <LaunchCard></LaunchCard>
                    <LaunchCard></LaunchCard>
                    <LaunchCard></LaunchCard>
                    <LaunchCard></LaunchCard>
                    <LaunchCard></LaunchCard>
                </Grid>
                <Grid marginTop="30px" display="flex" justifyContent="center">
                    <Box item component="p" fontSize={16} color="white">View All Pools</Box>
                </Grid>
                <PhoneProjectCard angle="up"></PhoneProjectCard>
                <PhoneProjectCard angle="down"></PhoneProjectCard>
                <PhoneProjectCard angle="down"></PhoneProjectCard>
                <PhoneProjectCard angle="down"></PhoneProjectCard>
            </Grid>
            </MHidden>
      {/* </Container> */}
    </Page>
  );
}