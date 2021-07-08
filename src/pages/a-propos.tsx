import Header from '@/components/Header';
import { Heading } from '@chakra-ui/react';
function APropos(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <Heading as="h1" textAlign="center">
                        A Propos
                    </Heading>
                </section>
            </main>
        </div>
    );
}

export default APropos;
