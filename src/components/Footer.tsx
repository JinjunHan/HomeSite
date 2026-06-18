import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer id="contact" className="relative bg-black py-16 px-6 flex flex-col items-center justify-center border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.02)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center justify-center gap-6 text-center">
        {/* Premium Divider Logo */}
        <div className="flex items-center gap-4 text-white/10">
          <span className="w-8 h-px bg-current"></span>
          <span className="font-['Instrument_Serif'] italic text-2xl tracking-widest text-white/40">H</span>
          <span className="w-8 h-px bg-current"></span>
        </div>

        {/* Friendly Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-white/30">
          <span className="text-white/20">{language === 'zh' ? '友情链接：' : 'Links:'}</span>
          <a 
            href="https://www.iashes.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            薄暮
          </a>
          <span className="text-white/10">·</span>
          <a 
            href="https://yourtools.xyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            你的工具
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-white/40">
          <span>{t('footer.copyright')}</span>
          
          <span className="hidden md:inline text-white/10">|</span>
          
          <a 
            href="https://beian.miit.gov.cn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white text-white/40 transition-colors duration-300 tracking-wide font-light"
          >
            粤ICP备2026079383号-1
          </a>
        </div>
      </div>
    </footer>
  );
}
