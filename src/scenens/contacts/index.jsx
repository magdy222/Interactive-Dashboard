import { Box, useTheme } from "@mui/material"
import { tokens } from "../../Themes"
import { DataGrid } from "@mui/x-data-grid"
import {mockDataContacts} from "../../data/mochData"
import Header from "../../components/Header"


const Contacts = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {field: "id" , headerName: "ID", flex: 0.5},
        {field:"registrarId", headerName: "Register ID"},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        {field: "phone", headerName: "Phone Number", flex: 1},
        {field: "email", headerName: "Email", flex: 1},
        {field: "city", headerName: "City", flex: 1},
        {field: "address", headerName: "Address", flex: 1},
        {field: "zipCode", headerName: "Zip Code", flex: 1}
        
    ]
  return (
    <Box m="20px">
        <Header title="CONTACTS" subtitle="List of Contacts for Future Reference"/>
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
            "& .MuiDataGrird-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`
            }
          }}>
            <DataGrid rows={mockDataContacts} 
             columns={columns}
             />
        </Box>
    </Box>
  )
}

export default Contacts