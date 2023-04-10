import { Grid } from "@mui/material";

const menu = [
  {label: "Home", url: "/home"},
  {label: "Home", url: "/home"},
  {label: "Home", url: "/home"},
  {label: "Home", url: "/home"},
  {label: "Home", url: "/home"}
]

function Navbar() {
  return (
  <Grid container sx={{width: "68%"}}>
    <Grid item className="font-[900]"><span className="text-yellow">CON</span><span className="text-blue">STRUCT</span></Grid>
    <Grid item container justifyContent="space-between" alignItems="center">
      {menu.map(item => {
        return<Grid item><a className=" underline-none" href={item.url}>{item.label}</a></Grid>
      })}
    </Grid>
  </Grid>);
}

export default Navbar;