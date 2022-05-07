import { WeatherCardStyle } from "../styles/WeatherCardStyle";

type WeatherCard = {
    text: string;
    weatherType: string;
}

export function WeatherCard(params:WeatherCard) {
    return (
        <WeatherCardStyle Weather={params.weatherType}>
            {params.text}
        </WeatherCardStyle>
    );
}
