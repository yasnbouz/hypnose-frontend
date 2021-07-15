import { Box, HStack, Flex } from '@chakra-ui/react';
import Frame1 from '@/assets/HomePage/Partenaires/frame1.svg';
import Frame2 from '@/assets/HomePage/Partenaires/frame2.svg';
import Frame3 from '@/assets/HomePage/Partenaires/frame3.svg';
import Frame4 from '@/assets/HomePage/Partenaires/frame4.svg';
import Frame5 from '@/assets/HomePage/Partenaires/frame5.svg';

function Partenaires(): JSX.Element {
    return (
        <Flex px="20px" py={['53px', null]} pt={['53px', null, null, '100px']}>
            <Box maxW="1100px" w="100%" mx="auto">
                <HStack spacing="35px" wrap="wrap" alignItems="center" justifyContent={['center', null, 'space-between']}>
                    <Box>
                        <Frame1 />
                    </Box>
                    <Box>
                        <Frame2 />
                    </Box>
                    <Box>
                        <Frame3 />
                    </Box>
                    <Box>
                        <Frame4 />
                    </Box>
                    <Box>
                        <Frame5 />
                    </Box>
                </HStack>
            </Box>
        </Flex>
    );
}

export default Partenaires;
