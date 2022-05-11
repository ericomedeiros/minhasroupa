import { styled } from '../stitches.config';

const WeatherCardTitleStyle = styled('span', {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '10',
});

const WeatherCardStyle = styled('div',{
    margin: '15px 0',
    borderRadius: '10px',
    color: '$elementHeadLine',
    backgroundColor: '$cardBackground',
    position: 'relative',
    width: '100%',
    maxWidth: '877px',
    height: '100%',
    zIndex: '10',
    minHeight: '45vh',
    textAlign: 'center',
    lineHeight: '1',
    fontSize: '3rem',
    overflow: 'hidden',
    variants: {
        WeatherType: {
            blank: {
                backgroundColor: '$elementBackground',
            },
            raining: {
                backgroundColor: '#656d78',
            },
            sunny: {
                backgroundColor: 'SkyBlue',
            },
            willRain: {
                backgroundColor: '#e6e6e6',
            }
        }
    }
});

export {WeatherCardTitleStyle,WeatherCardStyle};