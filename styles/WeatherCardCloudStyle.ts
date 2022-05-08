import { styled } from "../stitches.config";
const widthAmount = 330;
export const WeatherCardCloudStyle = styled('div', {
    backgroundColor: '#ccc',
    width: `${widthAmount}px`,
    height: `${widthAmount*0.45}px`,
    borderBottomLeftRadius: '60% 100%',
    borderBottomRightRadius:'60% 100%',
    boxShadow: `#ccc ${(widthAmount*0.7)}px -30px 0 -30px,
    #ccc ${(widthAmount*1.6)}px 20px 0 20px`,
    '& ul': {
        display: 'none',
        width: '100vw',
        marginTop: '70px',
    },
    '& ul li':{
        width: '2px',
        height: '350px',
        backgroundColor: 'LightBlue',
        transform: 'rotate(35deg)',
        marginLeft: '100px',
        listStyleType: 'none',
        float: 'left',
    },
    '& ul li:nth-child(1)':{
        marginLeft: '0',
    },
    variants: {
        WeatherType: {
            blank: {
                display: 'none',
            },
            sunny: {
                display: 'none',
            },
        },
        Raining: {
            true: {
                '& ul': {
                    display: 'inline-block',
                },
            }
        }
    }


});