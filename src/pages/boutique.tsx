import Header from '@/components/Header';
import { Heading } from '@chakra-ui/react';

function Boutique(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <Heading as="h1" textAlign="center">
                        Boutique
                    </Heading>
                </section>
            </main>
        </div>
    );
}

export default Boutique;
