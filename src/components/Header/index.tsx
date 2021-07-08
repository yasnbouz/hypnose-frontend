import { Flex, Box, HStack } from '@chakra-ui/react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import NextLink from 'next/link';
import Logo from '../../../public/logo.svg';

function Header(): JSX.Element {
    return (
        <Flex as="header" height="88px" alignItems="center" px="20px" position="relative" zIndex="99">
            <HStack maxWidth={1200} w="100%" margin="auto" justifyContent="space-between" alignItems="center" spacing={0}>
                <Box width={['148px', '194px']} height={['22px', '29px']} minW="148px">
                    <NextLink href="/" passHref>
                        <a>
                            <Logo />
                        </a>
                    </NextLink>
                </Box>
                <Navigation />
                <MobileNavigation />
            </HStack>
        </Flex>
    );
}

export default Header;
