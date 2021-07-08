import { Flex, HStack, VStack, Text } from '@chakra-ui/react';
import Advice from '@/assets/ChiffreCle/advice.svg';
import Loyalty from '@/assets/ChiffreCle/loyalty.svg';
import Value from '@/assets/ChiffreCle/value.svg';
function ChiffreCle(): JSX.Element {
    return (
        <Flex as="section" px="20px" mt="73px">
            <HStack maxW="1200px" w="100%" mx="auto" spacing="31px" justifyContent="space-between">
                <VStack justifyContent="center" alignItems="center" w="344px" h="196px" borderRadius="10px" boxShadow="5px 4px 17px rgba(0, 0, 0, 0.08)">
                    <Advice />
                    <Text fontFamily="montserrat" fontWeight="700" fontSize="35px" lineHeight="42.67px" color="#373F41">
                        +10 000
                    </Text>
                    <Text fontFamily="montserrat" fontWeight="400" lineHeight="17.07px" letterSpacing="0.3px" color="#737B7D">
                        Personnes reçues
                    </Text>
                </VStack>
                <VStack justifyContent="center" alignItems="center" w="344px" h="196px" borderRadius="10px" boxShadow="5px 4px 17px rgba(0, 0, 0, 0.08)">
                    <Loyalty />
                    <Text fontFamily="montserrat" fontWeight="700" fontSize="35px" lineHeight="42.67px" color="#373F41">
                        100%
                    </Text>
                    <Text fontFamily="montserrat" fontWeight="400" lineHeight="17.07px" letterSpacing="0.3px" color="#737B7D">
                        Clients satisfaits
                    </Text>
                </VStack>
                <VStack justifyContent="center" alignItems="center" w="344px" h="196px" borderRadius="10px" boxShadow="5px 4px 17px rgba(0, 0, 0, 0.08)">
                    <Value />
                    <Text fontFamily="montserrat" fontWeight="700" fontSize="35px" lineHeight="42.67px" color="#373F41">
                        7 années
                    </Text>
                    <Text fontFamily="montserrat" fontWeight="400" lineHeight="17.07px" letterSpacing="0.3px" color="#737B7D">
                        d’expérience
                    </Text>
                </VStack>
            </HStack>
        </Flex>
    );
}

export default ChiffreCle;
