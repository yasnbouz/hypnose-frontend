import { Box, Flex, Text, SimpleGrid } from '@chakra-ui/react';
import Anime from '@/assets/BoutiquePage/Hero/Frame.svg';
import FrameLeft from '@/assets/HomePage/hero/FrameLeft.svg';
import FrameRight from '@/assets/HomePage/hero/FrameRight.svg';
import FrameTop from '@/assets/HomePage/hero/FrameTop.svg';

function Hero(): JSX.Element {
    return (
        <Flex as="section" h="447px" bg="#F7F1F6" pos="relative" px="20px" overflow="hidden">
            <SimpleGrid
                gridTemplateColumns={['1fr', '1fr', '2fr 1fr']}
                justifyItems={['center', null, null, 'start']}
                alignItems="center"
                maxWidth="1100px"
                spacingY="27px"
                w="100%"
                margin="auto"
            >
                <Box>
                    <Text
                        as="h1"
                        fontFamily="montserrat"
                        fontWeight={['400', null, null, '500']}
                        fontSize={['24px', null, null, '32px']}
                        lineHeight={['29.26px', null, null, '40px']}
                        letterSpacing="0.2px"
                        color="#373F41"
                        maxW={['270px', null, null, '632px']}
                        textAlign={['center', null, 'left']}
                    >
                        Profitez du pouvoir de l&apos;inconscient pour atteindre vos objectifs
                    </Text>
                </Box>
                <Box w={['295px', null, null, '381px']} h={['227px', null, null, '292px']}>
                    <Anime />
                </Box>
            </SimpleGrid>

            <Box display={['none', null, null, 'block']} pos="absolute" w="275px" h="375px" left="-5px" bottom="-45px" opacity="0.4" aria-hidden="true">
                <FrameLeft />
            </Box>
            <Box display={['none', null, null, 'block']} pos="absolute" w="256px" h="587px" right="0" top="0" opacity="0.4" aria-hidden="true">
                <FrameRight />
            </Box>
            <Box display={['none', null, null, 'block']} pos="absolute" w="407px" h="316px" left="50%" transform="translateX(-50%)" top="-27px" opacity="0.4" aria-hidden="true">
                <FrameTop />
            </Box>
        </Flex>
    );
}

export default Hero;
