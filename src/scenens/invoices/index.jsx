import { Box,Typography ,useTheme } from "@mui/material"
import { tokens } from "../../Themes"
import { DataGrid } from "@mui/x-data-grid"
import {mockDataInvoices} from "../../data/mochData"
import Header from "../../components/Header"


const Invoices = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {field: "id" , headerName: "ID"},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "phone", headerName: "Phone Number", flex: 1},
        {field: "email", headerName: "Email", flex: 1},
        {field: "date", headerName: "Date", flex: 1},
        {field: "cost", headerName: "Cost", flex: 1 ,
         renderCell: (params) => (
            <Typography color={colors.greenAccent[500]}>
                ${params.row.cost}
            </Typography>
         )}
        
    ]
  return (
    <Box m="20px">
        <Header title="INVOICES" subtitle="List of Invoices Balances"/>
        <Box m='30px 0 0 0 ' height='100vh' width="99%"
          sx={{
            "& .MuiDataGrid-root": {
                border: "none",
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none"
            },
            "& .name-column--cell": {
                color: colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none"
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400] 
            },
            "& .MuiDataGrid-footerContainer": {
                backgroundColor: colors.blueAccent[700] ,
                borderTop: "none"
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`
            }
          }}>
            <DataGrid 
             rows={mockDataInvoices} 
             columns={columns}
             checkboxSelection
             />
        </Box>
    </Box>
  )
}

export default Invoices