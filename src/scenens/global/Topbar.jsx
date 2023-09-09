import {Box,InputBase, useTheme} from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../Themes"
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
       <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
         <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"/>
         <IconButton type="button" sx={{p: 1}}>
           <SearchOutlinedIcon/>
         </IconButton>
       </Box>
       
       <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? 
             (<NightlightOutlinedIcon/>) : (<LightModeOutlinedIcon/>)
          }
        </IconButton>
        <IconButton>
           <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
           <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
           <PersonOutlineOutlinedIcon/>
        </IconButton>
       </Box>
    </Box>
  )
}

export default Topbar