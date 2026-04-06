import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import ProductsPage from '@/pages/ProductsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
