import { Box } from '@mui/material'
import Header from '../../components/Header'
import PieChart from '../../components/PieChart'


const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
      <Box height="100vh" width="99%">
        <PieChart/>
      </Box>
    </Box>
  )
}

export default Pie