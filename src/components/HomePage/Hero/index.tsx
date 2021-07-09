import { Box, Flex, Text, HStack } from '@chakra-ui/react';
import Anime from '@/assets/HomePage/hero/anime.svg';
import FrameLeft from '@/assets/HomePage/hero/FrameLeft.svg';
import FrameRight from '@/assets/HomePage/hero/FrameRight.svg';
import FrameTop from '@/assets/HomePage/hero/FrameTop.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

function Hero(): JSX.Element {
    return (
        <Flex as="section" h="560px" bg="#F7F1F6" pos="relative" px="20px" overflow="hidden">
            <Swiper slidesPerView={1}>
                <SwiperSlide>
                    <HStack maxWidth={1200} w="100%" margin="auto" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Text fontFamily="montserrat" fontWeight="500" fontSize="40px" lineHeight="56px" letterSpacing="0.2px" color="#000" maxW="645px">
                                Il y a une vie avant,
                                <br /> et une vie après l’Hypnose.
                            </Text>
                        </Box>
                        <Box>
                            <Anime />
                        </Box>
                    </HStack>
                </SwiperSlide>
                <SwiperSlide>
                    <HStack maxWidth={1200} w="100%" margin="auto" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Text fontFamily="montserrat" fontWeight="500" fontSize="40px" lineHeight="56px" letterSpacing="0.2px" color="#000" maxW="645px">
                                Il y a une vie avant,
                                <br /> et une vie après l’Hypnose.
                            </Text>
                        </Box>
                        <Box>
                            <Anime />
                        </Box>
                    </HStack>
                </SwiperSlide>
                <SwiperSlide>
                    <HStack maxWidth={1200} w="100%" margin="auto" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Text fontFamily="montserrat" fontWeight="500" fontSize="40px" lineHeight="56px" letterSpacing="0.2px" color="#000" maxW="645px">
                                Il y a une vie avant,
                                <br /> et une vie après l’Hypnose.
                            </Text>
                        </Box>
                        <Box>
                            <Anime />
                        </Box>
                    </HStack>
                </SwiperSlide>
            </Swiper>

            <Box pos="absolute" w="275px" h="375px" left="-5px" top="215px" opacity="0.4" aria-hidden="true">
                <FrameLeft />
            </Box>
            <Box pos="absolute" w="256px" h="587px" right="8%" top="-27px" opacity="0.4" aria-hidden="true">
                <FrameRight />
            </Box>
            <Box pos="absolute" w="407px" h="316px" left="50%" transform="translateX(-50%)" top="-27px" opacity="0.4" aria-hidden="true">
                <FrameTop />
            </Box>
        </Flex>
    );
}

export default Hero;
