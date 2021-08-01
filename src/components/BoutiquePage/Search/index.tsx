import { Box, Button, HStack, Input, IconButton } from '@chakra-ui/react';
import SearchIcon from '@/assets/BoutiquePage/Search/search.svg';
import { FormEvent, useState } from 'react';

function Search(): JSX.Element {
    const [search, setSearch] = useState('');
    const handleInputSearch = (e: FormEvent<HTMLInputElement>): void => {
        setSearch(e.currentTarget.value);
    };
    const handleSubmit = (e: FormEvent<HTMLFontElement | HTMLDivElement>): void => {
        e.preventDefault();
        console.log(search);
    };

    return (
        <Box max="1100px" px="20px" mx="auto" w="100%" mt="-37px" pos="relative" zIndex="1">
            <HStack
                as="form"
                spacing="0px"
                maxW="910px"
                mx="auto"
                h={['60px', null, null, '74px']}
                alignItems="stretch"
                boxShadow="10px 9px 34px rgba(0, 0, 0, 0.05)"
                onSubmit={handleSubmit}
            >
                <Input
                    placeholder="Cherchez des produits pour poids, bien-être...."
                    fontFamily="montserrat"
                    fontWeight={['400', null, null, '700']}
                    fontSize={['13px', null, null, '14px']}
                    lineHeight="56px"
                    letterSpacing="0.2px"
                    color="#B6B6B6"
                    bg="white"
                    h="100%"
                    px={['17px', null, null, '28px']}
                    borderTopLeftRadius="9px"
                    borderBottomLeftRadius="9px"
                    borderTopRightRadius="0px"
                    borderBottomRightRadius="0px"
                    onChange={handleInputSearch}
                    flex="1"
                />

                <Button
                    fontFamily="montserrat"
                    fontWeight="700"
                    fontSize="14px"
                    lineHeight="56px"
                    letterSpacing="0.2px"
                    leftIcon={<SearchIcon />}
                    iconSpacing="17px"
                    color="white"
                    flex="0 0 224px"
                    h="100%"
                    borderRadius="9px"
                    bg="#811D65"
                    _hover={{ bg: '#51003A' }}
                    _active={{ bg: '#51003A' }}
                    borderTopLeftRadius="0px"
                    borderBottomLeftRadius="0px"
                    borderTopRightRadius="9px"
                    borderBottomRightRadius="9px"
                    type="submit"
                    display={['none', null, 'inline-flex']}
                >
                    Rechercher
                </Button>

                <IconButton
                    aria-label="chercher des produits"
                    icon={<SearchIcon />}
                    borderTopLeftRadius="0px"
                    borderBottomLeftRadius="0px"
                    borderTopRightRadius="9px"
                    borderBottomRightRadius="9px"
                    type="submit"
                    bg="#811D65"
                    _hover={{ bg: '#811D65' }}
                    _active={{ bg: '#811D65' }}
                    flex="0 0 57px"
                    h="100%"
                    display={['inline-flex', null, 'none']}
                />
            </HStack>
        </Box>
    );
}

export default Search;
