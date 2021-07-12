import { Text, Button, Select, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';

function Search(): JSX.Element {
    const [objectif, setObjectif] = useState('');

    const handleObjectifChange = (e: React.FormEvent<HTMLSelectElement>): void => {
        setObjectif(e.currentTarget.value);
    };
    return (
        <SimpleGrid
            columns={[1, null, null, 3]}
            gridTemplateColumns={[null, null, null, 'auto 1fr auto']}
            alignContent="center"
            alignItems="center"
            spacingX="50px"
            spacingY="0px"
            w={['306px', null, '714px']}
            h={['103px', null, '118px']}
            mx="auto"
            bg="white"
            zIndex="2"
            spacing="0px"
            px="43px"
            borderRadius="9px"
            pos="relative"
            marginTop={['-51.5px', null, '-59px']}
            boxShadow="10px 9px 34px rgba(0, 0, 0, 0.05)"
        >
            <Text fontFamily="raleway" fontWeight="700" fontSize={['14px', null, null, '18px']} letterSpacing="0.2px" w="66px">
                Je veux
            </Text>
            <Select
                variant="flushed"
                color="#811D65"
                fontFamily="raleway"
                fontWeight="700"
                fontSize={['14px', null, null, '16px']}
                letterSpacing="0.2px"
                iconColor="#811D65"
                focusBorderColor="#811D65"
                borderColor="#811D65"
                name="objectif"
                aria-label="recherche par objectif"
                value={objectif}
                onChange={handleObjectifChange}
            >
                <option value="fumer">arrêter de fumer</option>
                <option value="option2">arrêter de fumer</option>
                <option value="option3">arrêter de fumer</option>
                <option value="option4">arrêter de fumer</option>
            </Select>

            <Button
                display={['none', 'none', 'none', 'initial']}
                w="160px"
                h="54px"
                bg="#811D65"
                _hover={{ bg: '#811D65' }}
                _active={{ bg: '#811D65' }}
                color="white"
                fontFamily="montserrat"
                fontSize="14px"
                lineHeight="18px"
                letterSpacing="0.3px"
            >
                Commencer
            </Button>
        </SimpleGrid>
    );
}

export default Search;
