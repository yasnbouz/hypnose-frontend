import { Flex, Button, SimpleGrid } from '@chakra-ui/react';
import Product, { ProductProps } from '@/components/BoutiquePage/ProductsByCategory/Product';
import ArrowBottom from '@/assets/BoutiqueResultat/Filter/arrowBottom.svg';

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
];

function ProductsList(): JSX.Element {
    return (
        <Flex direction="column" alignItems="stretch">
            <Button
                display={['none', null, 'inline-flex']}
                rightIcon={<ArrowBottom />}
                iconSpacing="19px"
                variant="unstyled"
                alignSelf="flex-end"
                fontFamily="montserrat"
                fontWeight="400"
                fontSize="12px"
                lineHeight="22px"
                letterSpacing="0.3px"
                color="#811D65"
                mb="25px"
            >
                Trier par produits populaires
            </Button>
            <SimpleGrid spacing="20px" gridTemplateColumns={['repeat(auto-fit,minmax(260px,1fr))']}>
                {data.map((product, i) => (
                    <Product {...product} key={i} />
                ))}
            </SimpleGrid>
            <Button
                fontFamily="montserrat"
                fontSize="14px"
                lineHeight="18px"
                letterSpacing="0.3px"
                fontWeight="700"
                color="#454545"
                p="12px, 18px, 12px, 18px"
                bg="#F1F1F1"
                _hover={{ bg: '#F1F1F1' }}
                _active={{ bg: '#ebebeb' }}
                w="298px"
                h="50px"
                mt="40px"
                mb="53px"
                mx="auto"
                borderRadius="9999px"
                display="flex"
            >
                Voir plus
            </Button>
        </Flex>
    );
}

export default ProductsList;
