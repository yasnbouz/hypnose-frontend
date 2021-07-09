import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Search from '@/components/Search';
import Partenaires from '@/components/Partenaires';
import PopularProducts from '@/components/PopularProducts';
import Problématique from '@/components/Problematique';
import Categories from '@/components/Categories';
import Corrine from '@/components/MotDeCorrine';
import ChiffreCle from '@/components/ChiffreCle';
import Reseaux from '@/components/Reseaux';
import ParlentsCorrine from '@/components/ParleDeCorrine';
import Footer from '@/components/Footer';

export default function Home(): JSX.Element {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Search />
                <Partenaires />
                <PopularProducts />
                <Problématique />
                <Categories />
                <Corrine />
                <ChiffreCle />
                <Reseaux />
                <ParlentsCorrine />
            </main>
            <Footer />
        </div>
    );
}
