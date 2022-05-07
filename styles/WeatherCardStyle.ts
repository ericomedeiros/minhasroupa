import { styled } from '../stitches.config';

export const WeatherCardStyle = styled('div',{
    margin: '15px 0',
    borderRadius: '10px',
    color: '$elementHeadLine',
    backgroundColor: '$cardBackground',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    textAlign: 'center',
    lineHeight: '1',
    fontSize: '3rem',
    variants: {
        Weather: {
            raining: {
                backgroundColor: '#656d78',
            }
        }
    }
});