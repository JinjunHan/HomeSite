import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="bg-black py-28 md:py-40 px-6 overflow-hidden flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
        >
          {t('philosophy.title')}<em className="font-['Instrument_Serif'] italic text-white/40 px-2">{t('philosophy.titleItalic')}</em>{t('philosophy.titleEnd')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden aspect-[4/3]"
          >
            <img
              className="w-full h-full object-cover"
              src="/images/philosophy_vision.png"
              alt="Philosophy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div>
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">{t('philosophy.card1Tag')}</div>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {t('philosophy.card1Body')}
              </p>
            </div>

            <div className="w-full h-px bg-white/10 my-8" />

            <div>
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">{t('philosophy.card2Tag')}</div>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {t('philosophy.card2Body')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
