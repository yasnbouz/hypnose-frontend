import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import GlobalStyles from '@/theme/GlobalStyles';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import 'focus-visible/dist/focus-visible';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

function handleExitComplete() {
    if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0 });
    }
}
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const router = useRouter();
    return (
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <ChakraProvider theme={theme}>
                <GlobalStyles />
                <Component {...pageProps} key={router.route} />
            </ChakraProvider>
        </AnimatePresence>
    );
}
export default MyApp;
