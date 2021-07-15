import Image from 'next/image';
import { Button, Link, Box, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import Group from '@/assets/HomePage/ParleDeCorrine/Group.svg';
import NextLink from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade, Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, EffectFade, Autoplay]);

function ParlentsCorrine(): JSX.Element {
    return (
        <Box as="section" px="20px" pt="99px" pb="93px">
            <Box maxW="1100px" mx="auto" w="100%" pos="relative">
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
                    <Box display={['none', null, null, null, 'block']} className="swiper-button-next" pos="absolute" right="-60px" color="#C3CBCD"></Box>
                    <Box display={['none', null, null, null, 'block']} className="swiper-button-prev" pos="absolute" left="-60px" color="#C3CBCD"></Box>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                </Box>
            </Box>
        </Box>
    );
}
function Card(): JSX.Element {
    return (
        <SimpleGrid gridTemplateRows={['auto 1fr']} gridTemplateColumns={['minmax(0,480px)', null, '1fr 1fr']} alignItems="center" spacingY="30px" spacingX="55px">
            <Box borderRadius="10px" overflow="hidden">
                <Image src="/assets/images/ParleDeCorrine/franceinfo.png" objectFit="cover" layout="intrinsic" width={580} height={512} alt="Corrine parle en franceinfo" />
            </Box>
            <Box maxW="465px">
                <Text fontFamily="montserrat" fontWeight="800" fontSize="14px" lineHeight="18px" letterSpacing="0.4px" color="#811D65" mb="12px">
                    Ils parlent de Corinne cloix
                </Text>
                <Heading
                    fontFamily="montserrat"
                    fontWeight="500"
                    fontSize={['22px', null, null, '28px']}
                    lineHeight={['26.82px', null, null, '34.13px']}
                    letterSpacing="0.2px"
                    mb={['30px', null, null, '40px']}
                >
                    Replay Radio : Prenez soin de vous. Allégez-vous en réfléchissant à vos émotions
                </Heading>
                <Text fontFamily="montserrat" fontWeight="400" fontSize="16px" lineHeight="22px" letterSpacing="0.3px" color="#737B7D" mb="56px">
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
        </SimpleGrid>
    );
}
export default ParlentsCorrine;
