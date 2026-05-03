/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/c/917900990004"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl border border-white/20"
        title="WhatsApp Us"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+917900990004"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl border border-white/20"
        title="Call Us"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
