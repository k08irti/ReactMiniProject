import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";


export default function SearchBox( { updateInfo }) {
   let [city, setCity] = useState("");
   let API_URL = "https://api.openweathermap.org/data/2.5/weather";
   let API_KEY = "7ec4e64a38dadddc96498784c865068c";
   let styles= {marginBottom: "25px"};

   let getWeatherInfo = async() =>{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
   
    let jsonResponse = await response.json();
    let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
         tempMax: jsonResponse.main.temp_max,
    }
    console.log(result);
    return result;
   }
 

  const handlchange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) =>{
    event.preventDefault();
    console.log(city);
    setCity("");
    let info = await getWeatherInfo();
    updateInfo(info);
  };

  return (
    <div style={styles}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handlchange}
          

        />
        <br></br>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
