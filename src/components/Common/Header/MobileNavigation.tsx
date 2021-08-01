import {
    HStack,
    IconButton,
    VStack,
    Link,
    UnorderedList,
    ListItem,
    Flex,
    FlexProps,
    Text,
    Button,
    ListItemProps,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import { useState } from 'react';
import NextLink from 'next/link';
import CartIcon from '@/assets/HomePage/header/cart.svg';
import UKIcon from '@/assets/HomePage/header/uk.svg';
import FRIcon from '@/assets/HomePage/header/fr.svg';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import { TriangleDownIcon } from '@chakra-ui/icons';

const MotionFlex = motion<FlexProps>(Flex);
const MotionListItem = motion<ListItemProps>(ListItem);
function MobileNavigation(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

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
                    <Box pos="relative" zIndex="100">
                        <Hamburger size={26} toggled={isOpen} toggle={setIsOpen} />
                    </Box>
                </ListItem>
            </HStack>
            <MenuNav isOpen={isOpen} />
        </>
    );
}
const menuNavVariant = {
    open: {
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        margin: 0,
        transition: {
            duration: 0.4,
            staggerChildren: 0.125,
        },
    },
    closed: {
        clipPath: 'polygon(0 0, 100% 0%, 100% 0%, 0 0%)',
        margin: 0,
        transition: {
            duration: 0.4,
        },
    },
};
const listItemVariant = {
    open: {
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
    closed: {
        opacity: 0,
        transition: {
            duration: 0.4,
        },
    },
};
function MenuNav({ isOpen }: { isOpen: boolean }) {
    const router = useRouter();
    const isFrench = () => {
        if (router.locale === 'fr') {
            return true;
        } else if (router.locale === 'en') {
            return false;
        }
    };
    const isActive = (href: string) => {
        if (router.pathname === href) {
            return true;
        }
        return false;
    };
    return (
        <MotionFlex
            initial={'closed'}
            animate={isOpen ? 'open' : 'closed'}
            variants={menuNavVariant}
            as="nav"
            position="absolute"
            zIndex="99"
            top="88px"
            left="0"
            bg="#EFDAE8"
            display={['flex', 'flex', 'flex', 'none']}
            height="calc(100vh - 88px)"
            width="calc(100vw - 8px)"
            justifyContent="center"
            alignItems="center"
        >
            <VStack as={UnorderedList} spacing="32px" listStyleType="none" maxW="233px">
                <MotionListItem variants={listItemVariant}>
                    <NextLink href="/" passHref>
                        <Button
                            as={Link}
                            variant="link"
                            leftIcon={isActive('/') ? <TriangleDownIcon color="#811D65" boxSize="9px" transform="rotate(-90deg)" /> : undefined}
                            fontWeight={isActive('/') ? '700' : '500'}
                            color={isActive('/') ? '#51003A' : '#000000'}
                            fontSize="18px"
                            fontFamily="montserrat"
                        >
                            Accueil
                        </Button>
                    </NextLink>
                </MotionListItem>
                <MotionListItem variants={listItemVariant}>
                    <NextLink href="/boutique" passHref>
                        <Button
                            as={Link}
                            variant="link"
                            leftIcon={isActive('/boutique') ? <TriangleDownIcon color="#811D65" boxSize="9px" transform="rotate(-90deg)" /> : undefined}
                            fontWeight={isActive('/boutique') ? '700' : '500'}
                            color={isActive('/boutique') ? '#51003A' : '#000000'}
                            fontFamily="montserrat"
                            fontSize="18px"
                        >
                            Boutique
                        </Button>
                    </NextLink>
                </MotionListItem>
                <MotionListItem variants={listItemVariant} outline="0" zIndex="2">
                    <Accordion allowToggle borderColor="transparent">
                        <AccordionItem textAlign="center">
                            <h2>
                                <AccordionButton
                                    bg="#EFDAE8"
                                    padding="0"
                                    fontFamily="montserrat"
                                    fontWeight="500"
                                    fontSize="18px"
                                    _hover={{ bg: '#EFDAE8' }}
                                    _expanded={{ bg: '#EFDAE8' }}
                                    _active={{ bg: '#EFDAE8' }}
                                    _focus={{ boxShadow: 'outline' }}
                                >
                                    <Box flex="1" textAlign="left">
                                        Qui est Corrine Cloix ?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pt="32px">
                                <NextLink href="/a-propos" passHref>
                                    <Button
                                        as={Link}
                                        variant="link"
                                        fontFamily="montserrat"
                                        fontWeight={isActive('/a-propos') ? '600' : '500'}
                                        color={isActive('/a-propos') ? '#51003A' : '#000000'}
                                        leftIcon={isActive('/a-propos') ? <TriangleDownIcon color="#811D65" boxSize="9px" transform="rotate(-90deg)" /> : undefined}
                                        fontSize="18px"
                                        _hover={{ bg: '#efdae885' }}
                                        _focus={{ bg: '#efdae885' }}
                                    >
                                        A Propos
                                    </Button>
                                </NextLink>
                            </AccordionPanel>
                            <AccordionPanel pb="0">
                                <NextLink href="/temoignages" passHref>
                                    <Button
                                        as={Link}
                                        variant="link"
                                        fontFamily="montserrat"
                                        fontWeight={isActive('/temoignages') ? '600' : '500'}
                                        leftIcon={isActive('/temoignages') ? <TriangleDownIcon color="#811D65" boxSize="9px" transform="rotate(-90deg)" /> : undefined}
                                        color={isActive('/temoignages') ? '#51003A' : '#000000'}
                                        fontSize="18px"
                                        _hover={{ bg: '#efdae885' }}
                                        _focus={{ bg: '#efdae885' }}
                                    >
                                        Temoignages
                                    </Button>
                                </NextLink>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </MotionListItem>
                <MotionListItem variants={listItemVariant}>
                    <NextLink href="/contact" passHref>
                        <Button
                            as={Link}
                            variant="link"
                            leftIcon={isActive('/contact') ? <TriangleDownIcon color="#811D65" boxSize="9px" transform="rotate(-90deg)" /> : undefined}
                            fontFamily="montserrat"
                            fontWeight={isActive('/contact') ? '700' : '500'}
                            color={isActive('/contact') ? '#51003A' : '#000000'}
                            fontSize="18px"
                        >
                            Contact
                        </Button>
                    </NextLink>
                </MotionListItem>
                <MotionListItem variants={listItemVariant}>
                    <NextLink href="/compte" passHref>
                        <Button
                            as={Link}
                            variant="link"
                            leftIcon={isActive('/compte') ? <TriangleDownIcon color="#811D65" boxSize="9px" transform="rotate(-90deg)" /> : undefined}
                            fontFamily="montserrat"
                            fontWeight={isActive('/compte') ? '700' : '500'}
                            color={isActive('/compte') ? '#51003A' : '#000000'}
                            fontSize="18px"
                        >
                            Mon Compte
                        </Button>
                    </NextLink>
                </MotionListItem>
                <MotionListItem variants={listItemVariant}>
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
                                _hover={{ border: 0 }}
                            />
                        </NextLink>
                    </HStack>
                </MotionListItem>
            </VStack>
        </MotionFlex>
    );
}
export default MobileNavigation;
