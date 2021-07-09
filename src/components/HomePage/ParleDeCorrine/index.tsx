import Image from 'next/image';
import { Button, Link, Box, HStack, Text, Heading } from '@chakra-ui/react';
import Group from '@/assets/HomePage/ParleDeCorrine/Group.svg';
import NextLink from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade, Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, EffectFade, Autoplay]);

function ParlentsCorrine(): JSX.Element {
    return (
        <Box as="section" px="20px" pt="99px" pb="93px">
            <Box maxW="1200px" mx="auto" w="100%" pos="relative">
                <Box
                    as={Swiper}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    freeMode={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    slidesPerView={1}
                    spaceBetween={27}
                    pos="initial"
                    speed={800}
                >
                    <Box className="swiper-button-next" right="-70px" color="#C3CBCD"></Box>
                    <Box className="swiper-button-prev" left="-70px" color="#C3CBCD"></Box>
                    <SwiperSlide>
                        <Frame />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Frame />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Frame />
                    </SwiperSlide>
                </Box>
            </Box>
        </Box>
    );
}
function Frame(): JSX.Element {
    return (
        <HStack spacing="55px" alignItems="center">
            <Box>
                <Image src="/assets/images/ParleDeCorrine/franceinfo.png" width={580} height={512} alt="Corrine il parmle en franceinfo" />
            </Box>
            <Box maxW="445px">
                <Text fontFamily="montserrat" fontWeight="800" fontSize="14px" lineHeight="18px" letterSpacing="0.4px" color="#811D65" mb="12px">
                    Ils parlent de Corinne cloix
                </Text>
                <Heading fontFamily="montserrat" fontWeight="500" fontSize="28px" lineHeight="34.13px" letterSpacing="0.2px" mb="40px">
                    Replay Radio : Prenez soin de vous. Allégez-vous en réfléchissant à vos émotions
                </Heading>
                <Text fontFamily="mulish" fontWeight="400" fontSize="16px" lineHeight="22px" letterSpacing="0.3px" color="#737B7D" mb="56px">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo
                    eripuit mentitum.
                </Text>
                <NextLink href="/a-propos" passHref>
                    <Button
                        as={Link}
                        rightIcon={<Group />}
                        iconSpacing="11px"
                        w="188px"
                        h="54px"
                        borderRadius="29px"
                        borderWidth="2px"
                        variant="outline"
                        borderColor="#811D65"
                        color="#811D65"
                        _hover={{ bg: '#fff' }}
                        _active={{ bg: '#fff' }}
                        fontFamily="montserrat"
                        fontWeight="700"
                        fontSize="14px"
                        lineHeight="18px"
                        letterSpacing="0.3px"
                    >
                        En savoir plus
                    </Button>
                </NextLink>
            </Box>
        </HStack>
    );
}
export default ParlentsCorrine;
