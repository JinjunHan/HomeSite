import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight, Smartphone, Monitor, Copy, Code, Link, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: string;
  bgGradient: string;
  platform: 'ios' | 'macos';
  role: string;
  tech: string[];
  description: string;
  details: string;
  price: string;
  homepage: string;
  appStore: string;
}

export default function PortfolioSection() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const { t } = useLanguage();

  const PROJECTS: Project[] = [
    {
      id: 'not-today',
      title: t('portfolio.apps.notToday.title'),
      subtitle: t('portfolio.apps.notToday.subtitle'),
      category: t('portfolio.apps.notToday.category'),
      icon: '/images/not_today_icon.jpg',
      bgGradient: 'from-[#f3a183] to-[#ec38bc]',
      platform: 'ios',
      role: t('portfolio.apps.notToday.role'),
      tech: ['SwiftUI', 'Widgets', 'Local Storage', 'Minimalist UI'],
      description: t('portfolio.apps.notToday.description'),
      details: t('portfolio.apps.notToday.details'),
      price: t('portfolio.apps.notToday.price'),
      homepage: 'https://abrupt-astronomy-067.notion.site/Not-Today-One-Less-Thing-2d1e2cfd719e807a9c53f369512c0a73',
      appStore: 'https://apps.apple.com/us/app/not-today-one-less-thing/id6756772040'
    },
    {
      id: 'today-recipes',
      title: t('portfolio.apps.todayRecipes.title'),
      subtitle: t('portfolio.apps.todayRecipes.subtitle'),
      category: t('portfolio.apps.todayRecipes.category'),
      icon: '/images/recipes_icon.jpg',
      bgGradient: 'from-[#ff9966] to-[#ff5e62]',
      platform: 'ios',
      role: t('portfolio.apps.todayRecipes.role'),
      tech: ['SwiftUI', 'AI Recipe Drafts', 'Local Database', 'Parallel Timers'],
      description: t('portfolio.apps.todayRecipes.description'),
      details: t('portfolio.apps.todayRecipes.details'),
      price: t('portfolio.apps.todayRecipes.price'),
      homepage: 'https://today-recipes-71c0e.web.app/',
      appStore: 'https://apps.apple.com/us/app/today-recipes-meal-planner/id6757597738'
    },
    {
      id: 'guessword',
      title: t('portfolio.apps.guessWord.title'),
      subtitle: t('portfolio.apps.guessWord.subtitle'),
      category: t('portfolio.apps.guessWord.category'),
      icon: '/images/guess_word_icon.jpg',
      bgGradient: 'from-[#2193b0] to-[#6dd5ed]',
      platform: 'ios',
      role: t('portfolio.apps.guessWord.role'),
      tech: ['SwiftUI', 'NLP / Similarity', 'Haptic Feedback', 'Casual Gaming'],
      description: t('portfolio.apps.guessWord.description'),
      details: t('portfolio.apps.guessWord.details'),
      price: t('portfolio.apps.guessWord.price'),
      homepage: 'https://guess.aiforevery.cn',
      appStore: 'https://apps.apple.com/us/app/guessword-lab-similarity/id6764771833'
    },
    {
      id: 'your-tools',
      title: t('portfolio.apps.yourTools.title'),
      subtitle: t('portfolio.apps.yourTools.subtitle'),
      category: t('portfolio.apps.yourTools.category'),
      icon: '/images/your_tools_icon.jpg',
      bgGradient: 'from-[#8A2387] via-[#E94057] to-[#F27121]',
      platform: 'ios',
      role: t('portfolio.apps.yourTools.role'),
      tech: ['SwiftUI', 'CoreML / OCR', 'AVFoundation', 'PDFKit'],
      description: t('portfolio.apps.yourTools.description'),
      details: t('portfolio.apps.yourTools.details'),
      price: t('portfolio.apps.yourTools.price'),
      homepage: 'https://yourtools.xyz',
      appStore: 'https://apps.apple.com/us/app/your-tools-ai-toolbox/id6670400942'
    },
    {
      id: 'skypaste',
      title: t('portfolio.apps.skypaste.title'),
      subtitle: t('portfolio.apps.skypaste.subtitle'),
      category: t('portfolio.apps.skypaste.category'),
      icon: '/images/skypaste_icon.png',
      bgGradient: 'from-[#4a00e0] to-[#8e2de2]',
      platform: 'macos',
      role: t('portfolio.apps.skypaste.role'),
      tech: ['AppKit / macOS', 'iCloud Sync', 'Core Data', 'Keyboard Shortcuts'],
      description: t('portfolio.apps.skypaste.description'),
      details: t('portfolio.apps.skypaste.details'),
      price: t('portfolio.apps.skypaste.price'),
      homepage: 'https://skypaste.yourtools.xyz/',
      appStore: 'https://apps.apple.com/us/app/skypaste-clipboard-manager/id6760884520'
    },
    {
      id: 'china-med-pass',
      title: t('portfolio.apps.chinaMedPass.title'),
      subtitle: t('portfolio.apps.chinaMedPass.subtitle'),
      category: t('portfolio.apps.chinaMedPass.category'),
      icon: '/images/china_med_icon.jpg',
      bgGradient: 'from-[#0575e6] to-[#00f260]',
      platform: 'ios',
      role: t('portfolio.apps.chinaMedPass.role'),
      tech: ['SwiftUI', 'Medical Translate', 'Preparation Hub', 'On-Device Logs'],
      description: t('portfolio.apps.chinaMedPass.description'),
      details: t('portfolio.apps.chinaMedPass.details'),
      price: t('portfolio.apps.chinaMedPass.price'),
      homepage: 'https://apps.apple.com/us/app/china-med-pass/id6760696337',
      appStore: 'https://apps.apple.com/us/app/china-med-pass/id6760696337'
    },
    {
      id: 'onetools',
      title: t('portfolio.apps.onetools.title'),
      subtitle: t('portfolio.apps.onetools.subtitle'),
      category: t('portfolio.apps.onetools.category'),
      icon: '/images/onetools_icon.jpg',
      bgGradient: 'from-[#11998e] to-[#38ef7d]',
      platform: 'ios',
      role: t('portfolio.apps.onetools.role'),
      tech: ['SwiftUI', 'QR Code', 'Unit Converter', 'AVSpeech'],
      description: t('portfolio.apps.onetools.description'),
      details: t('portfolio.apps.onetools.details'),
      price: t('portfolio.apps.onetools.price'),
      homepage: 'https://pro6764466369.web.app/',
      appStore: 'https://apps.apple.com/us/app/onetools/id6762242793'
    },
    {
      id: 'habit-tracker',
      title: t('portfolio.apps.habitTracker.title'),
      subtitle: t('portfolio.apps.habitTracker.subtitle'),
      category: t('portfolio.apps.habitTracker.category'),
      icon: '/images/habit_tracker_icon.jpg',
      bgGradient: 'from-[#ff007f] to-[#ff00ff]',
      platform: 'ios',
      role: t('portfolio.apps.habitTracker.role'),
      tech: ['SwiftUI', 'Streaks Tracker', 'Focus Timer', 'App Lock'],
      description: t('portfolio.apps.habitTracker.description'),
      details: t('portfolio.apps.habitTracker.details'),
      price: t('portfolio.apps.habitTracker.price'),
      homepage: 'https://pro6764466369.firebaseapp.com/',
      appStore: 'https://apps.apple.com/us/app/habit-tracker-daily-focus/id6764466369'
    },
    {
      id: 'retro-pranks',
      title: t('portfolio.apps.retroPranks.title'),
      subtitle: t('portfolio.apps.retroPranks.subtitle'),
      category: t('portfolio.apps.retroPranks.category'),
      icon: '/images/retro_prank_icon.jpg',
      bgGradient: 'from-[#f857a6] to-[#ff5858]',
      platform: 'ios',
      role: t('portfolio.apps.retroPranks.role'),
      tech: ['SwiftUI', 'AVAudioEngine', 'CoreMotion', 'Game Loops'],
      description: t('portfolio.apps.retroPranks.description'),
      details: t('portfolio.apps.retroPranks.details'),
      price: t('portfolio.apps.retroPranks.price'),
      homepage: 'https://pro6764466369.web.app/',
      appStore: 'https://apps.apple.com/us/app/retro-prank-games/id6773171627'
    },
    {
      id: 'localnote-secret',
      title: t('portfolio.apps.localnoteSecret.title'),
      subtitle: t('portfolio.apps.localnoteSecret.subtitle'),
      category: t('portfolio.apps.localnoteSecret.category'),
      icon: '/images/localnote_secret_icon.jpg',
      bgGradient: 'from-[#00c6ff] to-[#0072ff]',
      platform: 'ios',
      role: t('portfolio.apps.localnoteSecret.role'),
      tech: ['SwiftUI', 'Local Security', 'FaceID', 'AVRecording'],
      description: t('portfolio.apps.localnoteSecret.description'),
      details: t('portfolio.apps.localnoteSecret.details'),
      price: t('portfolio.apps.localnoteSecret.price'),
      homepage: 'https://pro6764466369.web.app/',
      appStore: 'https://apps.apple.com/us/app/localnote-secret/id6768145229'
    },
    {
      id: 'local-lock-vault',
      title: t('portfolio.apps.localLockVault.title'),
      subtitle: t('portfolio.apps.localLockVault.subtitle'),
      category: t('portfolio.apps.localLockVault.category'),
      icon: '/images/local_lock_vault_icon.jpg',
      bgGradient: 'from-[#3a7bd5] to-[#3a6073]',
      platform: 'ios',
      role: t('portfolio.apps.localLockVault.role'),
      tech: ['SwiftUI', 'AES-256', 'FaceID', 'Secure Clipboard'],
      description: t('portfolio.apps.localLockVault.description'),
      details: t('portfolio.apps.localLockVault.details'),
      price: t('portfolio.apps.localLockVault.price'),
      homepage: 'https://pro6764466369.web.app/',
      appStore: 'https://apps.apple.com/us/app/local-lock-vault/id6769601748'
    }
  ];

  const iosProjects = PROJECTS.filter(project => project.platform === 'ios');
  const macosProject = PROJECTS.find(project => project.platform === 'macos');
  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId) || null;

  return (
    <section id="work" className="bg-black py-28 md:py-40 px-6 overflow-hidden flex flex-col items-center border-t border-white/5">
      <div className="max-w-6xl mx-auto w-full relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
          <div>
            <span className="text-white/40 text-sm tracking-widest uppercase mb-4 block">{t('portfolio.tag')}</span>
            <h2 className="text-4xl md:text-6xl text-white tracking-tight">{t('portfolio.title')}</h2>
          </div>
          <p className="text-white/50 text-base max-w-sm leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* iOS Mobile Apps Zone */}
        <div className="w-full mb-20">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-white/60" />
              <h3 className="text-xl md:text-2xl text-white/90 font-medium tracking-tight">
                {t('portfolio.iosSectionTitle')}
              </h3>
            </div>
            <div className="h-px flex-grow bg-white/10" />
            <span className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full font-mono">
              iOS ({iosProjects.length})
            </span>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <AnimatePresence mode="popLayout">
              {iosProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProjectId(project.id)}
                  className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer flex flex-col h-full hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-all duration-500"
                >
                  {/* Card Header Visual */}
                  <div className={`relative aspect-[4/3] overflow-hidden flex items-center justify-center bg-gradient-to-br ${project.bgGradient}`}>
                    {/* Ambient blur */}
                    <div 
                      className="absolute inset-0 opacity-30 blur-2xl transform scale-110" 
                      style={{ backgroundImage: `url(${project.icon})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                    />
                    
                    {/* Floating App Icon */}
                    <motion.div 
                      whileHover={{ y: -6, scale: 1.05 }}
                      className="relative z-10 w-24 h-24 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10"
                    >
                      <img src={project.icon} alt={project.title} className="w-full h-full object-cover" />
                    </motion.div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 z-20">
                      <span className="text-white text-sm font-medium flex items-center gap-2">
                        {t('portfolio.viewDetails')} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Text info */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-white/40 text-xs uppercase tracking-widest">{project.category}</span>
                      <span className="bg-white/10 text-white/80 text-xs px-2.5 py-0.5 rounded-full font-light">{project.price}</span>
                    </div>
                    <h4 className="text-white text-2xl tracking-tight mb-2 font-medium">{project.title}</h4>
                    <p className="text-white/60 text-sm font-light leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="bg-white/5 rounded-full px-3 py-1 text-xs text-white/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* macOS Spotlight Zone */}
        {macosProject && (
          <div className="w-full mt-24">
            <div className="mb-10 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-white/60" />
                <h3 className="text-xl md:text-2xl text-white/90 font-medium tracking-tight">
                  {t('portfolio.macosSectionTitle')}
                </h3>
              </div>
              <div className="h-px flex-grow bg-white/10" />
              <span className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full font-mono">
                macOS
              </span>
            </div>

            {/* Desktop window simulator */}
            <div className="w-full liquid-glass rounded-3xl overflow-hidden shadow-[0_35px_80px_rgba(0,0,0,0.5)] border border-white/10 hover:border-white/15 transition-all duration-500">
              {/* macOS Traffic Lights Header */}
              <div className="h-12 bg-white/[0.02] border-b border-white/5 flex items-center px-6 relative">
                <div className="flex gap-1.5 z-10">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-80" />
                </div>
                <div className="text-xs text-white/30 font-mono absolute inset-x-0 mx-auto w-fit flex items-center gap-1.5 justify-center">
                  <Monitor className="w-3 h-3" />
                  SkyPaste.app &mdash; {t('portfolio.macosSectionSubtitle')}
                </div>
              </div>

              {/* Window Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 lg:p-12 items-center">
                {/* Left Col: Info & Presentation */}
                <div className="lg:col-span-5 flex flex-col items-start text-left">
                  <div className="flex items-center gap-5 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      onClick={() => setSelectedProjectId(macosProject.id)}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.4)] border border-white/10 cursor-pointer flex-shrink-0"
                    >
                      <img src={macosProject.icon} alt={macosProject.title} className="w-full h-full object-cover" />
                    </motion.div>
                    <div>
                      <span className="text-white/40 text-xs uppercase tracking-widest block mb-1">
                        {macosProject.category} &bull; {macosProject.price}
                      </span>
                      <h4 
                        onClick={() => setSelectedProjectId(macosProject.id)}
                        className="text-white text-3xl font-semibold tracking-tight hover:text-white/80 cursor-pointer transition-colors"
                      >
                        {macosProject.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 font-light">
                    {macosProject.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {macosProject.tech.map((tech) => (
                      <span key={tech} className="bg-white/5 border border-white/5 rounded-full px-3 py-1 text-xs text-white/60">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedProjectId(macosProject.id)}
                      className="bg-white text-black hover:scale-105 transition-transform rounded-full px-6 py-2.5 text-sm font-semibold flex items-center gap-2 cursor-pointer"
                    >
                      {t('portfolio.viewDetails')} <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={macosProject.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liquid-glass border border-white/10 text-white hover:bg-white/5 transition-colors rounded-full px-5 py-2.5 text-sm font-semibold flex items-center gap-2"
                    >
                      {t('portfolio.appStore')} <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Col: High-fidelity App UI Preview */}
                <div className="lg:col-span-7 w-full">
                  <div className="bg-[#121212]/90 rounded-2xl border border-white/5 overflow-hidden flex flex-col h-[320px] md:h-[360px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {/* Mock Search Bar & Filter Tabs */}
                    <div className="px-4 py-3 bg-white/[0.02] border-b border-white/5 flex flex-col md:flex-row gap-3 justify-between items-center">
                      <div className="w-full md:w-48 h-7 bg-white/5 rounded-md border border-white/5 flex items-center px-3 text-[11px] text-white/30 gap-1.5">
                        <span className="w-2.5 h-2.5 border border-white/35 rounded-full flex items-center justify-center text-[8px]">⌘</span>
                        <span>Search history...</span>
                      </div>
                      
                      <div className="flex gap-1 text-[10px] font-mono">
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white font-medium">All</span>
                        <span className="px-2 py-0.5 rounded text-white/40 hover:text-white/70 cursor-pointer">Text</span>
                        <span className="px-2 py-0.5 rounded text-white/40 hover:text-white/70 cursor-pointer">Code</span>
                        <span className="px-2 py-0.5 rounded text-white/40 hover:text-white/70 cursor-pointer">Links</span>
                      </div>
                    </div>

                    {/* Mock Clipboard List */}
                    <div className="flex-grow flex text-left font-sans text-xs">
                      {/* Sidebar Categories */}
                      <div className="w-1/4 bg-white/[0.01] border-r border-white/5 p-3 flex flex-col gap-2">
                        <div className="px-2.5 py-1.5 rounded-lg bg-white/5 text-white flex items-center gap-1.5 font-medium">
                          <Layers className="w-3.5 h-3.5 text-blue-400" />
                          <span>History</span>
                        </div>
                        <div className="px-2.5 py-1.5 rounded-lg text-white/40 hover:text-white/60 flex items-center gap-1.5 cursor-pointer">
                          <Copy className="w-3.5 h-3.5" />
                          <span>Pinned</span>
                        </div>
                      </div>

                      {/* Content List */}
                      <div className="w-3/4 p-4 flex flex-col gap-3.5 overflow-y-auto">
                        {/* Mock Item 1: Code */}
                        <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-1.5">
                          <div className="flex justify-between items-center text-[10px] text-white/35">
                            <span className="flex items-center gap-1"><Code className="w-3 h-3 text-purple-400" /> CSS Code</span>
                            <span>2 mins ago</span>
                          </div>
                          <pre className="font-mono text-[10px] text-purple-200/90 bg-black/40 p-2 rounded overflow-x-auto leading-relaxed border border-white/[0.02]">
{`.glassmorphism {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
}`}
                          </pre>
                        </div>

                        {/* Mock Item 2: Link */}
                        <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-1.5">
                          <div className="flex justify-between items-center text-[10px] text-white/35">
                            <span className="flex items-center gap-1"><Link className="w-3 h-3 text-blue-400" /> URL Link</span>
                            <span>15 mins ago</span>
                          </div>
                          <span className="text-blue-400 font-mono text-[10px] truncate hover:underline cursor-pointer">
                            https://skypaste.yourtools.xyz/
                          </span>
                        </div>

                        {/* Mock Item 3: Text */}
                        <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-1.5">
                          <div className="flex justify-between items-center text-[10px] text-white/35">
                            <span>📝 Copied Text</span>
                            <span>1 hr ago</span>
                          </div>
                          <p className="text-white/70 text-[11px] font-light leading-relaxed">
                            "AI Forevery - Premium developer portfolio design specifications..."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Overlay using AnimatePresence */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProjectId(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="liquid-glass w-full max-w-4xl rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.1)] flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] bg-black/80"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Visual panel */}
                <div className={`w-full md:w-1/2 relative flex items-center justify-center bg-gradient-to-br ${selectedProject.bgGradient} aspect-[4/3] md:aspect-auto`}>
                  {/* Ambient blur */}
                  <div 
                    className="absolute inset-0 opacity-40 blur-3xl transform scale-110" 
                    style={{ backgroundImage: `url(${selectedProject.icon})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                  />
                  
                  {/* Floating App Icon */}
                  <div className="relative z-10 w-36 h-36 rounded-[2rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/15">
                    <img src={selectedProject.icon} alt={selectedProject.title} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Close button for mobile inside image */}
                  <button
                    onClick={() => setSelectedProjectId(null)}
                    className="absolute top-4 right-4 md:hidden bg-black/60 backdrop-blur-md text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Info panel */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-none bg-black/40">
                  {/* Close button desktop */}
                  <button
                    onClick={() => setSelectedProjectId(null)}
                    className="hidden md:flex self-end text-white/50 hover:text-white transition-colors mb-4 cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="mt-auto text-left">
                    <span className="text-white/40 text-xs uppercase tracking-widest mb-2 block">
                      {selectedProject.category} &bull; {selectedProject.price}
                    </span>
                    <h3 className="text-white text-3xl md:text-4xl tracking-tight mb-4 font-semibold">
                      {selectedProject.title}
                    </h3>
                    <p className="text-white/85 text-sm leading-relaxed mb-6 font-light">
                      {selectedProject.details}
                    </p>

                    <div className="w-full h-px bg-white/10 my-6" />

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <span className="text-white/40 text-xs uppercase tracking-widest mb-1 block">{t('portfolio.role')}</span>
                        <span className="text-white/80 text-sm">{selectedProject.role}</span>
                      </div>
                      <div>
                        <span className="text-white/40 text-xs uppercase tracking-widest mb-1 block">{t('portfolio.tech')}</span>
                        <span className="text-white/80 text-sm flex flex-wrap gap-1">
                          {selectedProject.tech.join(', ')}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={selectedProject.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black hover:scale-105 transition-transform rounded-full px-6 py-2.5 text-sm font-semibold flex items-center gap-2 cursor-pointer"
                      >
                        {t('portfolio.appStore')} <Smartphone className="w-4 h-4" />
                      </a>
                      <a
                        href={selectedProject.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="liquid-glass border border-white/10 text-white hover:bg-white/5 transition-colors rounded-full px-6 py-2.5 text-sm font-semibold flex items-center gap-2"
                      >
                        {t('portfolio.homepage')} <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
