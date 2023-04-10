import "../style/home.css"
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Grid } from "@mui/material";
import Navbar from "../component/navbar";
import { Girl } from "@mui/icons-material";
function Home() {
  return (
  <div style={{position: "absolute", width: "100%", height: "100%", top: 0}}>
    <Grid container className="bg-blue" justifyContent="center">
      <Grid  container justifyContent="space-between" alignItems="center"   sx={{width: "68%"}}>
        <Grid item sx={{margin: 0}} className="py-6" justifyContent="start" alignItems="center" spacing={2}>
          <MailOutlineOutlinedIcon className=" text-yellow"/>
          <span className="text-white text-sm">email@mail.com</span>
        </Grid>
        <Grid item className="text-white">Call: +9999 9999 9999 9999</Grid>
      </Grid>
    </Grid>
    <Grid container justifyContent="center">
      <Navbar />
    </Grid>
  </div>);
}

export default Home;