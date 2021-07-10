import Header from '@/components/Common/Header';
import Hero from '@/components/BoutiquePage/Hero';
import Search from '@/components/BoutiquePage/Search';

function Boutique(): JSX.Element {
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

export default Boutique;
