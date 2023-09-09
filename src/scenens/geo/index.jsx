import {Box, useTheme} from '@mui/material'
import Header from '../../components/Header'
import GeographyChart from '../../components/GeographyChart'
import { tokens } from '../../Themes'

const Map = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode) 
  return (
  <Box m="20px">
    <Header title="Geography Chart" subtitle="Simple Map Projection"/>
    <Box height="100vh" width="99%" border={`1px solid ${colors.grey[100]}`}>
      <GeographyChart/>
    </Box>
  </Box>
  )
}

export default Map