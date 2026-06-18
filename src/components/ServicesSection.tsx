import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative bg-black py-28 md:py-40 px-6 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end mb-12"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">What we do</h2>
          <span className="text-white/40 text-sm tracking-widest uppercase hidden md:block pb-2">Our services</span>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="liquid-glass rounded-3xl overflow-hidden group flex flex-col">
            <div className="relative aspect-video overflow-hidden">
              <video
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                src="/videos/strategy.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
            </div>
            
            <div className="relative z-20 p-6 md:p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <span className="uppercase tracking-widest text-white/40 text-xs">Strategy</span>
                <div className="liquid-glass rounded-full p-2 text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight">Research & Insight</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="liquid-glass rounded-3xl overflow-hidden group flex flex-col">
            <div className="relative aspect-video overflow-hidden">
              <video
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                src="/videos/craft.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
            </div>
            
            <div className="relative z-20 p-6 md:p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <span className="uppercase tracking-widest text-white/40 text-xs">Craft</span>
                <div className="liquid-glass rounded-full p-2 text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight">Design & Execution</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
