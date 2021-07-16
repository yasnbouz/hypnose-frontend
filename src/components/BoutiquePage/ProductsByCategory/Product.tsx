import { Box, HStack, Heading, Text, Link, Button, VStack, Badge, Tooltip, AspectRatio } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@chakra-ui/icons';
import CartIcon from '@/assets/HomePage/header/cart.svg';

export type ProductProps = {
    image: string;
    type: string;
    name: string;
    slug: string;
    category: string;
    oldPrice: string;
    price: string;
    avis: number;
};
function Product(props: ProductProps): JSX.Element {
    return (
        <VStack spacing="11px" maxW="270px" overflow="hidden" alignItems="flex-start" borderRadius="4px" p="15px" boxShadow="-4px 4px 38px rgba(0, 0, 0, 0.1)">
            <Box pos="relative" borderRadius="10px" overflow="hidden" cursor="pointer" maxW="100%" w={['260px', null, null, '244px']} h={['170px', null, null, '174px']}>
                <NextLink href={`/boutique/${encodeURIComponent(props.category)}/${encodeURIComponent(props.slug)}`} passHref>
                    <Link>
                        <AspectRatio ratio={4 / 3}>
                            <Image src={props.image} objectFit="cover" layout="fill" alt={props.name} />
                        </AspectRatio>
                    </Link>
                </NextLink>
                <Badge
                    pos="absolute"
                    bg="#FFFFFFB2"
                    right="9px"
                    top="9px"
                    fontFamily="montserrat"
                    fontWeight="700"
                    fontSize="10px"
                    letterSpacing="0.3px"
                    lineHeight="12.19px"
                    textAlign="center"
                    color="#000000"
                    p="3px 11px"
                    borderRadius="9999px"
                >
                    {props.type}
                </Badge>
            </Box>
            <Tooltip label={props.name} placement="top">
                <Heading
                    as="h3"
                    fontFamily="montserrat"
                    flex="1"
                    fontWeight="600"
                    fontSize={['14px', null, null, '13px']}
                    lineHeight={['17.07px', null, null, '22px']}
                    color="#000000"
                    noOfLines={2}
                >
                    <NextLink href={`/boutique/${encodeURIComponent(props.category)}/${encodeURIComponent(props.slug)}`} passHref>
                        <Link>{props.name}</Link>
                    </NextLink>
                </Heading>
            </Tooltip>
            <HStack justifyContent="space-between" w="100%">
                <Box>
                    <Text fontFamily="montserrat" fontWeight="600" fontSize="12px" lineHeight="14.63px" letterSpacing="0.3px" color="#AAAAAA" textTransform="capitalize">
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
                        <Text fontFamily="montserrat" fontWeight="600" fontSize="11px" lineHeight="22px" color="#AAAAAA" textAlign="right">
                            ({props.avis} avis)
                        </Text>
                    </HStack>
                </Box>
                <Box>
                    <Text
                        fontFamily="montserrat"
                        fontWeight="600"
                        textDecoration="line-through"
                        fontSize="12px"
                        lineHeight="22px"
                        letterSpacing="0.3px"
                        color="#AAAAAA"
                        textAlign="right"
                    >
                        {props.oldPrice}
                    </Text>
                    <Text fontFamily="montserrat" fontWeight="800" fontSize="16px" lineHeight="22px" letterSpacing="0.3px" textAlign="right">
                        {props.price}
                    </Text>
                </Box>
            </HStack>
            <Button
                isFullWidth
                leftIcon={<CartIcon />}
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
            >
                Ajouter au panier
            </Button>
        </VStack>
    );
}

export default Product;
