import React from 'react';
import { ArrowLeft, Search, Package } from 'lucide-react';
import { SEOHead } from '../components/SEOHead.tsx';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigate,
  onOpenSearch,
}) => {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center py-20 px-4 text-center">
      <SEOHead
        title="404 - Page Not Found | Primus Enterprises"
        description="The requested automotive product or page could not be located in the Primus Enterprises catalogue."
        noIndex={true}
      />

      <div className="max-w-md w-full space-y-6">
        <div className="inline-block p-4 bg-[#F7F7F5] border border-[#E5E5E5] rounded-full text-[#D9222A]">
          <Package className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <span className="font-technical text-xs font-bold uppercase tracking-widest text-[#D9222A]">
            ERROR 404 • CATALOGUE REPOSITORY
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111]">
            Product or Page Not Found
          </h1>
          <p className="font-display text-xs sm:text-sm text-[#555555] leading-relaxed">
            The automotive part, specification page, or URL you requested does not exist or may have been updated in our catalogue.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => onNavigate('/')}
            className="px-6 py-3 bg-[#111111] hover:bg-[#333333] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </button>

          <button
            onClick={onOpenSearch}
            className="px-6 py-3 bg-white border border-[#111111] text-[#111111] hover:bg-[#F7F7F5] font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Search Catalogue</span>
          </button>
        </div>
      </div>
    </div>
  );
};
