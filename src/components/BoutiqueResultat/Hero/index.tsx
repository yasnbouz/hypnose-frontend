import { Box, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import Anime from '@/assets/BoutiqueResultat/Hero/anime.svg';

function Hero(): JSX.Element {
    return (
        <Flex as="section" minH="373px" bg="#F7F1F6" pos="relative" px="20px" overflow="hidden">
            <SimpleGrid
                gridTemplateColumns={['1fr', '1fr', '2fr 1fr']}
                justifyItems={['center', null, 'start']}
                alignItems="center"
                maxWidth="1100px"
                spacingY="17px"
                w="100%"
                margin="auto"
            >
                <Box order={[2, null, 1]}>
                    <Heading
                        as="h1"
                        fontFamily="montserrat"
                        fontWeight="500"
                        fontSize="18px"
                        lineHeight="40px"
                        color="#060606"
                        maxW="285px"
                        textAlign={['center', null, 'left']}
                        mb={['4px', null, null, '9px']}
                    >
                        Je veux perdre du poids
                    </Heading>
                    <Text
                        fontFamily="montserrat"
                        color="#4A4A4A"
                        fontSize="13px"
                        textAlign={['center', null, 'left']}
                        lineHeight="22px"
                        fontWeight="400"
                        maxW={['285px', null, null, '451px']}
                        mb={['53px']}
                    >
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                        nostrud amet.
                    </Text>
                </Box>
                <Box order={[1, null, 2]} w={['203px', null, '255px']} h={['206px', null, '260px']} justifySelf={[null, null, null, 'end']}>
                    <Anime />
                </Box>
            </SimpleGrid>
        </Flex>
    );
}

export default Hero;
