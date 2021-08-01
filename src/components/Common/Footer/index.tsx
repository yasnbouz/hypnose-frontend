import { VStack, Text, Link, Grid } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import Logo from '/public/logo-tranp.png';
function Footer(): JSX.Element {
    return (
        <VStack as="footer" px="20px" bg="#51003A" pt="69px" pb="32px">
            <Grid templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(4,1fr)']} gap="40px" maxW="1100px" mx="auto" w="100%">
                <VStack alignItems={['center', 'flex-start']} spacing="19px">
                    <Image src={Logo} width={194} height={30} alt="Corrine Cloix logo" />
                    <Text maxW="184px" fontFamily="montserrat" fontWeight="400" fontSize="14px" lineHeight="20px" color="white">
                        Le meilleur de l’hypnose où et quand vous voulez.
                    </Text>
                </VStack>
                <VStack alignItems={['center', 'flex-start']} spacing="8px">
                    <NextLink href="/#">
                        <Link fontFamily="montserrat" fontWeight="700" fontSize="14px" lineHeight="20px" color="#fff" pb="8px">
                            Boutique
                        </Link>
                    </NextLink>
                    <NextLink href="/#">
                        <Link fontFamily="montserrat" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            Packs
                        </Link>
                    </NextLink>
                    <NextLink href="/#">
                        <Link fontFamily="montserrat" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            Livres et ebooks
                        </Link>
                    </NextLink>
                    <NextLink href="/#">
                        <Link fontFamily="montserrat" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            Livres et ebooks
                        </Link>
                    </NextLink>
                </VStack>
                <VStack alignItems={['center', 'flex-start']}>
                    <NextLink href="/#">
                        <Link fontFamily="montserrat" fontWeight="700" fontSize="14px" lineHeight="20px" color="#fff" pb="8px">
                            Corinne Cloix
                        </Link>
                    </NextLink>
                    <NextLink href="/a-propos">
                        <Link fontFamily="montserrat" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            A propos
                        </Link>
                    </NextLink>
                    <NextLink href="/temoignages">
                        <Link fontFamily="montserrat" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            Témoignages
                        </Link>
                    </NextLink>
                </VStack>
                <VStack alignItems={['center', 'flex-start']}>
                    <NextLink href="/#">
                        <Link fontFamily="montserrat" fontWeight="700" fontSize="14px" lineHeight="20px" color="#fff" pb="8px">
                            Réseaux sociaux
                        </Link>
                    </NextLink>

                    <Link
                        href="https://www.facebook.com/cloixcorinne/"
                        rel="noopener noreferrer"
                        target="_blank"
                        fontFamily="montserrat"
                        fontWeight="400"
                        fontSize="14px"
                        lineHeight="20px"
                        color="#fff"
                    >
                        Facebook
                    </Link>

                    <Link
                        href="https://www.instagram.com/corinnecloix/"
                        rel="noopener noreferrer"
                        target="_blank"
                        fontFamily="montserrat"
                        fontWeight="400"
                        fontSize="14px"
                        lineHeight="20px"
                        color="#fff"
                    >
                        Instagram
                    </Link>

                    <Link
                        href="https://www.youtube.com/channel/UCUJjsN7IPUi_xIjo_UKdePQ/"
                        rel="noopener noreferrer"
                        target="_blank"
                        fontFamily="montserrat"
                        fontWeight="400"
                        fontSize="14px"
                        lineHeight="20px"
                        color="#fff"
                    >
                        Youtube
                    </Link>
                </VStack>
            </Grid>
            <Text as="p" fontFamily="montserrat" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff" textAlign="center" pt="105px">
                Copyright &copy; {new Date().getFullYear()} Corinne Cloix. All rights reserved.
            </Text>
        </VStack>
    );
}

export default Footer;
