import Header from '@/components/Common/Header';
import { Heading } from '@chakra-ui/react';
function Temoignages(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <Heading as="h1" textAlign="center">
                        Temoignages
                    </Heading>
                </section>
            </main>
        </div>
    );
}

export default Temoignages;
