import { VStack, Text, Link, Grid } from '@chakra-ui/react';
import NextLink from 'next/link';
import Logo from '@/assets/Footer/whiteLogo.svg';
function Footer(): JSX.Element {
    return (
        <VStack as="footer" px="20px" bg="#51003A" pt="69px" pb="32px">
            <Grid templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(4,1fr)']} gap="40px" maxW="1200px" mx="auto" w="100%">
                <VStack alignItems={['center', 'flex-start']} spacing="19px">
                    <Logo />
                    <Text maxW="184px" fontFamily="arial" fontWeight="400" fontSize="14px" lineHeight="20px" color="white">
                        Le meilleur de l’hypnose où et quand vous voulez.
                    </Text>
                </VStack>
                <VStack alignItems={['center', 'flex-start']} spacing="8px">
                    <NextLink href="/#">
                        <Link fontFamily="arial" fontWeight="700" fontSize="14px" lineHeight="20px" color="#fff" pb="8px">
                            Boutique
                        </Link>
                    </NextLink>
                    <NextLink href="/#">
                        <Link fontFamily="arial" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            Packs
                        </Link>
                    </NextLink>
                    <NextLink href="/#">
                        <Link fontFamily="arial" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            Livres et ebooks
                        </Link>
                    </NextLink>
                    <NextLink href="/#">
                        <Link fontFamily="arial" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            Livres et ebooks
                        </Link>
                    </NextLink>
                </VStack>
                <VStack alignItems={['center', 'flex-start']}>
                    <NextLink href="/#">
                        <Link fontFamily="arial" fontWeight="700" fontSize="14px" lineHeight="20px" color="#fff" pb="8px">
                            Corinne Cloix
                        </Link>
                    </NextLink>
                    <NextLink href="/#">
                        <Link fontFamily="arial" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            A propos
                        </Link>
                    </NextLink>
                    <NextLink href="/#">
                        <Link fontFamily="arial" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            Témoignages
                        </Link>
                    </NextLink>
                </VStack>
                <VStack alignItems={['center', 'flex-start']}>
                    <NextLink href="/#">
                        <Link fontFamily="arial" fontWeight="700" fontSize="14px" lineHeight="20px" color="#fff" pb="8px">
                            Réseaux sociaux
                        </Link>
                    </NextLink>
                    <NextLink href="/#">
                        <Link fontFamily="arial" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            Facebook
                        </Link>
                    </NextLink>
                    <NextLink href="/#">
                        <Link fontFamily="arial" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            Instagram
                        </Link>
                    </NextLink>
                    <NextLink href="/#">
                        <Link fontFamily="arial" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff">
                            Youtube
                        </Link>
                    </NextLink>
                </VStack>
            </Grid>
            <Text as="p" fontFamily="arial" fontWeight="400" fontSize="14px" lineHeight="20px" color="#fff" textAlign="center" pt="105px">
                Copyright &copy; {new Date().getFullYear()} Corinne Cloix. All rights reserved.
            </Text>
        </VStack>
    );
}

export default Footer;
