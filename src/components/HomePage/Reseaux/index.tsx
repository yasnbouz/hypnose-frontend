import { Flex, HStack, Heading, Text, Button, Link, SimpleGrid } from '@chakra-ui/react';
import FacebookIcon from '@/assets/HomePage/Reseaux/fb.svg';
import InstagramIcon from '@/assets/HomePage/Reseaux/ig.svg';
import YoutubeIcon from '@/assets/HomePage/Reseaux/yt.svg';

function Reseaux(): JSX.Element {
    return (
        <Flex as="section" px="20px" bg="#F7F1F6" pos="relative" zIndex="1" mt="-100px" py="58px">
            <Flex direction="column" spacing="0px" maxW="1200px" mx="auto" w="100%" justifyContent="center" alignItems="center" pt="140px">
                <Heading as="h2" fontFamily="montserrat" fontWeight="700" fontSize={['22px', null, null, '32px']} lineHeight="40px" color="#373F41" mb="9px">
                    Réseaux sociaux
                </Heading>
                <Text fontFamily="montserrat" fontWeight="400" fontSize="16px" lineHeight="22px" letterSpacing="0.3px" color="#737B7D" mb="80px" textAlign="center">
                    Retrouver nous sur nos réseaux sociaux pour plus de contenus
                </Text>
                <SimpleGrid columns={[1, null, 3]} spacingY="20px" spacingX="40px">
                    <Button
                        as={Link}
                        href="#"
                        leftIcon={<FacebookIcon />}
                        iconSpacing="6px"
                        p="0px"
                        pl="8px"
                        justifyContent="flex-start"
                        _hover={{ bg: 'white' }}
                        _active={{ bg: 'white' }}
                        w="221px"
                        h="74px"
                        borderRadius="56px"
                        bg="white"
                        fontFamily="montserrat"
                        fontWeight="500"
                        fontSize="16px"
                        lineHeight="22px"
                        letterSpacing="0.3px"
                        color="#373737"
                        filter="drop-shadow(2px 2px 17px rgba(0, 0, 0, 0.05))"
                    >
                        Facebook
                    </Button>

                    <Button
                        as={Link}
                        href="#"
                        leftIcon={<InstagramIcon />}
                        iconSpacing="6px"
                        p="0px"
                        pl="8px"
                        justifyContent="flex-start"
                        _hover={{ bg: 'white' }}
                        _active={{ bg: 'white' }}
                        w="221px"
                        h="74px"
                        borderRadius="56px"
                        bg="white"
                        fontFamily="montserrat"
                        fontWeight="500"
                        fontSize="16px"
                        lineHeight="22px"
                        letterSpacing="0.3px"
                        color="#373737"
                        filter="drop-shadow(2px 2px 17px rgba(0, 0, 0, 0.05))"
                    >
                        Instagram
                    </Button>

                    <Button
                        as={Link}
                        href="#"
                        leftIcon={<YoutubeIcon />}
                        iconSpacing="6px"
                        p="0px"
                        pl="8px"
                        justifyContent="flex-start"
                        _hover={{ bg: 'white' }}
                        _active={{ bg: 'white' }}
                        w="221px"
                        h="74px"
                        borderRadius="56px"
                        bg="white"
                        fontFamily="montserrat"
                        fontWeight="500"
                        fontSize="16px"
                        lineHeight="22px"
                        letterSpacing="0.3px"
                        color="#373737"
                        filter="drop-shadow(2px 2px 17px rgba(0, 0, 0, 0.05))"
                    >
                        Youtube
                    </Button>
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}

export default Reseaux;
