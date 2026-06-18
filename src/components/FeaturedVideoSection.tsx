import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function FeaturedVideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl overflow-hidden aspect-video w-full group"
        >
          <img
            className="w-full h-full object-cover"
            src="/images/featured_approach.png"
            alt="Our Approach"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md">
              <div className="text-white/50 text-xs tracking-widest uppercase mb-3">{t('approach.tag')}</div>
              <p className="text-white text-sm md:text-base leading-relaxed">
                {t('approach.body')}
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium self-start md:self-auto"
            >
              {t('approach.explore')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
