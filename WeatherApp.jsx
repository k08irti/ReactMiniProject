import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    let [WeatherInfo , setWeatherInfo] = useState({
    city: "Ghaziabad",
    temp: 42.67,
    tempMax: 42.67,
    tempMin: 42.67,
    });

    let updateInfo = (result =>{
        setWeatherInfo(result);
    });

    return(
        <div>
            <h1>
                Weather App by Kirti Baliyan

            </h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={WeatherInfo}/>
        </div>
    )
}