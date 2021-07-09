import Header from '@/components/Common/Header';
import { Heading } from '@chakra-ui/react';
function Panier(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <Heading as="h1" textAlign="center">
                        Panier
                    </Heading>
                </section>
            </main>
        </div>
    );
}

export default Panier;
