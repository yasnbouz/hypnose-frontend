import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Search from '@/components/Search';
import Partenaires from '@/components/Partenaires';

export default function Home(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Search />
                <Partenaires />
            </main>
        </div>
    );
}
