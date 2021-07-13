import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Anime from '@/assets/HomePage/hero/anime.svg';
import FrameLeft from '@/assets/HomePage/hero/FrameLeft.svg';
import FrameRight from '@/assets/HomePage/hero/FrameRight.svg';
import FrameTop from '@/assets/HomePage/hero/FrameTop.svg';

function Hero(): JSX.Element {
    return (
        <Flex as="section" h="560px" bg="#F7F1F6" pos="relative" px="20px" py="50px" overflow="hidden">
            <SimpleGrid columns={[1, 2, null, 2]} placeItems="center" maxWidth={1200} w="100%" margin="auto" justifyContent="space-between">
                <Heading
                    as="h1"
                    fontFamily="montserrat"
                    fontWeight={['400', null, null, '500']}
                    textAlign={['center', 'left', null, 'left']}
                    fontSize={['24px', '32px', null, '40px']}
                    lineHeight={['29.26px', '44px', null, '56px']}
                    letterSpacing="0.2px"
                    color="#000"
                    maxW={['306px', null, null, '645px']}
                    mb={['14px', null, null, '0px']}
                >
                    Il y a une vie avant,
                    <br /> et une vie après l’Hypnose.
                </Heading>

                <Box w={['286.98px', null, null, '469.96px']} justifySelf={[null, null, null, 'end']}>
                    <Anime />
                </Box>
            </SimpleGrid>

            <Box display={['none', null, null, 'initial']} pos="absolute" w="275px" h="375px" left="-5px" top="215px" opacity="0.4" aria-hidden="true">
                <FrameLeft />
            </Box>
            <Box display={['none', null, null, 'initial']} pos="absolute" w="256px" h="587px" right="8%" top="-27px" opacity="0.4" aria-hidden="true">
                <FrameRight />
            </Box>
            <Box display={['none', null, null, 'initial']} pos="absolute" w="407px" h="316px" left="50%" transform="translateX(-50%)" top="-27px" opacity="0.4" aria-hidden="true">
                <FrameTop />
            </Box>
        </Flex>
    );
}

export default Hero;
