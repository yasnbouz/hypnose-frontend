import { Flex, Box, Text, Button, Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import Quote from '@/assets/HomePage/Corrine/quote.svg';
import ArrowRight from '@/assets/HomePage/PopularProducts/arrowRight.svg';
import Image from 'next/image';

function Corrine(): JSX.Element {
    return (
        <Flex as="section" px="20px" mt="65px">
            <Stack direction={['column', null, 'row']} spacing="20px" maxW="1100px" mx="auto" w="100%" justifyContent="space-between" alignItems="center">
                <Box w={['305.34px', null, null, '437px']}>
                    <Image src="/assets/images/Corrine/face-2x.png" width={437} height={468} quality={100} alt="corrine cloix face" />
                </Box>
                <Flex direction="column" alignItems={['center', null, 'flex-start']}>
                    <Box display={['none', null, null, 'initial']}>
                        <Quote />
                    </Box>
                    <Text
                        as="blockquote"
                        cite="http://localhost:8080/"
                        fontFamily="montserrat"
                        fontWeight="400"
                        fontSize={['14px', null, null, '16px']}
                        lineHeight={['22px', null, null, '25.18px']}
                        color="#373F41"
                        mb={['17px', null, null, '40px']}
                        maxW={['297px', null, '400px', '609px']}
                    >
                        “ Un grand merci à Corinne, pour cette belle expérience que je suis en train de vivre en ce moment! Je profite de ses séance grâce au télé travail et cela
                        m’est très bénéfique. J’en suis à ma deuxième séance et il y a déjà du changement… Oui il y a une vie avant et après l’hypnose, j’en suis convaincue aussi!
                        “
                    </Text>
                    <Text
                        as="time"
                        mb={['26.7px', null, null, '52.5px']}
                        display="block"
                        color="#737B7D"
                        fontFamily="montserrat"
                        fontWeight="600"
                        lineHeight="22px"
                        letterSpacing="0.1px"
                        fontSize={['14px', null, null, '16px']}
                        textAlign={['center', null, 'left']}
                    >
                        Nadine, avril 2020
                    </Text>

                    <NextLink href="/temoignages">
                        <Button
                            as={Link}
                            rightIcon={<ArrowRight />}
                            w="238px"
                            h="54px"
                            bg="#811D65"
                            _hover={{ bg: '#811D65' }}
                            _active={{ bg: '#811D65' }}
                            color="white"
                            fontFamily="montserrat"
                            fontWeight="700"
                            fontSize="14px"
                            lineHeight="18px"
                            letterSpacing="0.3px"
                            borderRadius="29px"
                        >
                            Plus de témoignages
                        </Button>
                    </NextLink>
                </Flex>
            </Stack>
        </Flex>
    );
}

export default Corrine;
