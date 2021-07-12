import { Box, Flex, Heading, Text, Link, VStack, List, ListItem, ListIcon, Button, Stack } from '@chakra-ui/react';
import Frame from '@/assets/HomePage/Problematique/frame.svg';
import Ebook from '@/assets/HomePage/Problematique/ebook.svg';
import HeadPhone from '@/assets/HomePage/Problematique/headphone.svg';
import Greet from '@/assets/HomePage/Problematique/hi.svg';
import NextLink from 'next/link';
import ArrowRightIcon from '@/assets/HomePage/PopularProducts/arrowRight.svg';

function Problems(): JSX.Element {
    return (
        <Flex as="section" px="20px" pt="119px">
            <Stack direction={['column', null, null, 'row-reverse']} spacing="26px" maxW="1200px" w="100%" mx="auto" alignItems="center" justifyContent="space-between">
                <Box minW={['309px', null, '400px']} w={['309px', '450px', null, '100%']} maxW={['603px', null, null, '603px']}>
                    <Frame />
                </Box>
                <VStack spacing={['26px', null, null, '33px']} flex="0 0 540px" alignItems="flex-start" maxW={['311px', '450px', null, '540px']}>
                    <Heading fontFamily="montserrat" fontWeight="700" fontSize={['22px', null, null, '32px']} lineHeight={['26.82px', null, null, '40px']} color="#373F41">
                        Résolvez vos problèmes et atteignez vos objectifs
                    </Heading>
                    <Text fontFamily="mulish" fontWeight="400" fontSize={['14px', null, null, '16px']} lineHeight="22px" color="#737B7D">
                        Je suis Corinne Cloix , Maître Praticienne en Hypnose et Écrivain, et je vous propose le meilleur de l’hypnose où et quand vous voulez.
                    </Text>
                    <List spacing={['26px', null, null, '33px']}>
                        <ListItem display="flex" maxW="361px" alignItems="center">
                            <ListIcon boxSize="40px" as={HeadPhone} mr="16px" />
                            <Text
                                fontFamily="montserrat"
                                fontWeight="400"
                                fontSize={['14px', null, null, '13px']}
                                lineHeight={['18.64px', null, null, '22px']}
                                letterSpacing="0.3px"
                                color="#737B7D"
                            >
                                Des séances MP3 pour le poids, bien-être, réussite, amour, enfants et ados. À petit prix.
                            </Text>
                        </ListItem>
                        <ListItem display="flex" maxW="361px">
                            <ListIcon boxSize="40px" as={Ebook} mr="16px" />
                            <Text fontFamily="montserrat" fontWeight="400" fontSize={['14px', null, null, '13px']} letterSpacing="0.3px" color="#737B7D">
                                Des livres au format numérique et papier dédicacé et expédié gratuitement chez vous.
                            </Text>
                        </ListItem>
                        <ListItem display="flex" maxW="361px">
                            <ListIcon boxSize="40px" as={Greet} mr="16px" />
                            <Text fontFamily="montserrat" fontWeight="400" lineHeight={['18.64px', null, null, '22px']} letterSpacing="0.3px" color="#737B7D">
                                Des séances d’hypnose en cabinet ou à distance.
                            </Text>
                        </ListItem>
                    </List>
                    <NextLink href="/#propos" passHref>
                        <Button
                            rightIcon={<ArrowRightIcon />}
                            as={Link}
                            iconSpacing={'11px'}
                            variant="link"
                            fontFamily="montserrat"
                            fontWeight="700"
                            fontSize="14px"
                            lineHeight="18px"
                            letterSpacing="0.3px"
                            color="#811D65"
                            textAlign="center"
                            borderRadius={0}
                            pb="11px"
                            pt="17px"
                            borderBottom="2px solid #811D65"
                        >
                            Mon histoire
                        </Button>
                    </NextLink>
                </VStack>
            </Stack>
        </Flex>
    );
}

export default Problems;
