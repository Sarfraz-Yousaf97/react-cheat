import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SideNav from "./Component/SideNav";
import Home from "./Component/Home/Home";
import Grid from '@mui/material/Grid';


function App() {
  return (
    <HashRouter>
      <Grid container spacing={2}>
        <Grid  item xs={3}>
          <SideNav />
        </Grid>
        <Grid style={{marginTop:'75px'}} item xs={9}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            </Routes>
        </Grid>
      </Grid>
      </HashRouter>
  );
}

export default App;
