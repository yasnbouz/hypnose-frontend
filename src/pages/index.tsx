import Header from '@/components/Common/Header';
import Hero from '@/components/HomePage/Hero';
import Search from '@/components/HomePage/Search';
import Partenaires from '@/components/HomePage/Partenaires';
import PopularProducts from '@/components/HomePage/PopularProducts';
import Problématique from '@/components/HomePage/Problematique';
import Categories from '@/components/HomePage/Categories';
import Corrine from '@/components/HomePage/MotDeCorrine';
import ChiffreCle from '@/components/HomePage/ChiffreCle';
import Reseaux from '@/components/HomePage/Reseaux';
import ParlentsCorrine from '@/components/HomePage/ParleDeCorrine';
import Footer from '@/components/Common/Footer';
import { motion } from 'framer-motion';
export default function Home(): JSX.Element {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
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
        </motion.div>
    );
}
