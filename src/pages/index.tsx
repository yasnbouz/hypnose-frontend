import Header from '@/components/Header';
import { Heading } from '@chakra-ui/react';

export default function Home(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <Heading as="h1" textAlign="center">
                        home
                    </Heading>
                </section>
            </main>
        </div>
    );
}
