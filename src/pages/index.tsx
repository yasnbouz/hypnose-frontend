import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Search from '@/components/Search';

export default function Home(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Search />
            </main>
        </div>
    );
}
