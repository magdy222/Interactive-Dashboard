import { useState } from "react";
import { Menu, MenuItem ,Sidebar} from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import {Box, IconButton, Typography, colors, useTheme} from "@mui/material";
import { tokens } from "../../Themes";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import user from '../../assets/user.png'



const Item = ({title, to, selected, setSelected, icon}) =>{
   const theme = useTheme()
   const color = tokens(theme.palette.mode)

   return(
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
    <MenuItem       
      active = {selected === title}
      style = {{color: colors.grey[900]}}
      onClick = {() => setSelected(title)}
      icon = {icon}
      >
        <Typography>{title}</Typography>
    </MenuItem>
    </Link>
   )
}

const SideBar = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [selected, setSelected] = useState("Dashboard")

  return (
    
    <Box  >
      <Sidebar collapsed={isCollapsed}
        width="200px"
        height="100vh"
        rootStyles={{
          backgroundColor: "green",
        }}>
        <Menu iconShape="square"
           sx={{color:"green"}} >
          {/*Logo and Menu Icon*/}
          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
           icon={isCollapsed ? <MenuOutlinedIcon/> : undefined }
           style={{margin: "10px 0 20px 0", color: colors.grey[800]}}>

            {!isCollapsed && (

              <Box display='flex' justifyContent='center' alignItems='center' ml='5px'>
                <Typography variant="h4" color={colors.grey[900]}>ADMINS</Typography>
                <IconButton onClick={()=> setIsCollapsed(isCollapsed)}><MenuOutlinedIcon/></IconButton>
              </Box>
            )}
          </MenuItem>
          {/* User */}
          {!isCollapsed && (
         <Box>
           <Box display="flex" justifyContent='center' alignItems='center'>
             <img alt="profile-img" width='60px' height='65px' src={user}
                  style={{cursor:"pointer" , borderRadius: "50%"}}         />
          </Box>
        </Box>
      )}
       <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
         <Typography variant="h4" color={colors.blueAccent[700]} fontWeight='bold' sx={{m:"10px 0 0 0 "}}>Magdy</Typography>
         <Typography variant="h5" color={colors.redAccent[500]}>Admin</Typography>
       </Box>
       {/* Menu Items */}
       <Box paddingLeft={isCollapsed ? undefined : "10%"}>
         <Item 
           title="Dashboard"
           to="/"
           icon= {<HomeOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected}
         />
         <Typography variant="h6" color={colors.blueAccent[600]} sx={{m: "15px 0 5px 20px"}}>
          Data
         </Typography>
         <Item 
           title="Manage Team"
           to="/team"
           icon= {<PeopleAltOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected}
         />
         <Item 
           title="Contact Info"
           to="/contacts"
           icon= {<ContactsOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected}
         />
         <Item 
           title="Invoices Balances"
           to="/invoices"
           icon= {<ReceiptOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected}
         />
         <Typography variant="h6" color={colors.blueAccent[600]} sx={{m: "15px 0 5px 20px"}}>
             Pages
         </Typography>
         <Item 
           title="Profile Form"
           to="/form"
           icon= {<PersonOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected}
         />
         <Item 
           title="Calendar"
           to="/calendar"
           icon= {<CalendarTodayOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected}
         />
         <Item 
           sx={{width:"20px" , height:"20px"}}
           title="FAQ"
           to="/faq"
           icon= {<HelpOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected}
         />
        <Typography variant="h6" color={colors.blueAccent[600]} sx={{m: "15px 0 5px 20px"}}>
          Charts
         </Typography>
         <Item 
           title="Bar Chart"
           to="/bar"
           icon= {<BarChartOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected}
         />
         <Item 
           title="Pie Chart"
           to="/pie"
           icon= {<PieChartOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected}
         />
         <Item 
           title="Line Chart"
           to="/line"
           icon= {<TimelineOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected}
         />
         <Item 
           title="Geography"
           to="/map"
           icon= {<MapOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected}
         />
       </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SideBar