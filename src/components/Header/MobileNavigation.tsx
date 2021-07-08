import { HStack, IconButton, VStack, Link, UnorderedList, ListItem, Flex, Text, Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { useState } from 'react';
import NextLink from 'next/link';
import CartIcon from '@/assets/header/cart.svg';
import BurgerIcon from '@/assets/header/burger.svg';
import CloseIcon from '@/assets/header/close.svg';
import UKIcon from '@/assets/header/uk.svg';
import FRIcon from '@/assets/header/fr.svg';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

function MobileNavigation(): JSX.Element {
    const [open, setOpen] = useState(false);
    const Icon = open ? <CloseIcon /> : <BurgerIcon />;
    const handleMenuClick = () => {
        setOpen((prevState) => !prevState);
    };
    return (
        <>
            <HStack as={UnorderedList} listStyleType="none" display={['flex', 'flex', 'flex', 'none']} w="79px">
                <ListItem>
                    <NextLink href="/panier" passHref>
                        <IconButton
                            as={Link}
                            aria-label="open your cart"
                            width="40px"
                            height="40px"
                            bg="#EFDAE8"
                            _hover={{ bg: '#EFDAE8' }}
                            _active={{ bg: '#EFDAE8' }}
                            icon={<CartIcon />}
                            isRound
                        />
                    </NextLink>
                </ListItem>
                <ListItem>
                    <IconButton
                        aria-label="open menu"
                        width="40px"
                        height="40px"
                        isRound
                        variant="ghost"
                        _hover={{ bg: '#EFDAE8' }}
                        _active={{ bg: '#EFDAE8' }}
                        icon={Icon}
                        onClick={handleMenuClick}
                    />
                </ListItem>
            </HStack>
            {open ? <MenuNav /> : null}
        </>
    );
}
function MenuNav() {
    const router = useRouter();
    const isFrench = () => {
        if (router.locale === 'fr') {
            return true;
        } else if (router.locale === 'en') {
            return false;
        }
    };
    return (
        <Flex
            as="nav"
            position="absolute"
            zIndex="99"
            bg="#EFDAE8"
            top="100%"
            left={0}
            display={['flex', 'flex', 'flex', 'none']}
            height="80vh"
            width="100%"
            justifyContent="center"
            alignItems="center"
        >
            <VStack as={UnorderedList} spacing="32px" listStyleType="none" maxW="233px">
                <ListItem>
                    <NextLink href="/" passHref>
                        <Link color="#000000" fontWeight="700" fontSize="18px" fontFamily="montserrat">
                            Accueil
                        </Link>
                    </NextLink>
                </ListItem>
                <ListItem>
                    <NextLink href="/boutique" passHref>
                        <Link color="#000000" fontFamily="montserrat" fontWeight="500" fontSize="18px">
                            Boutique
                        </Link>
                    </NextLink>
                </ListItem>
                <ListItem>
                    <Menu isLazy={true}>
                        <MenuButton
                            bg="#EFDAE8"
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            padding="0"
                            fontFamily="montserrat"
                            fontWeight="500"
                            fontSize="18px"
                            _hover={{ bg: '#EFDAE8' }}
                            _expanded={{ bg: '#EFDAE8' }}
                            _active={{ bg: '#EFDAE8' }}
                            _focus={{ boxShadow: 'outline' }}
                        >
                            Qui est Corrine Cloix ?
                        </MenuButton>
                        <MenuList>
                            <NextLink href="/#propos" passHref>
                                <MenuItem fontFamily="montserrat" fontWeight="500" fontSize="18px" _hover={{ bg: '#efdae885' }} _focus={{ bg: '#efdae885' }}>
                                    A Propos
                                </MenuItem>
                            </NextLink>
                            <NextLink href="/#temoignages" passHref>
                                <MenuItem fontFamily="montserrat" fontWeight="500" fontSize="18px" _hover={{ bg: '#efdae885' }} _focus={{ bg: '#efdae885' }}>
                                    Temoignages
                                </MenuItem>
                            </NextLink>
                        </MenuList>
                    </Menu>
                </ListItem>
                <ListItem>
                    <NextLink href="/contact" passHref>
                        <Link color="#000000" fontFamily="montserrat" fontWeight="500" fontSize="18px">
                            Contact
                        </Link>
                    </NextLink>
                </ListItem>
                <ListItem>
                    <NextLink href="/compte" passHref>
                        <Link color="#000000" fontFamily="montserrat" fontWeight="500" fontSize="18px">
                            Mon Compte
                        </Link>
                    </NextLink>
                </ListItem>
                <ListItem>
                    <HStack>
                        <Text fontFamily="montserrat" fontWeight="500" fontSize="18px">
                            Langue:
                        </Text>
                        <NextLink href={router.pathname} locale={isFrench() ? 'en' : 'fr'}>
                            <IconButton
                                as={Link}
                                aria-label="select a language"
                                width="35px"
                                height="34px"
                                icon={isFrench() ? <UKIcon /> : <FRIcon />}
                                isRound
                                variant="ghost"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="2px solid #F0F0F0"
                            />
                        </NextLink>
                    </HStack>
                </ListItem>
            </VStack>
        </Flex>
    );
}
export default MobileNavigation;
