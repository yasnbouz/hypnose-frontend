import { VStack, Box, Heading, Text, Link, Button } from '@chakra-ui/react';
import ArrowRightIcon from '@/assets/HomePage/PopularProducts/arrowRight.svg';
import NextLink from 'next/link';
import { ReactNode } from 'react';

export type CategoryProps = {
    name: string;
    description: string;
    children?: ReactNode;
};

function Category({ children, ...props }: CategoryProps): JSX.Element {
    return (
        <VStack as="article" spacing="20px" p="10px" maxW="320px" border="1px solid #E4E4E4" borderRadius="15px">
            <Box>{children}</Box>
            <VStack spacing="12px" maxW="255px">
                <Heading as="h3" fontFamily="montserrat" fontWeight="700" fontSize="18px" lineHeight="24px" letterSpacing="0.1px" color="#000000">
                    {props.name}
                </Heading>
                <Text fontSize="14px" textAlign="center" fontFamily="montserrat" fontWeight="400" lineHeight="20px" letterSpacing="0.2px" color="#000000">
                    {props.description}
                </Text>
                <NextLink href={`/boutique/${encodeURIComponent(props.name)}`} passHref>
                    <Button
                        rightIcon={<ArrowRightIcon />}
                        as={Link}
                        iconSpacing={'11px'}
                        variant="link"
                        fontFamily="montserrat"
                        fontWeight="600"
                        fontSize="13px"
                        lineHeight="18px"
                        letterSpacing="0.3px"
                        color="#811D65"
                        textAlign="center"
                        borderRadius={0}
                        pb="11px"
                    >
                        En savoir plus
                    </Button>
                </NextLink>
            </VStack>
        </VStack>
    );
}
export default Category;
