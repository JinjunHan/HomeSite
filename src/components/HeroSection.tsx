import { useEffect, useRef } from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const { language, setLanguage, t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fadeOutFrame: number;
    let fadeInFrame: number;
    let isFadingOut = false;

    const fade = (startOpacity: number, endOpacity: number, duration: number, callback?: () => void) => {
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentOpacity = startOpacity + (endOpacity - startOpacity) * progress;
        
        if (video) {
          video.style.opacity = currentOpacity.toString();
        }

        if (progress < 1) {
          if (endOpacity === 1) {
            fadeInFrame = requestAnimationFrame(animate);
          } else {
            fadeOutFrame = requestAnimationFrame(animate);
          }
        } else if (callback) {
          callback();
        }
      };
      
      if (endOpacity === 1) {
        cancelAnimationFrame(fadeInFrame);
        fadeInFrame = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(fadeOutFrame);
        fadeOutFrame = requestAnimationFrame(animate);
      }
    };

    const handleCanPlay = () => {
      video.play().catch(e => console.log('Autoplay prevented:', e));
      fade(0, 1, 500);
    };

    const handleTimeUpdate = () => {
      const remainingTime = video.duration - video.currentTime;
      if (remainingTime <= 0.55 && !isFadingOut) {
        isFadingOut = true;
        fade(parseFloat(video.style.opacity || '1'), 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        isFadingOut = false;
        video.play().catch(e => console.log('Play prevented:', e));
        fade(0, 1, 500);
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(fadeInFrame);
      cancelAnimationFrame(fadeOutFrame);
    };
  }, []);

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Background Poster Image */}
      <img
        src="/images/hero-poster.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-bottom select-none pointer-events-none"
      />

      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0 }}
        muted
        playsInline
        preload="auto"
        src="/videos/hero.mp4"
        poster="/images/hero-poster.jpg"
      />

      {/* Navbar */}
      <nav className="relative z-20 px-6 py-6 w-full">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Globe className="w-6 h-6 text-white" />
            <span className="text-white font-semibold text-lg ml-2">AI Forevery</span>
            <div className="hidden md:flex items-center gap-8 ml-8">
              <a href="#work" className="text-white/80 hover:text-white text-sm font-medium transition-colors">{t('nav.work')}</a>
              <a href="#capabilities" className="text-white/80 hover:text-white text-sm font-medium transition-colors">{t('nav.capabilities')}</a>
              <a href="#philosophy" className="text-white/80 hover:text-white text-sm font-medium transition-colors">{t('nav.philosophy')}</a>
              <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">{t('nav.about')}</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="text-white/85 hover:text-white text-xs font-medium uppercase tracking-wider px-3 py-1.5 transition-colors cursor-pointer"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
            <a 
              href="#contact" 
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors"
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1 className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap font-['Instrument_Serif'] mb-8">
          {t('hero.title')}<em className="italic">{t('hero.titleItalic')}</em>.
        </h1>
        
        <div className="max-w-xl w-full flex flex-col items-center">
          <div className="liquid-glass rounded-full w-full pl-6 pr-2 py-2 flex items-center gap-3 mb-6">
            <input 
              type="email" 
              placeholder={t('hero.placeholder')} 
              className="bg-transparent flex-1 text-white placeholder:text-white/40 focus:outline-none text-base"
            />
            <button className="bg-white rounded-full p-3 text-black hover:scale-105 transition-transform shrink-0">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-white/50 text-sm leading-relaxed px-4 mb-8 max-w-md">
            {t('hero.subtitle')}
          </p>

          <a 
            href="#work" 
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
          >
            {t('hero.explore')}
          </a>
        </div>
      </div>

      {/* Social Icons Footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <FaInstagram className="w-5 h-5" />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <FaTwitter className="w-5 h-5" />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Globe className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
