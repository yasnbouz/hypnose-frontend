import { Flex, Box } from '@chakra-ui/react';
import Category from './Category';
import PoidsVector from '@/assets/HomePage/Categories/poids.svg';
import AmourVector from '@/assets/HomePage/Categories/amour.svg';
import BienVector from '@/assets/HomePage/Categories/bien.svg';
import ReuusiteVector from '@/assets/HomePage/Categories/reussite.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade, Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, EffectFade, Autoplay]);

function Categories(): JSX.Element {
    return (
        <Flex as="section" px="20px" my="119px">
            <Box maxW="1200px" w="100%" mx="auto" pos="relative">
                <Box
                    as={Swiper}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    freeMode={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    slidesPerView={4}
                    spaceBetween={27}
                    pos="initial"
                >
                    <Box className="swiper-button-next" right="-70px" color="#C3CBCD"></Box>
                    <Box className="swiper-button-prev" left="-70px" color="#C3CBCD"></Box>
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
