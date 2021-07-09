import Header from '@/components/Common/Header';
import { Heading } from '@chakra-ui/react';
function Contact(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <Heading as="h1" textAlign="center">
                        Contact
                    </Heading>
                </section>
            </main>
        </div>
    );
}

export default Contact;
