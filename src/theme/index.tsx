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
        a: {
            _hover: {
                textDecorationLine: 'none !important',
            },
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
