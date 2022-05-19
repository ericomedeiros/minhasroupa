import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import stylesHome from '../styles/Home.module.css'
import { styled } from '../stitches.config';
import { WeatherCard } from '../components/WeatherCard';
import { CitiesList } from '../components/CitiesList';

interface WeatherMessages {
  [index: string]: string[];
  blank: string[];
  thunderstorm: string[];
  drizzle: string[];
  clear: string[];
  rain: string[];
  snow: string[];
  clouds: string[];
}

interface WeatherInfo {
    weatherType: keyof WeatherMessages;
    humidity: number;
}
interface WeatherInfoList {
  [index: number]: WeatherInfo;
}

const Search = styled('input', {
  backgroundColor: '$elementBackground',
  borderRadius: '10px 10px 10px 10px',
  borderColor: '$elementButtonText',
  fontSize: '13px',
  color: '$elementHeadLine',
  width: '100%',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: '$elementBackground',
    borderColor: '$elementButtonText',
  },
  variants: {
    cities:{
      true:{
        borderRadius: '10px 10px 0px 0px',
      }
    }
  }
});

const weatherMessages: WeatherMessages = {
  blank: [
    "Previ nada"
  ],
  thunderstorm: [
    "Pra que ta aqui? Tá caindo o mundo",
    "Não",
  ],
  drizzle: [
    "Um chuvisco, só pra deixar quase poder"
  ],
  clear: [
    "Vamo pendurar, hoje ta que tá",
    "É pra fazer duas maquinadas tranquilamente",
  ],
  rain: [
    "Corre!",
    "Se não notou até agora, já foi",
  ],
  snow: [
    "Ué nevando, tem coragem nesse friu?",
    "Agora é só ficar na coberta"
  ],
  clouds: [
    "Se tem sorte, vai rapido",
    "Pendura, mas fica de olho",
  ],
};
const weatherTypes = Object.keys(weatherMessages);


function ramdomWeatherType(params:string): string {
  return weatherTypes[0];
  if(params.length > 0){
    const idx = Math.floor(Math.random() * weatherTypes.length);
    return weatherTypes[idx];
  }
}

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);
  const [forecast, setForecast] = useState<WeatherInfoList | undefined>(undefined);
  
  async function findCities(param:string) {
    if(param.length === 0){
      setCities([]);
      return;
    }
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${param}&limit=10&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
  
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      setCities(data);
      console.log(data);
    } else {
      if (cities.length > 0) {
        setCities([]);
      }
    }
  }

  function searchLocation(params:React.ChangeEvent<HTMLInputElement>) {
    const foundCities = findCities(params.target.value);
    setSearch(params.target.value);
  }

  async function selectCity(params:{lat:DoubleRange,lon:DoubleRange}) {

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${params.lat}&lon=${params.lon}&units=metric&exclude=minutely,hourly&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
    
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      //data.current.weather.id
      //data.daily[].weather.id
      const forecast:WeatherInfoList = data.current.weather.map((ele:any) => {
        const weatherID = ele.id / 100;
        let curWeather:WeatherInfo;
        switch (weatherID | 0) {
          case 2:
          //IDs: 200~232 -> Thunderstorm
          curWeather = {
            weatherType:"thunderstorm",
            humidity: ele.humidity,
          }
          break;
          
          case 3:
            //IDs: 300~321 -> Drizzle
            curWeather = {
              weatherType:"drizzle",
              humidity: ele.humidity,
            }
          break;
  
          case 5:
            //IDs: 500~531 -> Rain
            curWeather = {
              weatherType:"rain",
              humidity: ele.humidity,
            }
          break;
  
          case 6:
            //IDs: 600~622 -> Snow
            curWeather = {
              weatherType:"snow",
              humidity: ele.humidity,
            }
          break;
  
          case 8:
            //IDs: 800     -> Clear
            //IDs: 801~804 -> Clouds
            if(weatherID == 8) {
              curWeather = {
                weatherType:"clear",
                humidity: ele.humidity,
              }
            } else {
              curWeather = {
                weatherType:"clouds",
                humidity: ele.humidity,
              }
            }
          break;
  
          default:
            curWeather = {
              weatherType:"blank",
              humidity: ele.humidity,
            }
          break;
        }
        return curWeather;
      });
      console.log(data);
    } else {
      setSearch("Ocorreu um erro procure novamente as cidades");
      setForecast(undefined)

    }
    setCities([]);
    setForecast(forecast);
  }

  function ramdomWeatherMessage(): string {
    if(forecast.length > 0){
      const idx = Math.floor(Math.random() * weatherMessages[forecast].length);
      return weatherMessages[forecast][idx];
    }
    return "";
  }

  return (
    <div className={stylesHome.container}>
      <Head>
        <title>Minhas roupa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={stylesHome.main}>
        <h1 className={stylesHome.title}>
          Bem vindo! Vamos secar algumas roupas?
        </h1>

        <div className={stylesHome.grid}>
          <Search cities={cities.length > 0} type={'search'} placeholder={'Onde está?'} onChange={searchLocation}/>
          <CitiesList selectCity={selectCity} cities={cities}/>
        </div>
        <WeatherCard text={ramdomWeatherMessage()} weatherType={forecast[0].weatherType || "blank"}/>
      </main>

      <footer className={stylesHome.footer}>
        
      </footer>
    </div>
  )
}

export default Home
