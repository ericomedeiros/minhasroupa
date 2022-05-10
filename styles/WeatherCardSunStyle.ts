import { styled, Sun } from '../stitches.config';

const WeatherCardSunStyle = styled('div', {
    position: 'relative',
    top: '-137px',
    left: '85%',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor: '#fdb813',
    boxShadow: `#fd8e1c 0 0 0 90px,
    #fd7d2d 0 0 0 200px`,
    animation:  `${Sun} 6s infinite`,
    variants: {
        WeatherType: {
            blank: {
                display: 'none',
            },
            raining: {
                display: 'none',
            },
            willRain: {
                display: 'none',
            },
        }
    }
});

export {WeatherCardSunStyle};