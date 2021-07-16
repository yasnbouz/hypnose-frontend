import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import Pack, { PackProps } from './Pack';
import Pack1 from '@/assets/BoutiquePage/Packs/pack1.svg';
import Pack2 from '@/assets/BoutiquePage/Packs/pack2.svg';
import Pack3 from '@/assets/BoutiquePage/Packs/pack3.svg';
import Pack4 from '@/assets/BoutiquePage/Packs/pack4.svg';
SwiperCore.use([Navigation, Autoplay]);

const data: PackProps[] = [
    {
        name: 'Pack Légèreté',
        category: 'Poids',
        avis: 10,
        price: 'A partir de 29,90€',
        oldPrice: 'au lieu de 29,90€',
    },
    {
        name: 'Pack Sérénité',
        category: 'Poids',
        avis: 10,
        price: 'A partir de 29,90€',
        oldPrice: 'au lieu de 29,90€',
    },
    {
        name: 'Pack Summer Body',
        category: 'Poids',
        avis: 10,
        price: 'A partir de 29,90€',
        oldPrice: 'au lieu de 29,90€',
    },
    {
        name: 'Pack Stop tabac',
        category: 'Poids',
        avis: 10,
        price: 'A partir de 29,90€',
        oldPrice: 'au lieu de 29,90€',
    },
];

function Packs(): JSX.Element {
    return (
        <Flex as="section" px="20px" pt={['56px', null, null, '63px']} overflow="hidden">
            <Box maxW="1100px" w="100%" mx="auto">
                <Box mb={['29.73px', null, null, '10px']}>
                    <Heading
                        as="h2"
                        fontFamily="montserrat"
                        fontWeight="700"
                        fontSize={['22px', null, null, '32px']}
                        lineHeight={['29.79px', null, null, '40px']}
                        textAlign={['center', null, null, 'left']}
                        color="#373F41"
                        mb={['0px', null, null, '9px']}
                    >
                        Découvrez nos Packs
                    </Heading>
                    <Text
                        as="h2"
                        fontFamily="montserrat"
                        fontWeight="400"
                        fontSize={['13px', null, null, '16px']}
                        lineHeight={'22px'}
                        letterSpacing="0.3px"
                        textAlign={['center', null, null, 'left']}
                        color="#737B7D"
                    >
                        nouveaux packs hypnose exclusifs !
                    </Text>
                </Box>
                <Box
                    as={Swiper}
                    p="30px 0"
                    overflow="visible"
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    freeMode={true}
                    breakpoints={{
                        580: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Pack {...data[0]}>
                            <Pack1 />
                        </Pack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Pack {...data[1]}>
                            <Pack2 />
                        </Pack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Pack {...data[2]}>
                            <Pack3 />
                        </Pack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Pack {...data[3]}>
                            <Pack4 />
                        </Pack>
                    </SwiperSlide>
                </Box>
            </Box>
        </Flex>
    );
}

export default Packs;
