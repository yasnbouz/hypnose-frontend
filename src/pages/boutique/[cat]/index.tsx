import Header from '@/components/Common/Header';
import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

function CategoryPage(): JSX.Element {
    const router = useRouter();
    const { cat } = router.query;
    return (
        <div>
            <Header />
            <main>
                <section>
                    <Heading as="h1" textAlign="center">
                        {decodeURIComponent(`${cat}`)}
                    </Heading>
                </section>
            </main>
        </div>
    );
}

export default CategoryPage;
