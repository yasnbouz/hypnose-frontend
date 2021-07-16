import { Flex, Box, Heading, HStack, Text, VStack, Stack, Button, SimpleGrid, IconButton, BoxProps } from '@chakra-ui/react';
import Image from 'next/image';
// import livre from '../../../../public/assets/images/Livres/img1.png';
import { StarIcon } from '@chakra-ui/icons';
import CartIcon from '@/assets/HomePage/header/cart.svg';
import DownloadIcon from '@/assets/BoutiquePage/Livre/download.svg';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const livres = [
    {
        title: 'Révélation',
        description:
            'Il y a une vie avant, et une vie après avoir lu ce livre qui délivre tous les secrets pour être en paix, et ce qui fait le succès des séances de Corinne Cloix. Un livre profond, révélateur de qui nous sommes, qui fait du bien, qui rend conscient que tout est possible, qu’il y a de l’or dans nos mains, dans nos cœurs, et qu’on peut être en paix et heureux.',
        image: '/assets/images/Livres/img1.png',
    },
    {
        title: 'L’hypnose',
        description:
            'Allégez-vous ! Du poids dans le corps, du fardeau sur vos épaules, de ce cœur trop lourd, du poids de vos préoccupations.                   « Je sais bien que je ne dois pas faire cela mais c’est plus fort que moi, je ne peux pas m’en empêcher ». qui n’a pas déjà prononcé cette phrase alors qu’il voulait cesser un comportement, révélant ainsi un manque d’estime et de confiance en soi ?',
        image: '/assets/images/Livres/hypnose.webp',
    },
];
function Livres(): JSX.Element {
    const [currentLivre, setCurrentLivre] = useState(0);
    const [data] = useState(livres);
    const handleNextLivre = () => {
        setCurrentLivre((prev) => prev + 1);
    };
    const handlePrevLivre = () => {
        setCurrentLivre((prev) => prev - 1);
    };

    return (
        <Flex px="20px" bg={['#F7F1F6', null, null, 'none']} py={[null, null, null, '40px']} mb={['25px', null, null, null]} mt={['80px', null, null, '0px']}>
            <Box as="section" maxW="1100px" w="100%" mx="auto">
                <Heading as="h2" fontFamily="montserrat" fontWeight="700" fontSize="32px" lineHeight="40px" color="#373F41" mb="23px" display={['none', null, null, 'block']}>
                    Découvrez nos Livres
                </Heading>
                <SimpleGrid
                    as="article"
                    bg={['none', null, null, '#F7F1F6']}
                    borderRadius={['none', null, null, '25px']}
                    px={[null, '45px', null, '50px']}
                    py={['57px', null, null, '63px']}
                    gridTemplateColumns={['1fr', null, '1fr 1fr', '2fr 1fr']}
                    justifyItems={['center', null, 'start']}
                    alignItems="center"
                    spacingX="40px"
                    pos="relative"
                >
                    <Box
                        w={['258.48px', null, null, '310px']}
                        h={['386.88px', null, null, '464px']}
                        mt={['-100px', null, '0px']}
                        mb={['40px', null, '0px']}
                        pos="relative"
                        borderRadius="10px"
                        filter="drop-shadow(4px 4px 19px rgba(0, 0, 0, 0.15))"
                        order={[1, null, 2]}
                        justifySelf={[null, null, 'end']}
                        position={[null, null, null, 'absolute']}
                        right="57px"
                    >
                        <Image src={data[currentLivre].image} layout="fill" alt="livre" objectFit="cover" className="radii" />
                        <IconButton
                            icon={<ChevronLeftIcon boxSize={8} color="#811D65" />}
                            aria-label="go to previous livre"
                            position="absolute"
                            transform="translateY(-50%)"
                            left="-23px"
                            borderRadius="9999px"
                            top="50%"
                            boxSize="46px"
                            bg="white"
                            _hover={{ bg: 'white' }}
                            _active={{ bg: '#F7F1F6' }}
                            onClick={handlePrevLivre}
                            disabled={currentLivre === 0}
                        ></IconButton>
                        <IconButton
                            icon={<ChevronRightIcon boxSize={8} color="#811D65" />}
                            aria-label="return to next livre"
                            position="fixed"
                            transform="translateY(-50%)"
                            right="-23px"
                            top="50%"
                            boxSize="46px"
                            borderRadius="9999px"
                            bg="white"
                            _hover={{ bg: 'white' }}
                            _active={{ bg: '#F7F1F6' }}
                            onClick={handleNextLivre}
                            disabled={currentLivre === data.length - 1}
                        ></IconButton>
                    </Box>
                    <Box order={[2, null, 1]}>
                        <VStack alignItems={['center', null, 'flex-start']} spacing="2px" mb="26px">
                            <Heading as="h3" fontFamily="montserrat" fontWeight="600" fontSize="18px" lineHeight="18px" letterSpacing="0.3px" color="#000000">
                                {data[currentLivre].title}
                            </Heading>
                            <HStack spacing="6px">
                                <HStack spacing="3px">
                                    <StarIcon color="#F9B233" boxSize="12px" />
                                    <StarIcon color="#F9B233" boxSize="12px" />
                                    <StarIcon color="#F9B233" boxSize="12px" />
                                    <StarIcon color="#F9B233" boxSize="12px" />
                                    <StarIcon color="#F9B233" boxSize="12px" />
                                </HStack>
                                <Text fontFamily="montserrat" fontWeight="600" fontSize="11px" lineHeight="22px" color="#AAAAAA" textAlign="right">
                                    (10 avis)
                                </Text>
                            </HStack>
                        </VStack>
                        <Text
                            fontFamily="montserrat"
                            fontWeight="400"
                            fontSize="13px"
                            lineHeight="22px"
                            color="#000000"
                            maxW={['286px', null, null, '516px']}
                            mb={['60px', null, '40px']}
                        >
                            {data[currentLivre].description}
                        </Text>
                        <Stack w="100%" direction={['column', null, null, 'row']} alignItems="center" spacing="16px">
                            <Button
                                leftIcon={<CartIcon />}
                                iconSpacing="10px"
                                borderRadius="29px"
                                bg="#EFDAE8"
                                _hover={{ bg: '#EFDAE8' }}
                                _active={{ bg: '#EFDAE8' }}
                                fontFamily="montserrat"
                                fontWeight="700"
                                fontSize="14px"
                                color="#51003A"
                                lineHeight="18px"
                                letterSpacing="0.3"
                                h="54px"
                                w={['289px', null, null, 'auto']}
                                p="14px 27px"
                            >
                                Commander le livre papier
                            </Button>
                            <Button
                                leftIcon={<DownloadIcon />}
                                iconSpacing="10px"
                                borderRadius="29px"
                                bg="#EFDAE8"
                                _hover={{ bg: '#EFDAE8' }}
                                _active={{ bg: '#EFDAE8' }}
                                fontFamily="montserrat"
                                fontWeight="700"
                                fontSize="14px"
                                color="#51003A"
                                lineHeight="18px"
                                letterSpacing="0.3"
                                h="54px"
                                w={['289px', null, null, 'auto']}
                                p="14px 27px"
                            >
                                Télécharger l’ebook
                            </Button>
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Box>
        </Flex>
    );
}

export default Livres;
