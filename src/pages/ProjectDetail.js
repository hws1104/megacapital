import {
    Box, Grid, Typography, Button
} from '@mui/material'
import Page from 'components/Page'
import MHidden from 'components/@material-extend/MHidden'

export default function ProjectDetail(props){
    return(
        <>
        <Page style={{backgroundColor:"#171819"}}>
            <MHidden width="mdDown">
                <Grid paddingLeft="13%" paddingRight="13%">
                    <Grid container spacing={1} paddingTop="30px">
                        <Grid item sm={3}><CustomCard name="Token Price" number="0.05USDC"></CustomCard></Grid>
                        <Grid item sm={3}><CustomCard name="Pool Size" number="0.05USDC"></CustomCard></Grid>
                        <Grid item sm={3}><CustomCard name="Hard Cap" number="0.05USDC"></CustomCard></Grid>
                        <Grid item sm={3}><CustomCard name="Type" number="unlocked"></CustomCard></Grid>
                    </Grid>
                    <Grid marginTop="30px">
                        <Detail></Detail>
                    </Grid>
                    <Typography marginTop="30px" style={{fontSize:"34px", fontFamily:"Segoe UI", color:"#56C5FF"}}>290 Followers</Typography>
                    <Grid container direction="row" spacing={1} marginTop="10px">
                        <Grid item><Box component="img" src="my_public/images/avatar1.png"/></Grid>
                        <Grid item><Box component="img" src="my_public/images/avatar2.png"/></Grid>
                        <Grid item><Box component="img" src="my_public/images/avatar3.png"/></Grid>
                    </Grid>
                    <Grid marginTop="30px" container direction="row" spacing={1}>
                        <Grid item><Button style={{borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", fontFamily:"Segoe UI", fontSize:"14px", color:"white", padding:"10px 20px 10px 20px"}}><Box component="img" src="my_public/images/Vector.png"/>WhitePaper</Button></Grid>
                        <Grid item><Button style={{borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", fontFamily:"Segoe UI", fontSize:"14px", color:"white", padding:"10px 20px 10px 20px"}}><Box component="img" src="my_public/images/Vector_www.png"/><span>www.megacapital.com</span></Button></Grid>
                        <Grid item><Box component="button" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px 10px 10px 10px"}}><Box component="img" src="my_public/images/plane_avatar.png"/></Box></Grid>
                        <Grid item><Box component="button" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px 10px 10px 10px"}}><Box component="img" src="my_public/images/twitter_avatar.png"/></Box></Grid>
                        <Grid item><Box component="button" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px 10px 10px 10px"}}><Box component="img" src="my_public/images/Discord.png"/></Box></Grid>
                        <Grid item alignItems="center" display="flex"><Box component="a" href="#" color="white" >Add To Google Calendar</Box></Grid>
                    </Grid>
                    <Grid marginTop="50px">
                        <ProjectInformation></ProjectInformation>
                    </Grid>
                    <Grid marginTop="60px" justifyContent="center" display="flex">
                        <Box component="img" src="my_public/images/roadmap-icon.png"></Box>
                    </Grid>
                    <Grid container marginTop="60px">
                        <Box color="white">
                            Jan 2022<br/><br/>
                            Public Sale on Solanium<br/><br/>
                            Feb 2022<br/><br/>
                            TGE for all holders. Playable Demo - for early investors<br/><br/>
                            Mar 2022<br/><br/>
                            DEX listing. MVP = demo plus blockchain layer - for early investors<br/><br/>
                            Apr 2022<br/><br/>
                            CEX listing. Back end dev also fully underway<br/><br/>
                            May 2022<br/><br/>
                            Key NFT Sales. Alpha version - for key online leaders<br/><br/>
                            Jun 2022<br/><br/>
                            Announcement of Key Game theme Challenges<br/><br/>
                            Jul 2022<br/><br/>
                            Beta version - for key online leaders<br/><br/>
                            Aug 2022<br/><br/>
                            Partnerships Announced<br/><br/>
                            Sep 2022<br/><br/>
                            Game Launch on Stores
                        </Box>
                    </Grid>
                </Grid>
            </MHidden>
            <MHidden width="mdUp">
                <Grid paddingLeft="5%" paddingRight="5%">
                    <Grid container spacing={1} paddingTop="30px">
                        <Grid item xs={6}><CustomCard name="Token Price" number="0.05USDC"></CustomCard></Grid>
                        <Grid item xs={6}><CustomCard name="Pool Size" number="0.05USDC"></CustomCard></Grid>
                        <Grid item xs={6}><CustomCard name="Hard Cap" number="0.05USDC"></CustomCard></Grid>
                        <Grid item xs={6}><CustomCard name="Type" number="unlocked"></CustomCard></Grid>
                    </Grid>
                    <Grid marginTop="30px">
                        <Detail></Detail>
                    </Grid>
                    <Grid display="flex" justifyContent="center">
                        <Typography marginTop="30px" style={{fontSize:"20px", fontFamily:"Segoe UI", color:"#56C5FF"}}>290 Followers</Typography>
                    </Grid>
                    <Grid container direction="row" spacing={1} marginTop="10px" display="flex" justifyContent="center">
                        <Grid item><Box component="img" src="my_public/images/avatar1.png"/></Grid>
                        <Grid item><Box component="img" src="my_public/images/avatar2.png"/></Grid>
                        <Grid item><Box component="img" src="my_public/images/avatar3.png"/></Grid>
                    </Grid>
                    <Grid marginTop="30px" container direction="row" spacing={1} padding="0px 15px" display="flex" justifyContent="space-around">
                        <Grid item xs={12}><Button style={{borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", fontFamily:"Segoe UI", fontSize:"14px", color:"white", padding:"10px 20px 10px 20px", width:"100%"}}><Box component="img" marginRight="8px" src="my_public/images/Vector.png"/>WhitePaper</Button></Grid>
                        <Grid item xs={12}><Button style={{borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", fontFamily:"Segoe UI", fontSize:"14px", color:"white", padding:"10px 20px 10px 20px", width:"100%"}}><Box component="img" marginRight="8px" src="my_public/images/Vector_www.png"/><span>www.megacapital.com</span></Button></Grid>
                        <Grid item marginTop="20px"><Box component="button" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px 10px 10px 10px"}}><Box component="img" src="my_public/images/plane_avatar.png"/></Box></Grid>
                        <Grid item marginTop="20px"><Box component="button" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px 10px 10px 10px"}}><Box component="img" src="my_public/images/twitter_avatar.png"/></Box></Grid>
                        <Grid item marginTop="20px"><Box component="button" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px 10px 10px 10px"}}><Box component="img" src="my_public/images/Discord.png"/></Box></Grid>
                        <Grid item alignItems="center" display="flex" marginTop="15px"><Box component="a" href="#" color="white" >Add To Google Calendar</Box></Grid>
                    </Grid>
                    <Grid marginTop="50px">
                        <ProjectInformation></ProjectInformation>
                    </Grid>
                    <Grid marginTop="60px" justifyContent="center" display="flex">
                        <Box component="img" src="my_public/images/roadmap-icon.png"></Box>
                    </Grid>
                    <Grid container marginTop="20px">
                        <Box color="white" fontSize={12}>
                            Jan 2022<br/><br/>
                            Public Sale on Solanium<br/><br/>
                            Feb 2022<br/><br/>
                            TGE for all holders. Playable Demo - for early investors<br/><br/>
                            Mar 2022<br/><br/>
                            DEX listing. MVP = demo plus blockchain layer - for early investors<br/><br/>
                            Apr 2022<br/><br/>
                            CEX listing. Back end dev also fully underway<br/><br/>
                            May 2022<br/><br/>
                            Key NFT Sales. Alpha version - for key online leaders<br/><br/>
                            Jun 2022<br/><br/>
                            Announcement of Key Game theme Challenges<br/><br/>
                            Jul 2022<br/><br/>
                            Beta version - for key online leaders<br/><br/>
                            Aug 2022<br/><br/>
                            Partnerships Announced<br/><br/>
                            Sep 2022<br/><br/>
                            Game Launch on Stores
                        </Box>
                    </Grid>
                </Grid>
            </MHidden>
        </Page>
        </>
    );
}
function CustomCard(props){
    return(
        <>
        <MHidden width="mdDown">
        <Grid style={{backgroundColor:"#232323", borderRadius: 10, padding: "20px"}}>
            <Box style={{fontSize:"15px", color:"#24B6E6"}}>{props.name}</Box>
            <Box marginTop="20px" style={{fontSize:"20px", color:"white"}}>{props.number}</Box>
        </Grid>
        </MHidden>
        <MHidden width="mdUp">
        <Grid style={{backgroundColor:"#232323", borderRadius: 10, padding: "20px"}}>
            <Box style={{fontSize:"15px", color:"#24B6E6"}} textAlign="center">{props.name}</Box>
            <Box marginTop="10px" style={{fontSize:"20px", color:"white"}} textAlign="center">{props.number}</Box>
        </Grid>
        </MHidden>
        </>
    );
}
function ProjectInformation(props){
    return(
        <>
        <MHidden width="mdDown">
        <Grid container border="1px solid #56C5FF" borderRadius={1} bgColor="#232323" padding="30px" rowSpacing={2}>
            <Grid item sm={7} color="#56C5FF" fontSize={48}>Project Information</Grid>
            <Grid item sm={5} color="#56C5FF" fontSize={48}>Token Information</Grid>
            <Grid container item direction="row">
                <Grid container item sm={2} direction="column">
                    <Grid item color="white">HARDCAP</Grid>
                    <Grid item color="white">OPEN TIME</Grid>
                    <Grid item color="white">CLOSE TIME</Grid>
                    <Grid item color="white">LISTING DATE</Grid>
                    <Grid item color="white">DEAL</Grid>
                </Grid>
                <Grid container item sm={3} direction="column">
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">2,000,000 USDC</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">Jan 29, 2022, 9:00:00 PM</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">Jan 31, 2022, 9:00:00 PM</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">Jan 31, 2022, 9:00:00 PM</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">INO</Grid>
                </Grid>
                <Grid container item sm={2}>
                </Grid>
                <Grid container item sm={2} direction="column">
                    <Grid item color="white">SYMBOL</Grid>
                    <Grid item color="white">CATEGORY</Grid>
                    <Grid item color="white">BLOCKCHAIN</Grid>
                    <Grid item color="white">TGI</Grid>
                    <Grid item color="white">TYPE</Grid>
                </Grid>
                <Grid container item sm={2} direction="column">
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">PRGC</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">Metaverse</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">Solana</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">Solana</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">unlocked</Grid>
                </Grid>
            </Grid>
            <Grid sm={12} marginTop="50px">
                <Box color="#56C5FF">35700/100000</Box>
                <Box position="relative" display="flex">
                    <Box width="100%" height="10px" borderRadius={2} backgroundColor="white"/>
                    <Box position="absolute" left="0px" borderRadius={2} height="10px" width={`calc(35700/100000*100%)`} backgroundColor="#56C5FF"/>
                </Box>
            </Grid>
            <Grid item container marginTop="50px">
                <Grid item sm={3} color="#56C5FF">your Contribution</Grid>
                <Grid item sm={3} color="#56C5FF">Personal Max</Grid>
                <Grid item sm={6} color="#56C5FF">Token Price</Grid>
                <Grid item sm={3} fontSize={28} color="white">$1000</Grid>
                <Grid item sm={3} fontSize={28} color="white">247854</Grid>
                <Grid item sm={6} fontSize={28} color="white">$0.04</Grid>
            </Grid>
            <Grid item container marginTop="50px">
                <Grid item sm={12} color="#56C5FF">your BUSD balance: 244.64</Grid>
                <Grid item container sm={6} bgColor="#232323" position="relative" display="flex">
                    <Box component="input" padding="5px" width="100%" height="50px" placeholder='0.0' style={{backgroundColor:"#232323", border:"none", borderRadius:5}}></Box>
                    {/* <Input width="100%" placeholder='0.0' bgColor="none"></Input> */}
                    <Box component="button" position="absolute" right="8px" top="7px" style={{backgroundColor:"#56C5FF", height:"70%", border:"none", borderRadius:6}} color="white" paddingLeft="20px" paddingRight="20px">MAX</Box>
                </Grid>
            </Grid>
            <Grid marginTop="20px">
                <Box component="button" style={{backgroundColor:"#56C5FF", border:"none", borderRadius:6}} color="white" padding="15px 23px 15px 23px">APPROVE</Box>
                <Box marginLeft="20px" component="button" style={{backgroundColor:"#232323", borderRadius:4, border:"1px solid #56C5FF", color:"#56C5FF", padding:"15px 37px 15px 37px"}}>BUY</Box>
            </Grid>
        </Grid>
        </MHidden>
        <MHidden width="mdUp">
        <Grid container border="1px solid #56C5FF" borderRadius={1} backgroundColor="#232323" padding="20px" rowSpacing={2}>
            <Grid item xs={12} color="#56C5FF" fontSize={20} justifyContent="center" display="flex">Project Information</Grid>
            <Grid  fontSize={16}>
                <Grid item xs={12} color="white" marginTop="20px">HARDCAP</Grid>
                <Grid item xs={12} color="#56C5FF">2,000,000 USDC</Grid>
                <Grid item xs={12} color="white" marginTop="15px">OPEN TIME</Grid>
                <Grid item xs={12} color="#56C5FF">Jan 29, 2022, 9:00:00 PM</Grid>
                <Grid item xs={12} color="white" marginTop="15px">CLOSE TIME</Grid>
                <Grid item xs={12} color="#56C5FF">Jan 31, 2022, 9:00:00 PM</Grid>
                <Grid item xs={12} color="white" marginTop="15px">LISTING DATE</Grid>
                <Grid item xs={12} color="#56C5FF">Jan 31, 2022, 9:00:00 PM</Grid>
                <Grid item xs={12} color="white" marginTop="15px">DEAL</Grid>
                <Grid item xs={12} color="#56C5FF" marginBottom="30px">INO</Grid>
            </Grid>
            <Grid item xs={12} color="#56C5FF" fontSize={20} marginBottom="15px" justifyContent="center" display="flex">Token Information</Grid>
            <Grid xs={6}>
                <Box color="white">CATEGORY</Box>
                <Box color="#56C5FF" marginTop="2px">Metaverse</Box>
            </Grid>
            <Grid xs={6}>
                <Box color="white">TGI</Box>
                <Box color="#56C5FF" marginTop="2px">Solana</Box>
            </Grid>
            <Grid xs={6} marginTop="10px">
                <Box color="white">BLOCKCHAIN</Box>
                <Box color="#56C5FF" marginTop="2px">Solana</Box>
            </Grid>
            <Grid xs={6} marginTop="10px">
                <Box color="white">TYPE</Box>
                <Box color="#56C5FF" marginTop="2px">unlocked</Box>
            </Grid>
            <Grid xs={12} marginTop="30px" width="100%">
                <Box color="#56C5FF">35700/100000</Box>
                <Box position="relative" display="flex">
                    <Box width="100%" height="10px" borderRadius={2} backgroundColor="white"/>
                    <Box position="absolute" left="0px" borderRadius={2} height="10px" width={`calc(35700/100000*100%)`} backgroundColor="#56C5FF"/>
                </Box>
            </Grid>
            <Grid item container marginTop="50px">
                <Grid item xs={6} fontSize={16} color="#56C5FF">your Contribution</Grid>
                <Grid item xs={6} fontSize={22} color="white" display="flex" justifyContent="flex-end">$1000</Grid>
                <Grid item xs={6} fontSize={16} color="#56C5FF">Personal Max</Grid>
                <Grid item xs={6} fontSize={22} color="white" display="flex" justifyContent="flex-end">247854</Grid>
                <Grid item xs={6} fontSize={16} color="#56C5FF">Token Price</Grid>
                <Grid item xs={6} fontSize={22} color="white" display="flex" justifyContent="flex-end">$0.04</Grid>
            </Grid>
            <Grid item container marginTop="20px">
                <Grid item sm={12} color="#56C5FF">your BUSD balance: 244.64</Grid>
                <Grid item container sm={6} bgColor="#232323" position="relative" display="flex">
                    <Box component="input" padding="5px" width="100%" height="50px" placeholder='0.0' style={{backgroundColor:"rgba(255, 255, 255, 0.1)", border:"none", borderRadius:5}}></Box>
                    <Box component="button" position="absolute" right="8px" top="7px" style={{backgroundColor:"#56C5FF", height:"70%", border:"none", borderRadius:6}} color="white" paddingLeft="20px" paddingRight="20px">MAX</Box>
                </Grid>
            </Grid>
            <Grid marginTop="20px">
                <Box component="button" style={{backgroundColor:"#56C5FF", border:"none", borderRadius:6}} color="white" padding="10px 28px 10px 28px">APPROVE</Box>
                <Box marginLeft="10px" component="button" style={{backgroundColor:"#232323", borderRadius:4, border:"1px solid #56C5FF", color:"#56C5FF", padding:"10px 52px 10px 52px"}}>BUY</Box>
            </Grid>
        </Grid>
        </MHidden>
        </>
    );
}
function Detail(props){
    return(
        <>
        <MHidden width="mdDown">
            <Grid style={{backgroundColor:"#232323", borderRadius: 10, padding: "20px"}}>
                <Grid container direction="row">
                    <Grid item sm={8}><Box component="img" src="my_public/images/game-logo.png"></Box></Grid>
                    <Grid item sm={4} display="flex" justifyContent="right" paddingRight="20px">
                        <Box component="button" style={{height:"60%", backgroundColor: "rgba(242, 188, 26, 0.1)", border:"none", borderRadius: 8, color:"#F9C013", padding:"15px 40px 15px 40px"}}>BSC</Box>
                        <Box component="button" marginLeft="10px" style={{height:"60%", background: "#000000", border:"none", borderRadius:8, color:"#56C5FF", padding:"15px"}}>LaunchPad</Box>
                    </Grid>
                </Grid>
                <Grid marginTop="20px">
                    <Typography component="p" style={{fontFamily: "Segoe UI", fontSize:"48px", color:"#56C5FF"}}>ProtReality Games</Typography>
                    <Typography marginTop="15px" component="p" style={{width:"55%", fontFamily: "Segoe UI", fontSize:"20px", color:"#56C5FF"}}>Computers have their own language called Machine Code which tells them what to do. As you can see, it doesn't make a lot of sense to humans!</Typography>
                    <Typography marginTop="15px" component="p" style={{width:"55%", fontFamily: "Segoe UI", fontSize:"15px", color:"#F1F0F0"}}>Computers have their own language called Machine Code which tells them what to do. As you can see, it doesn't make a lot of sense to humans!</Typography>
                    
                </Grid>
                <Grid marginTop="20px">
                    <Box component="button" style={{padding:"10px", backgroundColor:"#56C5FF", color:"white", border:'none', borderRadius:4}} >CONNECT WALLET</Box>
                    <Box component="button" marginLeft="20px" style={{padding:"10px", backgroundColor:"#232323", borderRadius:4, border: "1px solid #56C5FF", color:"#56C5FF"}} >FOLLOW US</Box>
                    <Box component="a" marginLeft="20px" href="#" style={{fontFamily: "Segoe UI", fontSize:"15px", color:'#56C5FF'}} >VIEW CONTRACT</Box>
                </Grid>
                <Grid marginTop="20px" align="center" justifyContent="center" alignItems="center">
                    <Typography component="p" style={{width:"55%", fontFamily: "Segoe UI", fontSize:"34px", color:"#56C5FF"}}>project process</Typography>
                    <Box marginTop="30px" component="img" src="my_public/images/projects-process.png"></Box>
                    
                </Grid>
            </Grid>
        </MHidden>
        <MHidden width="mdUp">
            <Grid style={{backgroundColor:"#232323", borderRadius: 10, padding: "20px"}} position="relative">
                
                <Box component="button" position="absolute" left="10px" top="10px" alignItems="center"
                    style={{height:"40px", backgroundColor: "rgba(242, 188, 26, 0.1)", border:"none", borderRadius: 8, color:"#F9C013", padding:"7px 13px"}}>BSC</Box>
                <Box component="button" position="absolute" right="10px" top="10px" alignItems="center"
                    style={{height:"40px", background: "#000000", border:"none", borderRadius:8, color:"#56C5FF", padding:"7px 13px"}}>IDO</Box>
                <Grid item sm={12} justifyContent="center" display="flex">
                    <Box component="img" src="my_public/images/game-logo.png"></Box>
                </Grid>
                <Grid item sm={12} justifyContent="center" display="flex">
                    <Typography component="p" marginTop="20px" style={{fontFamily: "Segoe UI", fontSize:"20px", color:"#56C5FF"}}>ProtReality Games</Typography>
                </Grid>
                <Box marginTop="15px" component="p" textAlign="center" style={{fontFamily: "Segoe UI", fontSize:"12px", color:"#F1F0F0"}}>
                    Computers have their own language called Machine Code which tells them what to do. As you can see, it doesn't make a lot of sense to humans!</Box>
                <Box component="button" style={{padding:"10px 5px", backgroundColor:"#56C5FF", color:"white", border:'none', borderRadius:4, fontSize:10}} >
                    CONNECT WALLET</Box>
                <Box component="button" marginLeft="10px" style={{padding:"10px", backgroundColor:"#232323", fontSize:10,
                 borderRadius:4, border: "1px solid #56C5FF", color:"#56C5FF"}} >FOLLOW US</Box>
                <Box component="a" marginLeft="10px" href="#" style={{fontFamily: "Segoe UI", fontSize:"10px", color:'#56C5FF'}} >VIEW CONTRACT</Box>

            </Grid>
            <Grid marginTop="20px" align="center" justifyContent="center" alignItems="center">
                <Typography component="p" style={{width:"55%", fontFamily: "Segoe UI", fontSize:"22px", color:"#56C5FF"}}>project process</Typography>
            </Grid>
            <Grid container marginTop="20px">
                <Grid item xs={4} paddingLeft="10px">
                    <Box component="img" marginLeft="5px" src="my_public/images/whitelist.png"></Box>
                    <Box fontSize={20}>Whitelist </Box>
                    {/* <Box fontSize={12} marginTop="10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi sit dictumst</Box> */}
                </Grid>
                <Grid item xs={4} paddingLeft="30px">
                    <Box component="img" src="my_public/images/sale.png"></Box>
                    <Box fontSize={20} marginLeft="5px">Sale</Box>
                    {/* <Box fontSize={12} marginTop="10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi sit dictumst</Box> */}
                </Grid>
                <Grid item xs={4} paddingLeft="40px">
                    <Box component="img" src="my_public/images/claim.png"></Box>
                    <Box fontSize={20}>Claim</Box>
                    {/* <Box fontSize={12} marginTop="10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi sit dictumst</Box> */}
                </Grid>
            </Grid>
        </MHidden>
        </>
    );
}