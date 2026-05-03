/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { FileText, Download, Eye, ShieldCheck } from 'lucide-react';

export default function CertificatesPage() {
  const certificates = [
    {
      title: "GST Certificate",
      description: "Goods and Services Tax Registration Certificate of ADH Group.",
      file: "/gallery/gst.pdf",
      icon: <FileText size={40} className="text-primary" />,
      color: "bg-blue-50"
    },
    {
      title: "UDYAM Certificate",
      description: "MSME Registration Certificate for ADH Group operations.",
      file: "/gallery/udyam.pdf",
      icon: <ShieldCheck size={40} className="text-accent" />,
      color: "bg-red-50"
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-primary py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1 mb-6 text-xs font-bold uppercase tracking-[0.2em] text-light-blue bg-white/10 rounded-full backdrop-blur-sm">
              Official Documentation
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">Our Certificates</h1>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-bg-light min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-24 h-24 rounded-3xl ${cert.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">{cert.title}</h3>
                <p className="text-slate-600 font-medium mb-10 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full mt-auto">
                  <a 
                    href={cert.file} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                  >
                    <Eye size={18} /> View PDF
                  </a>
                  <a 
                    href={cert.file} 
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-bg-light text-slate-900 font-bold uppercase tracking-widest text-xs rounded-2xl border border-slate-200 hover:bg-slate-100 transition-colors"
                  >
                    <Download size={18} /> Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
