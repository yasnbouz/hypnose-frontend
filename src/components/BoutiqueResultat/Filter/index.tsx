import { Button, HStack, IconButton, useDisclosure, Collapse, Text, Box, VStack, Checkbox } from '@chakra-ui/react';
import FilterVector from '@/assets/BoutiqueResultat/Filter/filter.svg';
import ArrowBottom from '@/assets/BoutiqueResultat/Filter/arrowBottom.svg';
import { FormEvent, useState } from 'react';

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
    const { isOpen, onToggle } = useDisclosure();
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
        <>
            <VStack display={['none', null, 'flex']} spacing="33px" alignItems="start">
                <Button
                    w="100%"
                    textAlign="left"
                    fontFamily="montserrat"
                    fontWeight="600"
                    fontSize="12px"
                    lineHeight="22px"
                    color="#000000"
                    leftIcon={<FilterVector />}
                    variant="unstyled"
                    iconSpacing="14px"
                    borderBottom="1px solid rgba(0, 0, 0, 0.15)"
                >
                    Filter par
                </Button>
                <VStack alignItems="flex-start">
                    <Text fontFamily="montserrat" fontWeight="700" fontSize="12px" lineHeight="22px" letterSpacing="0.3px" color="#000000" mb="8px">
                        Objectif
                    </Text>
                    <VStack alignItems="start" spacing="5px">
                        {objectifs.map((o) => (
                            <Checkbox value={o.name} isChecked={isChecked(o.name)} onChange={handlecheckboxChange} color="#BFBFBF" spacing="16px" key={o.id}>
                                {o.name}
                            </Checkbox>
                        ))}
                    </VStack>
                </VStack>
                <VStack alignItems="flex-start">
                    <Text fontFamily="montserrat" fontWeight="700" fontSize="12px" lineHeight="22px" letterSpacing="0.3px" color="#000000" mb="8px">
                        Types
                    </Text>
                    <VStack alignItems="start" spacing="5px">
                        {types.map((t) => (
                            <Checkbox value={t.name} isChecked={isChecked(t.name)} color="#BFBFBF" spacing="16px" key={t.id} onChange={handlecheckboxChange}>
                                {t.name}
                            </Checkbox>
                        ))}
                    </VStack>
                </VStack>
            </VStack>
            <VStack display={['flex', null, 'none']} alignItems="flex-start">
                <HStack w="100%" justifyContent="space-between" cursor="pointer" onClick={onToggle}>
                    <Button leftIcon={<FilterVector />} variant="unstyled" iconSpacing="8px">
                        Filter par
                    </Button>
                    <IconButton variant="unstyled" aria-label="filter products" icon={<ArrowBottom />} />
                </HStack>
                <Collapse in={isOpen} animateOpacity style={{ width: '100%' }}>
                    <VStack spacing="40px" alignItems="flex-start" p="20px" color="white" mt="4" shadow="md">
                        <Box>
                            <Text fontFamily="montserrat" fontWeight="700" fontSize="12px" lineHeight="22px" letterSpacing="0.3px" color="#000000" mb="8px">
                                Objectif
                            </Text>
                            <VStack alignItems="start" spacing="5px">
                                {objectifs.map((o) => (
                                    <Checkbox value={o.name} isChecked={isChecked(o.name)} onChange={handlecheckboxChange} color="#BFBFBF" spacing="16px" key={o.id}>
                                        {o.name}
                                    </Checkbox>
                                ))}
                            </VStack>
                        </Box>
                        <Box>
                            <Text fontFamily="montserrat" fontWeight="700" fontSize="12px" lineHeight="22px" letterSpacing="0.3px" color="#000000" mb="8px">
                                Types
                            </Text>
                            <VStack alignItems="start" spacing="5px">
                                {types.map((t) => (
                                    <Checkbox value={t.name} isChecked={isChecked(t.name)} color="#BFBFBF" spacing="16px" key={t.id} onChange={handlecheckboxChange}>
                                        {t.name}
                                    </Checkbox>
                                ))}
                            </VStack>
                        </Box>
                    </VStack>
                </Collapse>
            </VStack>
        </>
    );
}

export default Filter;
