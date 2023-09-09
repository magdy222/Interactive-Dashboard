import { Box, Typography, Button, IconButton, useTheme } from "@mui/material"
import { tokens } from "../../Themes"
import Header from "../../components/Header"
import {mockTransactions} from "../../data/mochData"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox  from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center' > 
        <Box>
          <Header title="Dashboard" subtitle="Welcome to your dashboard"/>
        </Box> 
        <Box marginLeft='20px'>
          <Button 
           sx={{backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                
              }
              }
           >
              <DownloadOutlinedIcon sx={{mr: "10px"}}/>
              Download Reports
          </Button>
        </Box>
      </Box>
      {/*Grid & Charts */}
      <Box 
         display="grid" 
         gridTemplateColumns="repeat(12 ,1fr)"
         gridAutoRows="140px"
         gap="20px"
         sx={{
          width: '100%',
          '@media (max-width: 959px)': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}}
        >
        {/* Row 1 */}
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
             <StatBox title="12.361" subtitle="Emails sent" progress="0.75" increase='+14%'
                icon={<EmailOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}/>
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
             <StatBox title="22.421" subtitle="Sales Obtained" progress="0.5" increase='+21%'
                icon={<PointOfSaleOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: "26px",
                '@media (max-width: 959px)': {
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  paddingTop: '20px'
               }}}/>}/>
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
             <StatBox title="32.441" subtitle="New Clients" progress="0.30" increase='+5%'
                icon={<PersonAddAltOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}/>
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
             <StatBox title="1.352.784" subtitle="Traffic Inbound" progress="0.80" increase='+43%'
                icon={<TrafficOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}/>
          </Box>

        {/* Row 2 */}
          <Box 
           gridColumn="span 8"
           gridRow="span 2"
           backgroundColor={colors.primary[400]}
           > 
             <Box 
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              mt='25px'
              p='0 30px'
              >
                <Box >
                  <Typography variant="h5" fontWeight='600' color={colors.grey[100]}>Revenue Generated</Typography>
                  <Typography variant="h3" fontWeight='bold ' color={colors.greenAccent[500]}>59,342,266 $</Typography>
                </Box>
                <Box >
                   <IconButton>
                       <DownloadOutlinedIcon sx={{fontWeight: '26px', color: colors.greenAccent[500]}}/>
                   </IconButton>
               </Box>
             </Box>

             <Box height='250px' mt='-20px'>
               <LineChart isDashboard={true}/>
             </Box>
          </Box> 
             {/* Transactions */}
             <Box
              gridColumn='span 4'
              gridRow='span 2'
              overflow='auto'
              backgroundColor={colors.primary[400]}
              >
                 <Box 
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  color={colors.primary[500]}
                  p='15px'
                  >
                    <Typography color={colors.grey[100]} variant="h5" fontWeight='600'>
                        Recent Transactions
                    </Typography>
                 </Box>
                 {mockTransactions.map((transaction, i) => (
                     <Box 
                       display='flex'
                       justifyContent='space-between'
                       alignItems='center'
                       borderBottom={`4px solid ${colors.primary[500]}`}
                       color={colors.primary[500]}
                       p='15px'
                     >
                        <Box>
                          <Typography color={colors.grey[100]} variant="h5" fontWeight='600'>
                              {transaction.txId}
                          </Typography>
                          <Typography color={colors.grey[100]} >
                              {transaction.user}
                          </Typography>
                        </Box>
                        <Box color={colors.grey[100]}>{transaction.date}</Box>
                        <Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px'>
                          ${transaction.cost}
                        </Box>
                     </Box>
                 ))}
             </Box>
             {/* Row 3 */}
             <Box
               gridColumn='span 4'
               gridRow='span 2'
               backgroundColor={colors.primary[400]}
               p='30px'
              >
                 <Typography variant="h5" fontWeight='600'>Campaign</Typography>
                 <Box height='250px' mt='-20px'>
                     <PieChart isDashboard={true}/>
                 </Box>
             </Box>
             {/* */}
             <Box
               gridColumn='span 4'
               gridRow='span 2'
               backgroundColor={colors.primary[400]}
              >
                 <Typography variant="h5" fontWeight='600' sx={{p: '30px 30px 0 30px'}}>
                     Sales Quantity
                 </Typography>
                 <Box height='250px' mt='-20px'>
                    <BarChart isDashboard={true}/>
                 </Box>
             </Box>
             <Box
               gridColumn='span 4'
               gridRow='span 2'
               backgroundColor={colors.primary[400]}
               p='30px'
              >
                 <Typography variant="h5" fontWeight='600' sx={{mb: '15px'}}>
                     Geography Based Traffic
                 </Typography>
                 <Box height='250px' mt='-20px'>
                    <GeographyChart isDashboard={true}/>
                 </Box>
             </Box>
          </Box>
      </Box>
  )
}

export default Dashboard