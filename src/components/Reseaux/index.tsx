import { Flex, HStack, Heading, Text, Button, Link } from '@chakra-ui/react';
import FacebookIcon from '@/assets/Reseaux/fb.svg';
import InstagramIcon from '@/assets/Reseaux/ig.svg';
import YoutubeIcon from '@/assets/Reseaux/yt.svg';

function Reseaux(): JSX.Element {
    return (
        <Flex as="section" px="20px" bg="#F7F1F6" h="566px" pos="relative" zIndex="1" mt="-100px">
            <Flex direction="column" spacing="0px" maxW="1200px" mx="auto" w="100%" justifyContent="center" alignItems="center" pt="140px">
                <Heading fontFamily="montserrat" fontWeight="700" fontSize="32px" lineHeight="40px" color="#373F41" mb="9px">
                    Réseaux sociaux
                </Heading>
                <Text fontFamily="montserrat" fontWeight="400" fontSize="16px" lineHeight="22px" letterSpacing="0.3px" color="#737B7D" mb="80px">
                    Retrouver nous sur nos réseaux sociaux pour plus de contenus
                </Text>
                <HStack spacing="41px">
                    <Link>
                        <Button
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
                    </Link>
                    <Link>
                        <Button
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
                    </Link>
                    <Link>
                        <Button
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
                    </Link>
                </HStack>
            </Flex>
        </Flex>
    );
}

export default Reseaux;
