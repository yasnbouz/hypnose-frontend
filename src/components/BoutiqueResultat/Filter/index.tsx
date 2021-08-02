import {
    HStack,
    IconButton,
    useDisclosure,
    Text,
    Box,
    VStack,
    Checkbox,
    Icon,
    Flex,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Heading,
} from '@chakra-ui/react';
import FilterVector from '@/assets/BoutiqueResultat/Filter/filter.svg';
import ArrowBottom from '@/assets/BoutiqueResultat/Filter/arrowBottom.svg';
import { FormEvent, useRef, useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';

const Objectifs = [
    { id: 1, name: 'Poids' },
    { id: 2, name: 'Amour' },
    { id: 3, name: 'Bien-étre' },
    { id: 4, name: 'Réussite' },
    { id: 5, name: 'Ado' },
];
const Types = [
    {
        id: 1,
        name: 'MP3',
    },
    {
        id: 2,
        name: 'Packs',
    },
    {
        id: 3,
        name: 'livres',
    },
];
function Filter(): JSX.Element {
    const [objectifs] = useState(Objectifs);
    const [types] = useState(Types);
    const [filter, setfilter] = useState<string[]>([]);

    const handlecheckboxChange = (e: FormEvent<HTMLInputElement>) => {
        const newvalue = e.currentTarget.value;
        const isChecked = e.currentTarget.checked;
        if (isChecked) {
            setfilter((prev) => [...prev, newvalue]);
        } else {
            setfilter(filter.filter((item) => item !== newvalue));
        }
    };

    const isChecked = (value: string) => {
        if (filter.includes(value)) {
            return true;
        }
        return false;
    };
    return (
        <Box>
            <DesktopFilter objectifs={objectifs} types={types} isChecked={isChecked} handlecheckboxChange={handlecheckboxChange} />
            <MobileFilter objectifs={objectifs} types={types} isChecked={isChecked} handlecheckboxChange={handlecheckboxChange} />
        </Box>
    );
}
type FilterProps = {
    objectifs: { id: number; name: string }[];
    types: { id: number; name: string }[];
    isChecked: (s: string) => boolean;
    handlecheckboxChange: (e: FormEvent<HTMLInputElement>) => void;
};
function DesktopFilter(props: FilterProps): JSX.Element {
    const { objectifs, types, isChecked, handlecheckboxChange } = props;
    return (
        <VStack display={['none', null, 'flex']} spacing="33px" alignItems="start">
            <HStack spacing="14px" pb="8.5px" w="full" borderBottom="1px solid rgba(0, 0, 0, 0.15)">
                <Icon as={FilterVector} />
                <Text w="100%" textAlign="left" fontFamily="montserrat" fontWeight="600" letterSpacing="0.3px" fontSize="12px" lineHeight="22px" color="#000000">
                    Filter par
                </Text>
            </HStack>
            <VStack alignItems="flex-start" spacing="8px">
                <Heading as="h3" fontFamily="montserrat" fontWeight="700" fontSize="12px" lineHeight="22px" letterSpacing="0.3px" color="#000000">
                    Objectif
                </Heading>
                <VStack alignItems="start" spacing="5px">
                    {objectifs.map((o) => (
                        <Checkbox value={o.name} isChecked={isChecked(o.name)} onChange={handlecheckboxChange} letterSpacing="0.3px" color="#000000" spacing="16px" key={o.id}>
                            {o.name}
                        </Checkbox>
                    ))}
                </VStack>
            </VStack>
            <VStack alignItems="flex-start" spacing="8px">
                <Heading as="h3" fontFamily="montserrat" fontWeight="700" fontSize="12px" lineHeight="22px" letterSpacing="0.3px" color="#000000">
                    Types
                </Heading>
                <VStack alignItems="start" spacing="5px">
                    {types.map((t) => (
                        <Checkbox value={t.name} isChecked={isChecked(t.name)} color="#000000" letterSpacing="0.3px" spacing="16px" key={t.id} onChange={handlecheckboxChange}>
                            {t.name}
                        </Checkbox>
                    ))}
                </VStack>
            </VStack>
        </VStack>
    );
}
function MobileFilter(props: FilterProps): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { objectifs, types, isChecked, handlecheckboxChange } = props;
    const btnRef = useRef(null);
    return (
        <Box display={['flex', null, 'none']} alignItems="center">
            <Flex role="button" ref={btnRef} onClick={onOpen} alignItems="center" justifyContent="space-between" w="full">
                <HStack spacing="14px" alignItems="center" pb="8.5px" w="full">
                    <Icon as={FilterVector} />
                    <Text w="100%" textAlign="left" fontFamily="montserrat" fontWeight="600" letterSpacing="0.3px" fontSize="12px" lineHeight="22px" color="#000000">
                        Filter par
                    </Text>
                </HStack>
                <Icon as={ArrowBottom} />
            </Flex>
            <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent bg="white" minH="458px" boxShadow="0px -3px 19px rgba(0, 0, 0, 0.12)" p="20px">
                    <DrawerHeader p="0px 0px 20px" borderBottom="1px solid rgba(0, 0, 0, 0.15)">
                        <Flex>
                            <HStack spacing="14px" w="full">
                                <Icon as={FilterVector} />
                                <Text textAlign="left" fontFamily="montserrat" fontWeight="600" fontSize="12px" letterSpacing="0.3px" lineHeight="22px" color="#000000">
                                    Filter par
                                </Text>
                            </HStack>
                            <IconButton
                                onClick={onClose}
                                aria-label="close filter menu"
                                bg="#F7F1F6"
                                borderRadius="5px"
                                _hover={{ bg: '#F7F1F6' }}
                                _active={{ bg: '#F7F1F6' }}
                                icon={<CloseIcon color="#51003A" />}
                            />
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody p="30px 36px 40px">
                        <VStack spacing="33px" alignItems="flex-start">
                            <VStack alignItems="flex-start" spacing="8px">
                                <Heading as="h3" fontFamily="montserrat" fontWeight="700" fontSize="12px" lineHeight="22px" letterSpacing="0.3px" color="#000000">
                                    Objectif
                                </Heading>
                                <VStack alignItems="start" spacing="5px">
                                    {objectifs.map((o) => (
                                        <Checkbox
                                            value={o.name}
                                            isChecked={isChecked(o.name)}
                                            onChange={handlecheckboxChange}
                                            letterSpacing="0.3px"
                                            color="#000000"
                                            spacing="16px"
                                            key={o.id}
                                        >
                                            {o.name}
                                        </Checkbox>
                                    ))}
                                </VStack>
                            </VStack>
                            <VStack alignItems="flex-start" spacing="8px">
                                <Heading as="h3" fontFamily="montserrat" fontWeight="700" fontSize="12px" lineHeight="22px" letterSpacing="0.3px" color="#000000">
                                    Types
                                </Heading>
                                <VStack alignItems="start" spacing="5px">
                                    {types.map((t) => (
                                        <Checkbox
                                            value={t.name}
                                            isChecked={isChecked(t.name)}
                                            color="#000000"
                                            letterSpacing="0.3px"
                                            spacing="16px"
                                            key={t.id}
                                            onChange={handlecheckboxChange}
                                        >
                                            {t.name}
                                        </Checkbox>
                                    ))}
                                </VStack>
                            </VStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
export default Filter;
