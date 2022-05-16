import { relative } from "path";
import { Transform } from "stream";
import { styled, Rain, Clouds } from "../stitches.config";

const widthAmount = 330;
export const WeatherCardCloudStyle = styled('div', {
    backgroundColor: '#CCCCCC',
    width: `${widthAmount}px`,
    height: `${widthAmount*0.35}px`,
    borderBottomLeftRadius: '60% 100%',
    borderBottomRightRadius:'60% 100%',
    zIndex: '1',
    boxShadow: `
    #CCCCCC ${(widthAmount*2.73)}px 0px 0 0px,
    #CCCCCC ${(widthAmount*(2.73+0.8))}px -30px 0 -20px,
    #CCCCCC ${(widthAmount*(2.73+1.7))}px 10px 0 10px,
    #999797 ${(widthAmount*(2.73+1.2))}px 0px 0 0px,
    #999797 ${(widthAmount*(2.73+0.5))}px -5px 0 -5px,
    #999797 ${(widthAmount*(2.73+2.2))}px 0px 0 0px,
    #5c5a5a ${(widthAmount*(2.73+0.3))}px 0px 0 0px,
    #5c5a5a ${(widthAmount*(2.73+0.8))}px 0px 0 0px,
    #5c5a5a ${(widthAmount*(2.73+2))}px 5px 0 5px,

    #CCCCCC ${(widthAmount*0.8)}px -30px 0 -20px,
    #CCCCCC ${(widthAmount*1.7)}px 10px 0 10px,
    #999797 ${(widthAmount*1.2)}px 0px 0 0px,
    #999797 ${(widthAmount*0.5)}px -5px 0 -5px,
    #999797 ${(widthAmount*-0.5)}px -5px 0 -5px,
    #999797 ${(widthAmount*2.2)}px 0px 0 0px,
    #5c5a5a ${(widthAmount*-0.3)}px 0px 0 0px,
    #5c5a5a ${(widthAmount*0.3)}px 0px 0 0px,
    #5c5a5a ${(widthAmount*0.8)}px 0px 0 0px,
    #5c5a5a ${(widthAmount*2)}px 5px 0 5px`,
    '& ul': {
        display: 'none',
        width: '100vw',
        marginTop: '70px',
        zIndex: '-10',
        position: 'relative',

    },
    '& ul li': {
        width: '2px',
        height: '250px',
        backgroundColor: 'LightBlue',
        marginLeft: '30px',
        listStyleType: 'none',
        float: 'left',
        animation:  `${Rain} 1s infinite`,
    },
    '& ul li:nth-child(1)':{
        marginLeft: '0',
    },
    '& ul li:nth-child(n)':{
        animation:  `${Rain} 0.5s infinite`
    },
    '& ul li:nth-child(2n)':{
        animation:  `${Rain} 0.8s infinite`
    },
    '& ul li:nth-child(3n)':{
        animation:  `${Rain} 1s infinite`
    },
    '& ul li:nth-child(4n)':{
        animation:  `${Rain} 1.2s infinite`
    },
    variants: {
        WeatherType: {
            blank: {
                display: 'none',
            },
            clear: {
                display: 'none',
            },
        },
        Raining: {
            thunderstorm: {
                '& ul': {
                    display: 'inline-block',
                },
            },
            drizzle: {
                '& ul': {
                    display: 'inline-block',
                },
            },
            rain: {
                '& ul': {
                    display: 'inline-block',
                },
            },
            clouds: {
                transform: `translateX(-901px)`,
                animation:  `${Clouds} linear 15s infinite`,
            },
            snow: {
                transform: `translateX(-901px)`,
                animation:  `${Clouds} linear 15s infinite`,
            },
        }
    }
});