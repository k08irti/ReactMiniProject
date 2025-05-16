import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import StormIcon from '@mui/icons-material/Storm';

export default function InfoBox({ Info }) {
  let INIT_URL =
    "https://images.unsplash.com/photo-1594156596782-656c93e4d504?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL =
    "https://images.unsplash.com/photo-1489674267075-cee793167910?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={
            Info.temp > 15 ? HOT_URL : Info.temp < 15 ? COLD_URL : INIT_URL
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city} {
        
            Info.temp > 15 ? <SunnyIcon></SunnyIcon> : Info.temp < 15 ? <AcUnitIcon/> : <StormIcon/>
          }
            
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <div> Temperature: {Info.temp}&deg; </div>
            <div> Minimum Temperature: {Info.tempMin}&deg;</div>
            <div>Maximum temperature: {Info.tempMax}&deg; </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
