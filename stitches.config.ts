import { createStitches } from '@stitches/react';

export const { styled, getCssText, keyframes } = createStitches({
    theme: {
        fonts: {
            system: 'system-ui',
        },
        
        colors: {
            elementBackground: '#004643',
            elementParagraph: '#abd1c6',
            elementButtonText: '#001e1d',
            elementButton: '#f9bc60',
            elementHeadLine: '#fffffe',
            cardBackground: '#004643',
            hiContrast: 'hsl(206,10%,5%)',
            loContrast: 'white',
        },
        fontSizes: {
            1: '13px',
            2: '15px',
            3: '17px',
        },
    },
});

export const Rain = keyframes({
    '0%': {transform: 'rotate(35deg) translate3d(20px,-1000px,-100px)'},
    '100%': {transform: 'rotate(35deg) translate3d(-10px,500px,-100px)'},
});

export const Clouds = keyframes({
    '0%': {transform: 'translateX(-901px)'},
    '100%': {transform: 'translateX(0px)'},
});

export const Sun = keyframes({
    '0%': {transform: 'scale(1,1)'},
    '20%': {transform: 'scale(1.05,1.05)'},
    '40%': {transform: 'scale(1,1)'},
    '60%': {transform: 'scale(1,1)'},
    '80%': {transform: 'scale(1.05,1.05)'},
    '100%': {transform: 'scale(1,1)'},
});