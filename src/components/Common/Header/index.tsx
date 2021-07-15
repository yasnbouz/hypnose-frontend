import { Flex, Box, Link, HStack } from '@chakra-ui/react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import NextLink from 'next/link';
import Logo from '/public/logo.gif';
import Image from 'next/image';
function Header(): JSX.Element {
    return (
        <Flex as="header" height="88px" alignItems="center" px="30px" zIndex="100" w="100%" bg="white" position="sticky" top="0">
            <HStack maxW="1100px" mx="auto" w="100%" justifyContent="space-between">
                <Box width={['148px', '194px']} height={['22px', '29px']} minW="148px">
                    <NextLink href="/" passHref>
                        <Link>
                            <Image src={Logo} alt="Corrine Cloix logo" />
                        </Link>
                    </NextLink>
                </Box>
                <Navigation />
                <MobileNavigation />
            </HStack>
        </Flex>
    );
}

export default Header;
