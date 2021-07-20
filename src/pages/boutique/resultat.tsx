import Header from '@/components/Common/Header';
import Hero from '@/components/BoutiqueResultat/Hero';
import Search from '@/components/BoutiquePage/Search';
import ProductsContainer from '@/components/BoutiqueResultat/ProductsContainer';
import Footer from '@/components/Common/Footer';
function Resultat(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Search />
                <ProductsContainer />
            </main>
            <Footer />
        </div>
    );
}

export default Resultat;
