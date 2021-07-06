import {
    HStack,
    Link,
    IconButton,
    UnorderedList,
    ListItem,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import CartIcon from '@/assets/header/cart.svg';
import UKIcon from '@/assets/header/uk.svg';
import { useRouter } from 'next/router';

function Navigation(): JSX.Element {
    const router = useRouter();
    const isActive = (href: string) => {
        if (router.pathname === href) {
            return true;
        }
        return false;
    };
    return (
        <HStack
            as="nav"
            spacing="22px"
            display={['none', 'none', 'none', 'flex']}
        >
            <HStack as={UnorderedList} listStyleType="none" spacing="32px">
                <ListItem>
                    <NextLink href="/" passHref>
                        <Link
                            fontFamily="montserrat"
                            fontSize="14px"
                            lineHeight="18px"
                            fontWeight={isActive('/') ? '700' : '500'}
                            color={isActive('/') ? '#51003A' : '#000000'}
                        >
                            Accueil
                        </Link>
                    </NextLink>
                </ListItem>
                <ListItem>
                    <NextLink href="/boutique" passHref>
                        <Link
                            fontFamily="montserrat"
                            fontSize="14px"
                            lineHeight="18px"
                            fontWeight={isActive('/boutique') ? '700' : '500'}
                            color={
                                isActive('/boutique') ? '#51003A' : '#000000'
                            }
                        >
                            Boutique
                        </Link>
                    </NextLink>
                </ListItem>
                <ListItem>
                    <Menu id="Corrine_Cloix" isLazy={true}>
                        <MenuButton
                            bg="white"
                            fontFamily="montserrat"
                            fontSize="14px"
                            lineHeight="18px"
                            fontWeight="500"
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            padding="0"
                            _hover={{ bg: '#ffffff' }}
                            _expanded={{ bg: '#ffffff' }}
                            _active={{ bg: '#ffffff' }}
                            _focus={{ boxShadow: 'outline' }}
                        >
                            Qui est Corrine Cloix ?
                        </MenuButton>
                        <MenuList>
                            <NextLink href="/#propos" passHref>
                                <MenuItem
                                    fontFamily="montserrat"
                                    fontSize="14px"
                                    lineHeight="18px"
                                    fontWeight="500"
                                    _hover={{ bg: '#efdae885' }}
                                    _focus={{ bg: '#efdae885' }}
                                >
                                    A Propos
                                </MenuItem>
                            </NextLink>
                            <NextLink href="/#temoignages" passHref>
                                <MenuItem
                                    fontFamily="montserrat"
                                    fontSize="14px"
                                    lineHeight="18px"
                                    fontWeight="500"
                                    _hover={{ bg: '#efdae885' }}
                                    _focus={{ bg: '#efdae885' }}
                                >
                                    Temoignages
                                </MenuItem>
                            </NextLink>
                        </MenuList>
                    </Menu>
                </ListItem>
                <ListItem>
                    <NextLink href="/contact" passHref>
                        <Link
                            fontFamily="montserrat"
                            fontSize="14px"
                            lineHeight="18px"
                            fontWeight={isActive('/contact') ? '700' : '500'}
                            color={isActive('/contact') ? '#51003A' : '#000000'}
                            textDecorationStyle="unset"
                        >
                            Contact
                        </Link>
                    </NextLink>
                </ListItem>
            </HStack>
            <HStack as={UnorderedList} listStyleType="none" spacing="10px">
                <ListItem>
                    <NextLink href="/compte" passHref>
                        <Link
                            variant="outline"
                            color="#51003A"
                            borderRadius="29px"
                            border="2px"
                            borderColor="#EFDAE8"
                            _hover={{ bg: '#EFDAE8' }}
                            fontFamily="montserrat"
                            fontSize="14px"
                            lineHeight="18px"
                            fontWeight={isActive('/compte') ? '700' : '500'}
                            width="144px"
                            height="42px"
                            display="inline-flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            Mon compte
                        </Link>
                    </NextLink>
                </ListItem>
                <ListItem>
                    <NextLink href="/panier" passHref>
                        <IconButton
                            as={Link}
                            aria-label="go your cart"
                            width="42px"
                            height="42px"
                            bg="#EFDAE8"
                            _hover={{ bg: '#EFDAE8' }}
                            icon={<CartIcon />}
                            isRound
                        />
                    </NextLink>
                </ListItem>
                <ListItem>
                    <IconButton
                        aria-label="select a language"
                        width="35px"
                        height="34px"
                        icon={<UKIcon />}
                        isRound
                        variant="unstyled"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    />
                </ListItem>
            </HStack>
        </HStack>
    );
}

export default Navigation;
