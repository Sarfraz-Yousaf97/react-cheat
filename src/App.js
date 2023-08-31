import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SideNav from "./Component/SideNav";
import Home from "./Component/Home/Home";
import Grid from '@mui/material/Grid';


function App() {
  return (
    <HashRouter>
      <Grid container spacing={2}>
        <Grid  item xs={4}>
          <SideNav />
        </Grid>
        <Grid style={{marginTop:'75px'}} item xs={8}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            </Routes>
        </Grid>
      </Grid>
      </HashRouter>
  );
}

export default App;
