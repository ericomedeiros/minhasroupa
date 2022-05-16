import { WeatherCardCloudStyle } from "../styles/WeatherCardCloudStyle";
import { WeatherCardTitleStyle, WeatherCardStyle } from "../styles/WeatherCardStyle";
import { WeatherCardSunStyle } from "../styles/WeatherCardSunStyle";

type WeatherCard = {
    text: string;
    weatherType: string;
}

export function WeatherCard(params:WeatherCard) {
    return (
        <WeatherCardStyle WeatherType={params.weatherType as any}>
            <WeatherCardSunStyle WeatherType={params.weatherType as any}/>
            <WeatherCardTitleStyle>
                {params.text}
            </WeatherCardTitleStyle>
            <WeatherCardCloudStyle WeatherType={params.weatherType as any} Raining={params.weatherType as any}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
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
