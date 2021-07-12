import { Box, Heading, Text, Flex, Button, HStack, VStack, Tooltip, Badge, Link } from '@chakra-ui/react';
import Image from 'next/image';
import CartIcon from '@/assets/HomePage/header/cart.svg';
import { StarIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export type ProductProps = {
    image: string;
    type: 'Pack' | 'Séance MP3';
    name: string;
    slug: string;
    category: string;
    oldPrice: string;
    price: string;
    avis: number;
};
function Product(props: ProductProps): JSX.Element {
    return (
        <VStack spacing="11px" p="15px" bg="white" maxW="348px" borderRadius="10px" alignItems="stretch" boxShadow="-4px 4px 34px rgba(0, 0, 0, 0.1)">
            <Box pos="relative" cursor="pointer">
                <NextLink key={props.slug} href={`/boutique/${encodeURIComponent(props.category)}/${encodeURIComponent(props.slug)}`} passHref>
                    <Link _focus={{ outline: 'none' }}>
                        <Image src={props.image} width={318} height={268} objectFit="cover" alt={props.name} />
                    </Link>
                </NextLink>
                <Badge
                    pos="absolute"
                    top="15px"
                    right="18px"
                    fontFamily="montserrat"
                    fontWeight="700"
                    fontSize={['11px', null, null, '12px']}
                    lineHeight="22px"
                    letterSpacing="0.3px"
                    px="11px"
                    borderRadius="23px"
                    bg="rgba(255, 255, 255, 0.7)"
                    backdropFilter="blur(2px) contrast(0.7)"
                    textTransform="none"
                    color="#000000"
                >
                    {props.type}
                </Badge>
            </Box>
            <Tooltip label={props.name} placement="top">
                <Heading
                    as="h3"
                    color="#000000"
                    fontFamily="montserrat"
                    fontWeight="600"
                    fontSize={['14px', null, null, '16px']}
                    lineHeight={['17.07px', null, null, '22px']}
                    textAlign="left"
                    noOfLines={2}
                    cursor="pointer"
                >
                    <NextLink key={props.slug} href={`/boutique/${encodeURIComponent(props.slug)}`} passHref>
                        <Link>{props.name}</Link>
                    </NextLink>
                </Heading>
            </Tooltip>
            <Flex justifyContent="space-between" flex="1">
                <Box>
                    <Text fontFamily="montserrat" fontWeight="600" fontSize="12px" lineHeight="22px" letterSpacing="0.3px" color="#AAAAAA" textTransform="capitalize">
                        Objectif: {props.category}
                    </Text>
                    <HStack spacing="6px">
                        <HStack spacing="3px">
                            <StarIcon color="#F9B233" boxSize="12px" />
                            <StarIcon color="#F9B233" boxSize="12px" />
                            <StarIcon color="#F9B233" boxSize="12px" />
                            <StarIcon color="#F9B233" boxSize="12px" />
                            <StarIcon color="#F9B233" boxSize="12px" />
                        </HStack>
                        <Text fontFamily="montserrat" fontWeight="600" fontSize="11px" lineHeight="22px" color="#AAAAAA">
                            ({props.avis} avis)
                        </Text>
                    </HStack>
                </Box>
                <Box textAlign="right">
                    <Text fontFamily="montserrat" fontWeight="600" fontSize="12px" lineHeight="22px" letterSpacing="0.3px" color="#AAAAAA">
                        29,90€
                    </Text>
                    <Text fontFamily="montserrat" fontWeight="800" fontSize="16px" lineHeight="22px" letterSpacing="0.3px">
                        29,90€
                    </Text>
                </Box>
            </Flex>
            <Button
                isFullWidth
                leftIcon={<CartIcon />}
                borderRadius="29px"
                bg="#EFDAE8"
                _hover={{ bg: '#EFDAE8' }}
                _active={{ bg: '#EFDAE8' }}
                fontFamily="montserrat"
                fontWeight="700"
                fontSize={['12px', null, null, '14px']}
                color="51003A"
                lineHeight="18px"
                letterSpacing="0.3"
                h="54px"
            >
                Ajouter au panier
            </Button>
        </VStack>
    );
}

export default Product;
