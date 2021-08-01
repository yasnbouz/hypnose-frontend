import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import Filter from '@/components/BoutiqueResultat/Filter';
import ProductsList from './ProductsList';

function ProductsContainer(): JSX.Element {
    return (
        <Flex as="section" px="20px" mt={['40px', null, null, '66px']}>
            <SimpleGrid w="100%" maxW="1100px" mx="auto" spacing="33px" gridTemplateColumns={['1fr', '1fr', '222px 3fr']}>
                <Filter />
                <ProductsList />
            </SimpleGrid>
        </Flex>
    );
}

export default ProductsContainer;
