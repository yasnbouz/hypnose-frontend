import Header from '@/components/Common/Header';
import Hero from '@/components/BoutiqueResultat/Hero';
import Search from '@/components/BoutiquePage/Search';
function Resultat(): JSX.Element {
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

export default Resultat;
