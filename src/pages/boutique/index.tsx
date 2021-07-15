import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';
import Hero from '@/components/BoutiquePage/Hero';
import Search from '@/components/BoutiquePage/Search';
import Packs from '@/components/BoutiquePage/Packs';
import ProductByCategory from '@/components/BoutiquePage/ProductsByCategory';
import Livres from '@/components/BoutiquePage/Livres';
import { motion } from 'framer-motion';

function Boutique(): JSX.Element {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
            <Header />
            <main>
                <Hero />
                <Search />
                <Packs />
                <ProductByCategory name="poids" description="Perdre du poids" />
                <ProductByCategory name="poids" description="Bien-être" />
                <Livres />
                <ProductByCategory name="poids" description="Réussite" />
                <ProductByCategory name="poids" description="Amour" />
            </main>
            <Footer />
        </motion.div>
    );
}

export default Boutique;
