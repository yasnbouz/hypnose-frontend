import Header from '@/components/Header';
import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

function OneProduct(): JSX.Element {
    const router = useRouter();
    const { pid } = router.query;
    return (
        <div>
            <Header />
            <main>
                <section>
                    <Heading as="h1" textAlign="center">
                        {decodeURIComponent(`${pid}`)}
                    </Heading>
                </section>
            </main>
        </div>
    );
}

export default OneProduct;
