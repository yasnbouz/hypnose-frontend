import { Flex, Box, HStack, Text, Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Quote from '@/assets/HomePage/Corrine/quote.svg';
import ArrowRight from '@/assets/HomePage/PopularProducts/arrowRight.svg';
import Image from 'next/image';

function Corrine(): JSX.Element {
    return (
        <Flex as="section" px="20px" mt="65px">
            <HStack maxW="1200px" mx="auto" w="100%" justifyContent="space-between" alignItems="center">
                <Box mb="28.57px">
                    <Image src="/assets/images/Corrine/face.png" width={437} height={468} quality={100} alt="corrine cloix face" />
                </Box>
                <Box>
                    <Quote />
                    <Text
                        as="blockquote"
                        cite="http://localhost:8080/"
                        fontFamily="montserrat"
                        fontWeight="400"
                        fontSize="16px"
                        lineHeight="25.18px"
                        color="#373F41"
                        mt="28.57px"
                        mb="40px"
                        maxW="609px"
                    >
                        “ Un grand merci à Corinne, pour cette belle expérience que je suis en train de vivre en ce moment! Je profite de ses séance grâce au télé travail et cela
                        m’est très bénéfique. J’en suis à ma deuxième séance et il y a déjà du changement… Oui il y a une vie avant et après l’hypnose, j’en suis convaincue aussi!
                        “
                    </Text>
                    <Text as="time" mb="52.5px" display="block" color="#737B7D" fontFamily="montserrat" fontWeight="600" lineHeight="22px" letterSpacing="0.1px" fontSize="16px">
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
                </Box>
            </HStack>
        </Flex>
    );
}

export default Corrine;
