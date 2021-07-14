import { Box, Flex, Heading, Text, Link, Button, useBreakpointValue, SimpleGrid } from '@chakra-ui/react';
import NextLink from 'next/link';
import ArrowRightIcon from '@/assets/HomePage/PopularProducts/arrowRight.svg';
import Product, { ProductProps } from '@/components/BoutiquePage/ProductsByCategory/Product';

const data: ProductProps[] = [
    {
        image: '/assets/images/PerdreDePoids/img1.png',
        type: 'MP3',
        name: 'Product title',
        slug: 'product-title',
        category: 'poids',
        oldPrice: '29,90€',
        price: '29,90€',
        avis: 10,
    },
    {
        image: '/assets/images/PerdreDePoids/img2.png',
        type: 'MP3',
        name: 'Maigrir vite et bien avec ',
        slug: 'maigrir-vite-et-bien-avec-la-reduction-virtuelle-de-lestomac',
        category: 'poids',
        oldPrice: '29,90€',
        price: '29,90€',
        avis: 10,
    },
    {
        image: '/assets/images/PerdreDePoids/img3.png',
        type: 'MP3',
        name: 'Maigrir vite et bien avec la réduction virtuelle de l’estomac ! iezfihiehfiozehfoih ioefo',
        slug: 'maigrir-vite-et-bien-avec-la-reduction-virtuelle-de-lestomac',
        category: 'poids',
        oldPrice: '29,90€',
        price: '29,90€',
        avis: 10,
    },
    {
        image: '/assets/images/PerdreDePoids/img4.png',
        type: 'MP3',
        name: 'Maigrir vite et bien avec la réduction virtuelle de l’estomac !',
        slug: 'maigrir-vite-et-bien-avec-la-reduction-virtuelle-de-lestomac',
        category: 'poids',
        oldPrice: '29,90€',
        price: '29,90€',
        avis: 10,
    },
];
type ProductsByCategoryProps = {
    name: string;
    description: string;
};
function ProductsByCategory(props: ProductsByCategoryProps): JSX.Element {
    const numberOfProducts = useBreakpointValue({ base: 2, lg: data.length });
    return (
        <Flex as="section" px="20px" py={['20px', null, null, '40px']}>
            <Box maxW="1100px" mx="auto" w="100%">
                <Flex direction="column" justifyContent={['center', null, null, 'flex-start']}>
                    <Heading
                        fontFamily="montserrat"
                        fontWeight="700"
                        fontSize={['22px', null, null, '32px']}
                        lineHeight="40px"
                        textAlign={['center', null, null, 'left']}
                        color="#373F41"
                    >
                        {props.description}
                    </Heading>
                    <Text
                        fontFamily="montserrat"
                        fontWeight="400"
                        fontSize="16px"
                        lineHeight="22px"
                        letterSpacing="0.3px"
                        textAlign={['center', null, null, 'left']}
                        color="#737B7D"
                        mb={['13.5px', null, null, '-9px']}
                    >
                        nouveaux packs hypnose exclusifs !
                    </Text>
                    <NextLink href={`boutique/${encodeURIComponent(props.name.toLowerCase())}`} passHref>
                        <Button
                            fontFamily="montserrat"
                            fontSize="12px"
                            lineHeight="22px"
                            letterSpacing="0.3px"
                            fontWeight="400"
                            as={Link}
                            textAlign={['center', null, null, 'left']}
                            alignSelf={['center', null, null, 'flex-end']}
                            color="#811D65"
                            variant="link"
                            iconSpacing="12px"
                            rightIcon={<ArrowRightIcon />}
                        >
                            Voir tous les produits
                        </Button>
                    </NextLink>
                </Flex>

                <SimpleGrid
                    spacing="10px"
                    pt={['20px', null, null, '13px']}
                    gridTemplateColumns={['1fr', null, 'repeat(2,minmax(auto,328px))', 'repeat(3,minmax(auto,270px))', 'repeat(4,minmax(auto,270px))']}
                    justifyItems="center"
                >
                    {data.slice(0, numberOfProducts).map((product) => (
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
                </SimpleGrid>
            </Box>
        </Flex>
    );
}
ProductsByCategory.defaultProps = { name: 'poids', description: 'Perdre du poids' };
export default ProductsByCategory;
