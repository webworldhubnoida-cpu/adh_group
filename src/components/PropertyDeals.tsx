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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full">
              Transaction Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Property Sales & <span className="text-primary">Purchase</span>
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Navigating the Aligarh real estate market with transparency, expertise, and a commitment to securing the best value for every stakeholder.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col h-full overflow-hidden bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              {/* Image Header */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60" />
                
                {/* Corner Accent */}
                <div className="absolute top-6 right-6 py-2 px-6 bg-accent text-white text-[10px] uppercase font-bold tracking-[3px] z-10 rounded-full shadow-lg">
                  {deal.accent}
                </div>
              </div>

              <div className="p-10 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center">
                    {index === 0 ? <TrendingUp size={28} /> : <HandCoins size={28} />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900">{deal.title}</h3>
                    <p className="text-sm font-bold text-primary uppercase tracking-widest mt-1">{deal.subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-600 font-medium leading-relaxed mb-8">
                  {deal.description}
                </p>

                <div className="grid grid-cols-1 gap-4 mt-auto">
                  {deal.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                      <CheckCircle2 size={18} className="text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <button className="w-full py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-colors shadow-lg shadow-primary/10">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
