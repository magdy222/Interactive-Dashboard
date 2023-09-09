import { Route, Routes } from 'react-router-dom';
import {useMode, ColorModeContext} from './Themes'
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenens/global/Topbar';
import Dashboard from './scenens/dashboard';
import SideBar from './scenens/global/Sidebar'
import Team from "./scenens/team";
import Contacts from './scenens/contacts';
import Invoices from './scenens/invoices';
import Form from './scenens/form';
import Calendar from './scenens/calendar';
import FAQ from './scenens/faq';
import Bar from './scenens/bar';
import Pie from './scenens/pie';
import Line from './scenens/line';
import GeographyChart from './scenens/geo';



function App() {
  
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <SideBar/>
          <main className='content'>
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/faq" element={<FAQ/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/map" element={<GeographyChart/>}/>
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
