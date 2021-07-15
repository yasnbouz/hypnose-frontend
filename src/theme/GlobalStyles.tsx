import { Global } from '@emotion/react';

export default function GlobalStyles(): JSX.Element {
    return (
        <Global
            styles={`
            .js-focus-visible :focus:not([data-focus-visible-added]) {
              outline: none;
              box-shadow: none;
            }
            // Montserrat
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
`}
        />
    );
}
