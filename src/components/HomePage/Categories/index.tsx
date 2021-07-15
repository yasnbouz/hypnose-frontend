import { Flex, Box } from '@chakra-ui/react';
import Category from './Category';
import PoidsVector from '@/assets/HomePage/Categories/poids.svg';
import AmourVector from '@/assets/HomePage/Categories/amour.svg';
import BienVector from '@/assets/HomePage/Categories/bien.svg';
import ReuusiteVector from '@/assets/HomePage/Categories/reussite.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, Autoplay]);

function Categories(): JSX.Element {
    return (
        <Flex as="section" px="20px" pt={['20px', null, null, '96px']}>
            <Box maxW="1100px" w="100%" mx="auto" pos="relative">
                <Box
                    as={Swiper}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    freeMode={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    pos="initial"
                    breakpoints={{
                        580: {
                            slidesPerView: 2,
                            spaceBetween: 27,
                        },
                        898: {
                            slidesPerView: 3,
                            spaceBetween: 27,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 27,
                        },
                    }}
                >
                    <Box display={['none', null, null, null, 'block']} className="swiper-button-next" color="#C3CBCD" pos="absolute" right="-60px"></Box>
                    <Box display={['none', null, null, null, 'block']} className="swiper-button-prev" color="#C3CBCD" pos="absolute" left="-60px"></Box>
                    <SwiperSlide>
                        <Category name="Poids" description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.">
                            <PoidsVector />
                        </Category>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Category name="Bien-etre" description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.">
                            <BienVector />
                        </Category>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Category name="Réussite" description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.">
                            <ReuusiteVector />
                        </Category>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Category name="Amour" description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.">
                            <AmourVector />
                        </Category>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Category name="Poids" description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.">
                            <PoidsVector />
                        </Category>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Category name="Bien-etre" description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.">
                            <BienVector />
                        </Category>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Category name="Réussite" description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.">
                            <ReuusiteVector />
                        </Category>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Category name="Amour" description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.">
                            <AmourVector />
                        </Category>
                    </SwiperSlide>
                </Box>
            </Box>
        </Flex>
    );
}

export default Categories;
