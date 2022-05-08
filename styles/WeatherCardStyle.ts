import { styled } from '../stitches.config';

const WeatherCardTitleStyle = styled('span', {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
});

const WeatherCardStyle = styled('div',{
    margin: '15px 0',
    borderRadius: '10px',
    color: '$elementHeadLine',
    backgroundColor: '$cardBackground',
    position: 'relative',
    width: '100%',
    height: '100%',
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
                backgroundColor: '#F17022',
            },
        }
    }
});

export {WeatherCardTitleStyle,WeatherCardStyle};