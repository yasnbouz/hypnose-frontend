import Header from '@/components/Common/Header';
import Hero from '@/components/BoutiquePage/Hero';
import Search from '@/components/BoutiquePage/Search';
import Packs from '@/components/BoutiquePage/Packs';

function Boutique(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Search />
                <Packs />
            </main>
        </div>
    );
}

export default Boutique;
