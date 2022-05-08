import { WeatherCardCloudStyle } from "../styles/WeatherCardCloudStyle";
import { WeatherCardTitleStyle, WeatherCardStyle } from "../styles/WeatherCardStyle";
import { WeatherCardSunStyle } from "../styles/WeatherCardSunStyle";

type WeatherCard = {
    text: string;
    weatherType: string;
}

export function WeatherCard(params:WeatherCard) {
    return (
        <WeatherCardStyle WeatherType={params.weatherType}>
            <WeatherCardSunStyle WeatherType={params.weatherType}/>
            <WeatherCardTitleStyle>
                {params.text}
            </WeatherCardTitleStyle>
            <WeatherCardCloudStyle WeatherType={params.weatherType} Raining={params.weatherType=="raining"}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </WeatherCardCloudStyle>
        </WeatherCardStyle>
    );
}
