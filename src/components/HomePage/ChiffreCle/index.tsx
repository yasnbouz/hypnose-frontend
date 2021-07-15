import { Flex, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import Advice from '@/assets/HomePage/ChiffreCle/advice.svg';
import Loyalty from '@/assets/HomePage/ChiffreCle/loyalty.svg';
import Value from '@/assets/HomePage/ChiffreCle/value.svg';
function ChiffreCle(): JSX.Element {
    return (
        <Flex as="section" px="20px" mt="73px">
            <SimpleGrid maxW="1100px" gridTemplateColumns={['1fr', '1fr 1fr', 'repeat(3,1fr)']} w="100%" mx="auto" spacingX="30px" spacingY="20px" pos="relative" zIndex="2">
                <VStack p="20px" bg="white" justifyContent="center" alignItems="center" h="196px" borderRadius="10px" boxShadow="5px 4px 17px rgba(0, 0, 0, 0.08)">
                    <Advice />
                    <Text fontFamily="montserrat" fontWeight="700" fontSize="35px" lineHeight="42.67px" color="#373F41">
                        +10 000
                    </Text>
                    <Text fontFamily="montserrat" fontWeight="400" lineHeight="17.07px" letterSpacing="0.3px" color="#737B7D">
                        Personnes reçues
                    </Text>
                </VStack>
                <VStack p="20px" bg="white" justifyContent="center" alignItems="center" h="196px" borderRadius="10px" boxShadow="5px 4px 17px rgba(0, 0, 0, 0.08)">
                    <Loyalty />
                    <Text fontFamily="montserrat" fontWeight="700" fontSize="35px" lineHeight="42.67px" color="#373F41">
                        100%
                    </Text>
                    <Text fontFamily="montserrat" fontWeight="400" lineHeight="17.07px" letterSpacing="0.3px" color="#737B7D">
                        Clients satisfaits
                    </Text>
                </VStack>
                <VStack p="20px" bg="white" justifyContent="center" alignItems="center" h="196px" borderRadius="10px" boxShadow="5px 4px 17px rgba(0, 0, 0, 0.08)">
                    <Value />
                    <Text fontFamily="montserrat" fontWeight="700" fontSize="35px" lineHeight="42.67px" color="#373F41">
                        7 années
                    </Text>
                    <Text fontFamily="montserrat" fontWeight="400" lineHeight="17.07px" letterSpacing="0.3px" color="#737B7D">
                        d’expérience
                    </Text>
                </VStack>
            </SimpleGrid>
        </Flex>
    );
}

export default ChiffreCle;
