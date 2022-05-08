import { styled } from '../stitches.config';

const WeatherCardSunStyle = styled('div', {
    position: 'relative',
    top: '-98px',
    left: '90%',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundColor: '#fdb813',
    boxShadow: `#fd8e1c 0 0 0 90px,
    #fd7d2d 0 0 0 200px`,
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