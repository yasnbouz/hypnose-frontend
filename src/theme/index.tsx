import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
    montserrat: `'Montserrat', sans-serif`,
    raleway: 'Raleway',
    mulish: 'Mulish',
    arial: 'Arial',
};

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
});
const styles = {
    global: {
        '*::-webkit-scrollbar': {
            width: '8px',
        },
        '*::-webkit-scrollbar-track': {
            background: 'transparent',
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'hsl(309deg 81% 88%)',
            borderRadius: '20px',
            '&:hover': {
                backgroundColor: 'hsl(309deg 81% 78%)',
            },
        },
        html: {
            scrollbarWidth: 'thin',
            scrollbarColor: 'hsl(309deg 81% 88%) transparent',
        },
        a: {
            _hover: {
                textDecorationLine: 'none !important',
            },
        },
        '.radii': {
            borderRadius: '10px',
        },
        // '*': { outline: '1px solid red' },
    },
};
const theme = extendTheme({
    colors: {
        black: '#16161D',
    },
    fonts,
    breakpoints,
    styles,
});

export default theme;
