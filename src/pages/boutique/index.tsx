import Header from '@/components/Common/Header';
import Hero from '@/components/BoutiquePage/Hero';
import Search from '@/components/BoutiquePage/Search';
import Packs from '@/components/BoutiquePage/Packs';
import ProductByCategory from '@/components/BoutiquePage/ProductsByCategory';

function Boutique(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Search />
                <Packs />
                <ProductByCategory name="poids" description="Perdre du poids" />
                <ProductByCategory name="poids" description="Bien-être" />
            </main>
        </div>
    );
}

export default Boutique;
