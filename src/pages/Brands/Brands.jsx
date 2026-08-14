import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaStar, FaShieldAlt, FaRegEye } from "react-icons/fa";
import Breadcrumb from "../../components/common/Breadcrumb";
import { BRANDS } from "../../data/productsData";

const Brands = () => {
  // Rich descriptions and banners for each brand matching uploader layout
  const brandsExtended = [
    {
      name: "Ray-Ban",
      origin: "USA/ITALY",
      tagline: "Genuine Since 1937",
      desc: "Experience Ray-Ban's legendary collections including iconic sunglasses & frames.",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Oakley",
      origin: "USA",
      tagline: "Be Who You Are",
      desc: "Experience Oakley's legendary collections including high-performance sportswear.",
      image: "https://images.unsplash.com/photo-1625591439851-468f34bc0865?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Gucci",
      origin: "ITALY",
      tagline: "Italian Elegance",
      desc: "Experience Gucci's legendary collections including high-fashion luxury.",
      image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Dior",
      origin: "FRANCE",
      tagline: "French Sophistication",
      desc: "Experience Dior's legendary collections including haute couture & fragrances.",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const breadcrumbItems = [{ label: "Official Brands" }];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Header */}
      <div className="text-center my-8 max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl md:text-5xl font-serif font-black text-gray-800 dark:text-white">
          Our Premium Brands
        </h1>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
          We deal exclusively with licensed global designers to bring you genuine craftsmanship and authentic luxury.
        </p>
        <div className="w-16 h-1 bg-gold mx-auto mt-2" />
      </div>

      {/* Extended Brands List Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {brandsExtended.map((brand, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col sm:flex-row h-full"
          >
            {/* Left Side: Brand Banner */}
            <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center min-h-[180px]">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover object-center absolute inset-0 filter brightness-75 dark:brightness-50"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Centered Brand Text Overlay */}
              <h3 className="relative z-10 text-2xl font-serif font-black text-white uppercase tracking-widest text-center px-4 drop-shadow-md">
                {brand.name}
              </h3>
            </div>

            {/* Right Side: Details */}
            <div className="w-full sm:w-3/5 p-6 md:p-8 flex flex-col justify-between relative">
              <div className="space-y-4">
                {/* Top row: Title and Badge */}
                <div className="flex justify-between items-start gap-4">
                  <h2 className="text-xl md:text-2xl font-serif font-black text-gray-850 dark:text-white leading-tight">
                    {brand.name}
                  </h2>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shrink-0">
                    {brand.origin}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs font-serif font-semibold text-gold italic">
                  "{brand.tagline}"
                </p>

                {/* Description */}
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-light font-sans">
                  {brand.desc}
                </p>

                {/* Checkmarks list */}
                <div className="space-y-1.5 pt-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Official Manufacturer Warranty Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Complimentary Case & Certificate of Authenticity</span>
                  </div>
                </div>
              </div>

              {/* Browse Link */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-6">
                <Link
                  to={`/products?brand=${encodeURIComponent(brand.name)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-gold hover:underline uppercase tracking-wider transition-all"
                >
                  <span>Browse {brand.name} Catalog</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Brands Trust Highlights */}
      <section className="mt-16 bg-gray-50 dark:bg-gray-900/60 p-6 md:p-8 rounded-xl border border-gray-150 dark:border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-3">
          <h3 className="font-serif text-lg md:text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <FaShieldAlt className="text-gold" />
            <span>100% Brand Authenticity Guarantee</span>
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed font-light">
            Every frame purchased from Paradise Optics comes with official brand packaging, manufacturer stamp card, product tags, and 12-month warranty backing. No duplicates, no compromises.
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto py-2 items-center justify-center">
          {BRANDS.slice(0, 5).map((brand, i) => (
            <span key={i} className="text-xs font-semibold px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-gray-500">
              {brand.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Brands;
