import Image from 'next/image';
import { Button, Link, Box, Text, Heading, SimpleGrid, AspectRatio } from '@chakra-ui/react';
import Group from '@/assets/HomePage/ParleDeCorrine/Group.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, Autoplay]);
type CardProps = {
    title: string;
    desciption: string;
    image: string;
    url: string;
};
const data: CardProps[] = [
    {
        title: 'Replay Radio : Prenez soin de vous. Allégez-vous en réfléchissant à vos émotions',
        desciption:
            'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',
        image: '/assets/images/ParleDeCorrine/franceinfo.png',
        url: 'https://www.francetvinfo.fr/replay-radio/prenez-soin-de-vous/prenez-soin-de-vous-allegez-vous-en-reflechissant-a-vos-emotions_3033237.html',
    },
    {
        title: 'Replay Radio : Dans la lumière - Corinne Cloix Maître praticienne en hypnose et écrivain',
        desciption: 'CORINNE CLOIX , Maître Praticienne en Hypnose et Écrivain , pour son livre : Les problèmes de poids . Enfin , les solutions !',
        image: '/assets/images/ParleDeCorrine/RCF.webp',
        url: 'https://rcf.fr/culture-et-societe/dans-la-lumiere?episode=121776',
    },
];

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
                    {data.map((item) => (
                        <SwiperSlide key={item.url}>
                            <Card {...item} />
                        </SwiperSlide>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

function Card(props: CardProps): JSX.Element {
    return (
        <SimpleGrid gridTemplateColumns={['1fr', null, '1fr 1fr']} alignItems="center" spacingY="30px" spacingX="55px">
            <AspectRatio borderRadius="10px" overflow="hidden" ratio={1}>
                <Image src={`${props.image}`} objectFit="cover" layout="fill" alt="Corrine parle en franceinfo" />
            </AspectRatio>

            <Box>
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
                    {props.title}
                </Heading>
                <Text fontFamily="montserrat" fontWeight="400" fontSize="16px" lineHeight="22px" letterSpacing="0.3px" color="#737B7D" mb="56px">
                    {props.desciption}
                </Text>

                <Button
                    as={Link}
                    href={props.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    rightIcon={<Group />}
                    iconSpacing="11px"
                    w="188px"
                    h="54px"
                    borderRadius="29px"
                    borderWidth="2px"
                    variant="outline"
                    borderColor="#811D65"
                    bg="white"
                    color="#811D65"
                    _hover={{ bg: '#811D65', color: 'white' }}
                    _active={{ bg: '#811D65', color: 'white' }}
                    fontFamily="montserrat"
                    fontWeight="700"
                    fontSize="14px"
                    lineHeight="18px"
                    letterSpacing="0.3px"
                >
                    En savoir plus
                </Button>
            </Box>
        </SimpleGrid>
    );
}
export default ParlentsCorrine;
