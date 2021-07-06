import Header from '@/components/Header';
import { Heading } from '@chakra-ui/react';
function Compte(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <Heading as="h1" textAlign="center">
                        Mon Compte
                    </Heading>
                </section>
            </main>
        </div>
    );
}

export default Compte;
