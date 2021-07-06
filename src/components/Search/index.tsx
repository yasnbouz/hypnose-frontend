import { HStack, Text, Button, Select, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState } from 'react';

function Search(): JSX.Element {
    const [objectif, setObjectif] = useState('');

    const handleObjectifChange = (e: React.FormEvent<HTMLSelectElement>): void => {
        setObjectif(e.currentTarget.value);
    };
    return (
        <HStack
            w="714px"
            h="118px"
            mx="auto"
            bg="white"
            zIndex="2"
            spacing="50px"
            px="43px"
            borderRadius="9px"
            pos="relative"
            top="-80px"
            boxShadow="10px 9px 34px rgba(0, 0, 0, 0.05)"
        >
            <Text fontFamily="raleway" fontWeight="700" fontSize="18px" letterSpacing="0.2px" w="66px">
                Je veux
            </Text>
            <Select
                w="302px"
                variant="flushed"
                color="#811D65"
                fontFamily="raleway"
                fontWeight="700"
                fontSize="16px"
                letterSpacing="0.2px"
                iconColor="#811D65"
                focusBorderColor="#811D65"
                borderColor="#811D65"
                name="objectif"
                aria-label="recherche par objectif"
                onChange={handleObjectifChange}
            >
                <option value="fumer">arrêter de fumer</option>
                <option value="option2">arrêter de fumer</option>
                <option value="option3">arrêter de fumer</option>
                <option value="option4">arrêter de fumer</option>
            </Select>
            <NextLink href="">
                <Button
                    as={Link}
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
            </NextLink>
        </HStack>
    );
}

export default Search;
