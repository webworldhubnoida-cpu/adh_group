/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, HandCoins, ShieldCheck, FileText, Gavel } from 'lucide-react';

const deals = [
  {
    title: "Property Sale Services",
    subtitle: "Strategic Selling & Liquidation",
    description: "We provide reliable property sale services, assisting clients in selling their residential and commercial properties at the best market value. Our team handles pricing, promotion, buyer verification, negotiation, and documentation to ensure a smooth and secure selling experience.",
    features: [
      "Verified & trusted property listings",
      "Fair pricing and market valuation",
      "Negotiation support to get the best value",
      "Professional buyer verification for secure deals",
      "Assistance with legal documentation & paperwork",
      "End-to-end guidance for buyers & sellers"
    ],
    icon: <TrendingUp className="text-brand-gold" size={32} />,
    image: "https://img.freepik.com/premium-photo/real-estate-agent-handing-house-key-owner-successful-property-sale-purchase-agreement-ownership_986249-9.jpg",
    accent: "Market Expert"
  },
  {
    title: "Property Purchase Services",
    subtitle: "Acquisition & Strategic Investment",
    description: "Our property purchase service not only guides clients in buying residential and commercial properties but also allows our company to acquire properties for investment and development. From identifying suitable properties to handling negotiations and documentation, we ensure smooth and transparent transactions.",
    features: [
      "Facilitates smooth property purchases for clients",
      "Actively acquires properties for company investment",
      "Quick and secure property acquisition process",
      "Guidance on residential, commercial, and land",
      "Expert market research & property valuation",
      "Ensures both client and company efficiency"
    ],
    icon: <HandCoins className="text-brand-gold" size={32} />,
    image: "https://tse4.mm.bing.net/th/id/OIP._sgTIdVaS9jRWp6PPmN2kAHaCl?w=1200&h=420&rs=1&pid=ImgDetMain&o=7&rm=3",
    accent: "Investment Focus"
  }
];

export default function PropertyDeals() {
  return (
    <section className="py-24 bg-brand-blue-deep border-b border-brand-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="editorial-section-title block mb-4"
          >
            Transaction Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-serif italic text-white mb-6"
          >
            Property Sales & Purchase
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-gray font-light leading-relaxed"
          >
            Navigating the Aligarh real estate market with transparency, expertise, and a commitment to securing the best value for every stakeholder.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="editorial-border bg-brand-blue relative flex flex-col group h-full overflow-hidden"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-full object-cover "
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-blue-deep/60 group-hover:bg-brand-blue-deep/20 transition-all duration-700" />
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 py-2 px-6 bg-brand-gold text-brand-blue-deep text-[10px] uppercase font-bold tracking-[3px] z-10">
                  {deal.accent}
                </div>
              </div>

              <div className="p-12 pt-8 flex flex-col flex-grow">
                <div className="mb-8 p-4 bg-brand-blue-deep inline-block editorial-border self-start">
                  {deal.icon}
                </div>

                <div className="mb-4">
                  <span className="text-brand-gold text-xs uppercase tracking-[4px] font-medium block mb-2">{deal.subtitle}</span>
                  <h3 className="text-3xl font-serif italic text-white">{deal.title}</h3>
                </div>

                <p className="text-brand-gray text-sm font-light leading-relaxed mb-10 flex-grow">
                  {deal.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {deal.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3 group/item">
                      <CheckCircle2 size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-xs font-light leading-snug group-hover/item:text-white transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-brand-gold/10">
                  <button className="flex items-center space-x-4 text-brand-gold hover:text-white transition-all group/btn">
                    <span className="text-xs uppercase tracking-[4px] font-bold">Inquire About This Service</span>
                    <div className="w-8 h-px bg-brand-gold group-hover/btn:w-12 transition-all" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Assurance Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-brand-gold p-1 flex flex-wrap items-center justify-around gap-8"
        >
          <div className="flex items-center space-x-3 px-8 py-3 bg-brand-blue-deep w-full flex-grow justify-center">
            <ShieldCheck size={20} className="text-brand-gold" />
            <span className="text-white text-[10px] uppercase tracking-[3px] font-bold">100% Legal Transparency</span>
          </div>
          <div className="flex items-center space-x-3 px-8 py-3 bg-brand-blue-deep w-full flex-grow justify-center">
            <FileText size={20} className="text-brand-gold" />
            <span className="text-white text-[10px] uppercase tracking-[3px] font-bold">Verified Paperwork</span>
          </div>
          <div className="flex items-center space-x-3 px-8 py-3 bg-brand-blue-deep w-full flex-grow justify-center">
            <Gavel size={20} className="text-brand-gold" />
            <span className="text-white text-[10px] uppercase tracking-[3px] font-bold">Fair Value Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
