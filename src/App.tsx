import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { Product, Category, SiteSettings } from './types.ts';
import { api } from './services/api.ts';
import { initialProducts, initialCategories, initialSiteSettings } from '../server/seedData.ts';

// Components & Modals
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { EnquiryModal } from './components/EnquiryModal.tsx';
import { SearchModal } from './components/SearchModal.tsx';

// Pages
import { HomePage } from './pages/HomePage.tsx';
import { ProductsPage } from './pages/ProductsPage.tsx';
import { ProductDetailPage } from './pages/ProductDetailPage.tsx';
import { CategoriesPage } from './pages/CategoriesPage.tsx';
import { CategoryPage } from './pages/CategoryPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { CataloguePage } from './pages/CataloguePage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { AdminDashboard } from './pages/AdminDashboard.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [settings, setSettings] = useState<SiteSettings>(initialSiteSettings);
  const [loading, setLoading] = useState<boolean>(true);

  // Modal states
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProductData, setEnquiryProductData] = useState<{ name: string; sku: string; id: string }>({
    name: '',
    sku: '',
    id: '',
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Load data from REST API backend
  const refreshData = async () => {
    try {
      const [prods, cats, sets] = await Promise.all([
        api.getProducts(),
        api.getCategories(),
        api.getSettings(),
      ]);
      if (prods && prods.length > 0) setProducts(prods);
      if (cats && cats.length > 0) setCategories(cats);
      if (sets) setSettings(sets);
    } catch (e) {
      console.warn('Using seeded data as fallback:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  // History / URL routing
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top monitor
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState(null, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = (productName: string = '', sku: string = '', productId: string = '') => {
    setEnquiryProductData({ name: productName, sku, id: productId });
    setIsEnquiryOpen(true);
  };

  // Determine active page based on URL
  const renderCurrentPage = () => {
    // 1. Homepage
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          products={products}
          categories={categories}
          settings={settings}
          onNavigate={navigate}
          onOpenEnquiry={(name, sku) => handleOpenEnquiry(name || '', sku || '')}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      );
    }

    // 2. All Products
    if (currentPath === '/products') {
      return (
        <ProductsPage
          products={products}
          categories={categories}
          settings={settings}
          onNavigate={navigate}
          onOpenEnquiry={(name, sku) => handleOpenEnquiry(name || '', sku || '')}
        />
      );
    }

    // 3. Single Product Page: /products/:slug
    if (currentPath.startsWith('/products/')) {
      const slug = currentPath.replace('/products/', '').split('/')[0];
      const product = products.find((p) => p.slug === slug || p.id === slug);
      if (product) {
        const related = products.filter(
          (p) => p.category_id === product.category_id && p.id !== product.id && p.status === 'published'
        );
        return (
          <ProductDetailPage
            product={product}
            relatedProducts={related}
            settings={settings}
            onNavigate={navigate}
            onOpenEnquiry={(name, sku) => handleOpenEnquiry(name, sku, product.id)}
          />
        );
      }
      return <NotFoundPage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
    }

    // 4. All Categories
    if (currentPath === '/categories') {
      return (
        <CategoriesPage
          categories={categories}
          products={products}
          settings={settings}
          onNavigate={navigate}
        />
      );
    }

    // 5. Single Category Page: /category/:slug
    if (currentPath.startsWith('/category/')) {
      const slug = currentPath.replace('/category/', '').split('/')[0];
      const category = categories.find((c) => c.slug === slug || c.id === slug);
      if (category) {
        return (
          <CategoryPage
            category={category}
            products={products}
            settings={settings}
            onNavigate={navigate}
            onOpenEnquiry={(name, sku) => handleOpenEnquiry(name || category.name, sku || '')}
          />
        );
      }
      return <NotFoundPage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
    }

    // 6. About
    if (currentPath === '/about') {
      return (
        <AboutPage
          settings={settings}
          onNavigate={navigate}
          onOpenEnquiry={() => handleOpenEnquiry('General Company Enquiry')}
        />
      );
    }

    // 7. Catalogue
    if (currentPath === '/catalogue') {
      return (
        <CataloguePage
          products={products}
          categories={categories}
          settings={settings}
          onNavigate={navigate}
          onOpenEnquiry={(name, sku) => handleOpenEnquiry(name || 'Catalogue Request', sku || '')}
        />
      );
    }

    // 8. Contact
    if (currentPath === '/contact') {
      return (
        <ContactPage
          settings={settings}
          onNavigate={navigate}
        />
      );
    }

    // 9. Admin CMS
    if (currentPath === '/admin' || currentPath.startsWith('/admin/')) {
      return (
        <AdminDashboard
          products={products}
          categories={categories}
          settings={settings}
          onRefreshData={refreshData}
          onNavigate={navigate}
        />
      );
    }

    // 10. Fallback 404
    return <NotFoundPage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
  };

  const cleanWhatsAppNumber = (settings.whatsapp_number || '+919811234567').replace(/[^0-9]/g, '');
  const stickyWhatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    'Hello Primus Enterprises, I am contacting you for wholesale automotive lighting & electrical products enquiry.'
  )}`;

  const isAdminRoute = currentPath === '/admin' || currentPath.startsWith('/admin/');

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111] font-display">
      {/* Global Header (Hidden only inside admin dashboard for focused CMS mode) */}
      {!isAdminRoute && (
        <Header
          currentPath={currentPath}
          onNavigate={navigate}
          settings={settings}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenEnquiry={(name, sku) => handleOpenEnquiry(name || '', sku || '')}
        />
      )}

      {/* Main Page Body */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      {!isAdminRoute && (
        <Footer
          settings={settings}
          categories={categories}
          onNavigate={navigate}
          onOpenEnquiry={(name) => handleOpenEnquiry(name || '')}
        />
      )}

      {/* STICKY MOBILE BOTTOM CTA: WhatsApp Enquiry */}
      {!isAdminRoute && (
        <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-xs border-t border-[#E5E5E5] p-2.5 px-4 shadow-lg flex items-center gap-2">
          <a
            href={stickyWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-3 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WHATSAPP ENQUIRY</span>
          </a>

          <button
            onClick={() => handleOpenEnquiry()}
            className="py-3 px-4 bg-[#111111] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center"
          >
            <span>QUOTE</span>
          </button>
        </div>
      )}

      {/* Scroll to Top Utility Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-16 lg:bottom-6 right-4 z-20 p-2.5 bg-white border border-[#E5E5E5] hover:border-[#111111] text-[#111111] shadow-md rounded-xs transition-colors cursor-pointer hidden sm:flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* B2B Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        productName={enquiryProductData.name}
        sku={enquiryProductData.sku}
        productId={enquiryProductData.id}
        settings={settings}
      />

      {/* Full-Catalogue Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(slug) => navigate(`/products/${slug}`)}
        onSelectCategory={(slug) => navigate(`/category/${slug}`)}
      />
    </div>
  );
}
