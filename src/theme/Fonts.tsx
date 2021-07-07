import { Global } from '@emotion/react';

export default function Fonts(): JSX.Element {
    return (
        <Global
            styles={`
            @font-face {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight:400;
              font-display: optional;
              src: url(/assets/fonts/Montserrat/montserrat-400.woff2) format('woff2');
            }
            @font-face {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight:500;
              font-display: optional;
              src: url(/assets/fonts/Montserrat/montserrat-500.woff2) format('woff2');
            }
            @font-face {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight:600;
              font-display: optional;
              src: url(/assets/fonts/Montserrat/montserrat-600.woff2) format('woff2');
            }
            @font-face {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight:700;
              font-display: optional;
              src: url(/assets/fonts/Montserrat/montserrat-700.woff2) format('woff2');
            }
            @font-face {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight:800;
              font-display: optional;
              src: url(/assets/fonts/Montserrat/montserrat-800.woff2) format('woff2');
            }
            // Raleway
            @font-face {
              font-family: 'Raleway';
              font-style: normal;
              font-weight:700;
              font-display: optional;
              src: url(/assets/fonts/Raleway/raleway-700.woff2) format('woff2');
            }
            // Mulish
            @font-face {
              font-family: 'Mulish';
              font-style: normal;
              font-weight:400;
              font-display: optional;
              src: url(/assets/fonts/Mulish/mulish-400.woff2) format('woff2');
            }
`}
        />
    );
}
