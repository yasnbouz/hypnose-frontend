import { Flex, Box, Heading, Text, HStack, Button, Link } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import ArrowRightIcon from '@/assets/HomePage/PopularProducts/arrowRight.svg';
import { ReactNode } from 'react';

export type PackProps = {
    name: string;
    category: string;
    avis: number;
    price: string;
    oldPrice: string;
    children?: ReactNode;
};

function Pack(props: PackProps): JSX.Element {
    return (
        <Flex as="article" direction="column" alignItems="center" pt="40px" pb="31px" px="20px" boxShadow="-4px 4px 34px rgba(0, 0, 0, 0.05)" borderRadius="10px" bg="white">
            <Box mb="30px">{props.children}</Box>
            <Heading as="h3" fontFamily="montserrat" fontWeight="600" fontSize="16px" lineHeight="22px" textAlign="center" color="#000000" mb="5px">
                {props.name}
            </Heading>
            <Text fontFamily="montserrat" fontWeight="600" fontSize="12px" lineHeight="22px" letterSpacing="0.3px" textAlign="center" color="#AAAAAA">
                Objectif : {props.category}
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
                    {props.avis} avis
                </Text>
            </HStack>
            <Heading
                as="h4"
                fontFamily="montserrat"
                fontWeight="800"
                fontSize="16px"
                lineHeight="22px"
                letterSpacing="0.3px"
                textAlign="center"
                color="#000000"
                my="6px"
                noOfLines={1}
            >
                {props.price}
            </Heading>
            <Text fontFamily="montserrat" fontWeight="600" fontSize="12px" lineHeight="22px" letterSpacing="0.3px" textAlign="center" color="#AAAAAA" textDecoration="line-through">
                {props.oldPrice}
            </Text>
            <NextLink href={`/boutique/${encodeURIComponent(props.category)}`} passHref>
                <Button
                    as={Link}
                    w="186px"
                    h="50px"
                    borderRadius="29px"
                    p="12px, 18px, 12px, 18px"
                    mt="18px"
                    bg="#EFDAE8"
                    _hover={{ bg: '#EFDAE8' }}
                    _active={{ bg: '#EFDAE8' }}
                    rightIcon={<ArrowRightIcon />}
                    iconSpacing="10px"
                    fontFamily="montserrat"
                    fontSize="14px"
                    fontWeight="700"
                    lineHeight="18px"
                    letterSpacing="0.3px"
                    color="#51003A"
                >
                    En savoir plus
                </Button>
            </NextLink>
        </Flex>
    );
}
export default Pack;
