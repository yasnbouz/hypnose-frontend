import { Box, Flex, Text, HStack } from '@chakra-ui/react';
import Anime from '@/assets/BoutiquePage/Hero/Frame.svg';
import FrameLeft from '@/assets/HomePage/hero/FrameLeft.svg';
import FrameRight from '@/assets/HomePage/hero/FrameRight.svg';
import FrameTop from '@/assets/HomePage/hero/FrameTop.svg';

function Hero(): JSX.Element {
    return (
        <Flex as="section" h="447px" bg="#F7F1F6" pos="relative" px="20px" overflow="hidden">
            <HStack maxWidth="1200px" w="100%" margin="auto" justifyContent="space-between" alignItems="center">
                <Box>
                    <Text as="h1" fontFamily="montserrat" fontWeight="500" fontSize="32px" lineHeight="56px" letterSpacing="0.2px" color="#373F41" maxW="632px">
                        Profitez du pouvoir de l&apos;inconscient pour atteindre vos objectifs
                    </Text>
                </Box>
                <Box>
                    <Anime />
                </Box>
            </HStack>

            <Box pos="absolute" w="275px" h="375px" left="-5px" bottom="-45px" opacity="0.4" aria-hidden="true">
                <FrameLeft />
            </Box>
            <Box pos="absolute" w="256px" h="587px" right="0" top="0" opacity="0.4" aria-hidden="true">
                <FrameRight />
            </Box>
            <Box pos="absolute" w="407px" h="316px" left="50%" transform="translateX(-50%)" top="-27px" opacity="0.4" aria-hidden="true">
                <FrameTop />
            </Box>
        </Flex>
    );
}

export default Hero;
