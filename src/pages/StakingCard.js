import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
// material
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Divider
} from '@mui/material';

import useActiveWeb3React from 'hooks/useActiveWeb3React';
// components
import Page from 'components/Page';
import { useTokenContract, useStakingContract } from '../hooks/useContract';

// ----------------------------------------------------------------------

export default function Stakepad() {

  const dispatch = useDispatch();
  const { account } = useActiveWeb3React();
  const [stakingtoken_balance, setStakingtokenBalance] = useState(0);
  const [rewardtoken_balance, setRewardtokenBalance] = useState(0);
  const [stakingamount, setStakingAmount] = useState(0);
  const [unstakingamount, setUnstakingAmount] = useState(0);
  const [rewardtokenaddress, setRewardTokenAddress] = useState('');
  const [staketokenaddress, setStakeTokenAddress] = useState('');
  //Pagination part
  const [isLoading, setIsLoading] = useState(true);

  const network = useSelector((state) => state.network.chainId);
  const stakingContract = useStakingContract();
  const stakingTokenContract = useTokenContract('0x92E37eF4e20F9CFc28fb747C050CbfCFBF2Ee911');
  const rewardTokenContract = useTokenContract('0x0d40De1c494278252060bb65bA61AD00EDF78d58');
  //--------------------
  useEffect(() => {
    let unmounted = false;
    (async () => {
      setIsLoading(true);
      if (!unmounted)
        setIsLoading(false);
      try {
        const _rewardtokenaddress = await stakingContract.rewardsToken();
        setRewardTokenAddress(_rewardtokenaddress)

        const _staketokenaddress = await stakingContract.stakingToken();
        setStakeTokenAddress(_staketokenaddress)

        const symbol = await stakingTokenContract.symbol();
        console.log(symbol);
        const _balance = await stakingTokenContract.balanceOf(account);
        setStakingtokenBalance(_balance.toString());

        const _rewardbalance = await rewardTokenContract.balanceOf(account);
        setRewardtokenBalance(_rewardbalance.toString());
      } catch (err) {
        console.log('error:', err);
      }

    })();
    return () => unmounted = true;
  }, [account, dispatch, network, stakingContract, rewardTokenContract, stakingTokenContract]);

  const handleMaxButton = async (e) => {
    setStakingAmount(stakingtoken_balance);
  };

  const handleStakeButton = async (e) => {
    const tx = await stakingTokenContract.approve(stakingContract.address, stakingtoken_balance);
    await tx.wait();
    const tx1 = await stakingContract.stake(stakingamount);
    await tx1.wait();
  };

  const handleClaimButton = async (e) => {
    console.log('claiming')
    const tx = await stakingContract.getReward();
    await tx.wait();
  };

  const handleUnstakeButton = async (e) => {
    const tx = await stakingContract.withdraw(unstakingamount);
    await tx.wait();
  }
  return (
    <Page title="Megacapital">
      <Container maxWidth='md'>
        {isLoading ? (
          <Loader type="Bars" color="#00BFFF" height={30} width={30} />
        ) : (
          <>
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <Typography sx={{ marginBottom: '15px' }}>
                  <Box component="img" src="/img/catecoin.webp" sx={{ width: '50px', marginRight: '10px' }} />
                  <h1>CateCoin</h1>
                  <p>
                    What is the use of Catecoin?
                    Use Catecoin for Stable Earning and also use Catecoin to Create memes , Stake and Earn 15% APY , HODL and Earn 2% of Every Transaction

                    What is Catecoin Address?
                    The new contract address of Catecoin is   0xE4FAE3Faa8300810C835970b9187c268f55D998F  </p>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ paddingTop: '55px' }}>
                  <Grid container spacing={5}>
                    <Grid item xs={5}>
                      <p>Deposit Fee</p>
                    </Grid>
                    <Grid item xs={7} align={'right'}>
                      <p>None</p>
                    </Grid>
                  </Grid>
                  <Divider light />
                  <Grid container spacing={5}>
                    <Grid item xs={5}>
                      <p>Withdrawl fee</p>
                    </Grid>
                    <Grid item xs={7} align={'right'}>
                      <p>None</p>
                    </Grid>
                  </Grid>
                  <Divider light />
                  <Grid container spacing={5}>
                    <Grid item xs={5}>
                      <p>Performance fee Time</p>
                    </Grid>
                    <Grid item xs={7} align={'right'}>
                      <p>None</p>
                    </Grid>
                  </Grid>
                  <Divider light />
                </Box>
              </Grid>
            </Grid>
            {/* Stake */}
            <Box sx={{ marginTop: '50px', marginBottom: '20px' }}>
              <Grid container spacing={5}>
                <Grid item xs={5}>
                  <TextField label="Staking Amount" variant="outlined" fullWidth="true"
                    type="number"
                    onChange={(e) => { setStakingAmount(e.target.value) }}
                    value={stakingamount}
                  />
                </Grid>
                <Grid item xs={7}>
                  <Box>
                    <Button variant="outlined" size="large" sx={{ marginRight: '10px' }} onClick={handleMaxButton}>Max</Button>
                    <Button variant="contained" size="large" sx={{ marginRight: '10px' }} onClick={handleStakeButton}>Stake</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            {/* Unstake */}
            <Box sx={{  marginBottom: '50px' }}>
              <Grid container spacing={5}>
                <Grid item xs={5}>
                  <TextField label="Unstaking Amount" variant="outlined" fullWidth="true"
                    onChange={(e) => { setUnstakingAmount(e.target.value) }}
                    value={unstakingamount}
                  />
                </Grid>
                <Grid item xs={7}>
                  <Box>
                    <Button variant="outlined" size="large" sx={{ marginRight: '10px' }} onClick={handleClaimButton}>Claim</Button>
                    <Button variant="contained" size="large" sx={{ marginRight: '10px' }} onClick={handleUnstakeButton}>Unstake</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Divider light />
            <p style={{ marginTop: '10px', marginBottom: '10px' }}>Staking Contract Address: {stakingContract.address}</p>
            <p style={{ marginTop: '10px', marginBottom: '10px' }}>Staking Token Address: {staketokenaddress}</p>
            <p style={{ marginTop: '10px', marginBottom: '10px' }}>Reward Token Address: {rewardtokenaddress}</p>
            <Divider light />
            <p style={{ marginTop: '10px', marginBottom: '10px' }}>Wallet Staking Token Balance: {stakingtoken_balance}</p>
            <p style={{ marginTop: '10px', marginBottom: '10px' }}>Wallet Reward Token Balance: {rewardtoken_balance}</p>
            <Divider light />
            <p style={{ marginTop: '10px', marginBottom: '10px' }}>Staking Amount: {stakingamount}</p>
            <Divider light />
          </>
        )}
      </Container>
    </Page >
  );
}
