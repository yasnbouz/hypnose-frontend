import { Box, Flex, Heading, HStack, Text, VStack, Link, Button } from '@chakra-ui/react';
import ArrowRightIcon from '@/assets/HomePage/PopularProducts/arrowRight.svg';

import Product, { ProductProps } from './Product';
import NextLink from 'next/link';

const data: ProductProps[] = [
    {
        image: '/assets/images/PopularProducts/legerete.png',
        type: 'Pack',
        name: 'Pack Légèreté : 3 séances + 1 ebook',
        slug: 'pack-legerete-3-seances-1-ebook',
        category: 'poids',
        oldPrice: '29,90€',
        price: '29,90€',
        avis: 10,
    },
    {
        image: '/assets/images/PopularProducts/ventre.png',
        type: 'Séance MP3',
        name: 'Pour le ventre !',
        slug: 'pour-le-ventre',
        category: 'poids',
        oldPrice: '29,90€',
        price: '29,90€',
        avis: 10,
    },
    {
        image: '/assets/images/PopularProducts/reduction.png',
        type: 'Séance MP3',
        name: 'Maigrir vite et bien avec la réduction virtuelle de l’estomac !',
        slug: 'maigrir-vite-et-bien-avec-la-reduction-virtuelle-de-lestomac',
        category: 'poids',
        oldPrice: '29,90€',
        price: '29,90€',
        avis: 10,
    },
];

function PopularProducts(): JSX.Element {
    return (
        <Flex as="section" px="20px">
            <Box maxW="1200px" w="100%" mx="auto">
                <VStack spacing="9px" justifyContent="center" alignItems="center" w="100%" h="108px" mt="50px">
                    <Heading color="#373F41" fontFamily="montserrat" fontWeight="700" fontSize="32px" lineHeight="40px" textAlign="center">
                        Découvrez nos produits populaires
                    </Heading>
                    <Text fontFamily="montserrat" fontSize="16px" lineHeight="22px" letterSpacing="0.3px" textAlign="center" color="##737B7D">
                        Séances MP3, Livres, eBooks...
                    </Text>
                </VStack>
                <HStack spacing="33px" justifyContent="center">
                    {data.map((product) => (
                        <Product
                            key={product.slug}
                            image={product.image}
                            type={product.type}
                            name={product.name}
                            slug={product.slug}
                            category={product.category}
                            oldPrice={product.oldPrice}
                            price={product.price}
                            avis={product.avis}
                        />
                    ))}
                </HStack>
                <Flex w="292px" h="55.9px" justifyContent="center" alignItems="center" mx="auto" mt="50px">
                    <NextLink href="/boutique" passHref>
                        <Button
                            rightIcon={<ArrowRightIcon />}
                            as={Link}
                            iconSpacing={'11px'}
                            variant="link"
                            fontFamily="montserrat"
                            fontWeight="700"
                            fontSize="14px"
                            lineHeight="18px"
                            letterSpacing="0.3px"
                            color="#811D65"
                            textAlign="center"
                            borderRadius={0}
                            pb="11px"
                            borderBottom="2px solid #811D65"
                        >
                            Découvrez tous nos produits
                        </Button>
                    </NextLink>
                </Flex>
            </Box>
        </Flex>
    );
}

export default PopularProducts;
