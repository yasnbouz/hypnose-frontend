import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Search from '@/components/Search';
import Partenaires from '@/components/Partenaires';
import PopularProducts from '@/components/PopularProducts';
import Problématique from '@/components/Problématique';
import Categories from '@/components/Categories';
import Corrine from '@/components/MotDeCorrine';

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
            </main>
        </div>
    );
}
