import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'zh';

const translations = {
  en: {
    nav: {
      work: 'Work',
      capabilities: 'Capabilities',
      philosophy: 'Philosophy',
      about: 'About',
      contact: 'Get in touch'
    },
    hero: {
      title: 'Know it ',
      titleItalic: 'all',
      subtitle: 'Stay updated with my latest projects, technical insights, and creative experiments.',
      placeholder: 'Subscribe to insights',
      subscribeSuccess: 'Subscription successful! Thank you.',
      subscribeInvalidEmail: 'Please enter a valid email address.',
      subscribing: 'Subscribing...',
      explore: 'Explore Work'
    },
    about: {
      tag: 'About',
      text1: 'Building ',
      textItalic1: 'exceptional digital experiences',
      text2: ' at the intersection of ',
      textItalic2: 'design, code, and play.'
    },
    portfolio: {
      tag: 'Portfolio',
      title: 'My iOS & macOS Apps',
      subtitle: 'A showcase of natively crafted applications published on the App Store, prioritizing design, privacy, and user experience.',
      iosSectionTitle: 'iOS Mobile Applications',
      macosSectionTitle: 'macOS Desktop Spotlight',
      macosSectionSubtitle: 'Natively optimized for desktop productivity, layout, and privacy.',
      viewDetails: 'View App Details',
      role: 'Role',
      tech: 'Tech Stack',
      appStore: 'App Store',
      homepage: 'Homepage',
      filterAll: 'All',
      filterIos: 'iOS',
      filterMac: 'macOS',
      apps: {
        notToday: {
          title: 'Not Today',
          subtitle: 'One Less Thing',
          category: 'Lifestyle',
          role: 'Creator & Developer',
          description: "Not Today is a daily reminder that you don't have to do everything. Each day, choose one thing you won't do.",
          details: 'Not Today is not a traditional to-do list. It’s a mindful tool to help you slow down. Choose one task to skip today, gently closing the day with a simple night ritual. Features custom Lock Screen widgets and operates 100% offline with zero trackers for absolute privacy.',
          price: '$0.99'
        },
        todayRecipes: {
          title: 'Today Recipes',
          subtitle: 'Meal Planner',
          category: 'Food & Drink',
          role: 'Creator & Developer',
          description: "Go from 'I have no idea' to 'dinner's ready' — planning meals, auto shopping lists, and parallel cooking timers.",
          details: 'Today Recipes ends the daily cooking agony. Create recipe cards in 30 seconds, plan daily menus, auto-merge shopping lists, and cook efficiently with multi-timer support. Features local AI assistance for instant recipe drafting while prioritizing 100% user privacy and offline functionality.',
          price: 'Free'
        },
        guessWord: {
          title: 'GuessWord Lab',
          subtitle: 'Word Similarity Game',
          category: 'Games / Casual',
          role: 'Creator & Developer',
          description: 'A word game where similarity matters. Roast your vocabulary, make mistakes with style, and challenge your brain.',
          details: "GuessWord Lab is a similarity-based word puzzle game. The system doesn't check if you get the word right, it scores based on semantic proximity to the target. Take the challenge, make mistakes with style, and level up your brain while enjoying self-roasting humor.",
          price: 'Free'
        },
        yourTools: {
          title: 'Your Tools',
          subtitle: 'AI Toolbox',
          category: 'Utilities',
          role: 'Creator & Developer',
          description: 'Your Tools is an all-in-one intelligent media and document toolbox built for everyday productivity.',
          details: 'Use AI to enhance blurry photos, create smart image annotations, recognize and organize receipts, read special file formats, extract and process text, convert images to professional PDFs, add watermarks, turn videos into GIFs, reduce audio noise, scan QR codes, and create subtitle long images from local videos.',
          price: 'Free'
        },
        skypaste: {
          title: 'SkyPaste',
          subtitle: 'Clipboard Manager',
          category: 'Productivity',
          role: 'Creator & Developer',
          description: 'SkyPaste is a lightweight clipboard history manager built for macOS. Save text, images, and links in one place.',
          details: 'SkyPaste automatically records clipboard history. Search and filter by type (Text, Image, URL, Code, Favorites), use custom global shortcuts for instant paste, and keep history local for maximum privacy. Supports iCloud sync across Apple devices.',
          price: 'Free'
        },
        chinaMedPass: {
          title: 'China Med Pass',
          subtitle: 'Travel Health Assistant',
          category: 'Travel',
          role: 'Creator & Developer',
          description: "Intelligent Symptom-to-Chinese Assistant. Generate a bilingual 'Doctor Card' to bridge the language gap.",
          details: 'Navigating a Chinese hospital can be complex. Translate symptoms into bilingual Doctor Cards to show medical staff. Includes a 5-step Chinese hospital guide, preparation checklists, emergency toolbox, and private local health logs.',
          price: 'Free'
        },
        onetools: {
          title: 'OneTools',
          subtitle: 'Everyday Utilities Hub',
          category: 'Utilities',
          role: 'Creator & Developer',
          description: 'OneTools brings together practical utilities for everyday tasks. Scan QR codes, compress photos, convert units, and more.',
          details: 'OneTools features standard/scientific calculators, unit converters, QR code tools, image compressors, live voice-to-text recording, and custom text watermarking in a clean, fast workflow.',
          price: 'Free'
        },
        habitTracker: {
          title: 'Habit Tracker',
          subtitle: 'Daily Focus',
          category: 'Lifestyle',
          role: 'Creator & Developer',
          description: 'Habit Tracker: Daily Planner helps you build a calmer daily routine in one private iPhone app.',
          details: 'Track habits, keep streaks, plan to-dos, start focus sessions, and write private notes. Includes starter routine templates, Lock Screen widgets, local backup, and app lock. Everything operates offline on your device.',
          price: 'Free'
        },
        retroPranks: {
          title: 'Retro Prank Games',
          subtitle: 'Casual Arcade Collection',
          category: 'Games / Casual',
          role: 'Creator & Developer',
          description: 'Retro Prank Games brings 8 offline mini games together in one fast, casual arcade collection for iPhone.',
          details: 'Enjoy 8 casual mini-games: Blow Skirt (mic control), Touch Beauty, Whack-a-Mole, Speed Test, Truth or Dare, Scratch Cards, Gravity Ball (tilt control), and Slash Fruit. Play offline anywhere with zero ads or accounts.',
          price: 'Free'
        },
        localnoteSecret: {
          title: 'LocalNote Secret',
          subtitle: 'Private Offline Notebook',
          category: 'Utilities',
          role: 'Creator & Developer',
          description: 'LocalNote Secret is a private, offline-first notebook designed for users who value control and clarity.',
          details: 'Your notes stay secure on your device with passcode and Face ID protection. Features a clean editor, image attachments, voice recordings, folder organization, important star tagging, and trash recovery. Zero cloud sync.',
          price: 'Free'
        },
        localLockVault: {
          title: 'Local Lock Vault',
          subtitle: 'On-Device Password Vault',
          category: 'Utilities',
          role: 'Creator & Developer',
          description: 'Local Lock Vault is an offline password and private notes vault built for absolute local privacy.',
          details: 'Store credentials, accounts, private emails, and secure notes with local-only encryption. Unlock with master passcode or Face ID, hide passwords with anti-peeping, auto-clear clipboard, and export encrypted vault backups.',
          price: 'Free'
        }
      }
    },
    approach: {
      tag: 'Our Approach',
      body: 'We believe in the power of curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to innovation.',
      explore: 'Explore more'
    },
    philosophy: {
      title: 'Innovation ',
      titleItalic: 'x',
      titleEnd: ' Vision.',
      card1Tag: 'Choose your space',
      card1Body: 'Every meaningful breakthrough begins at the intersection of disciplined strategy and remarkable creative vision. We operate at that crossroads, turning bold thinking into tangible outcomes that move people and reshape industries.',
      card2Tag: 'Shape the future',
      card2Body: 'We believe that the best work emerges when curiosity meets conviction. Our process is designed to uncover hidden opportunities and translate them into experiences that resonate long after the first impression.'
    },
    services: {
      title: 'What we do',
      tag: 'Our services',
      card1Tag: 'Strategy',
      card1Title: 'Research & Insight',
      card1Body: 'We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change.',
      card2Tag: 'Craft',
      card2Title: 'Design & Execution',
      card2Body: 'From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary.'
    },
    footer: {
      copyright: '©️ 2026 韩劲俊. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  zh: {
    nav: {
      work: '作品',
      capabilities: '能力',
      philosophy: '理念',
      about: '关于我',
      contact: '与我联系'
    },
    hero: {
      title: '心知',
      titleItalic: '一切',
      subtitle: '关注我的最新项目、技术洞察和创意实验。',
      placeholder: '订阅我的最新动态',
      subscribeSuccess: '订阅成功！感谢您的关注。',
      subscribeInvalidEmail: '请输入有效的邮箱地址。',
      subscribing: '订阅中...',
      explore: '探索作品'
    },
    about: {
      tag: '关于我',
      text1: '在',
      textItalic1: '设计、代码与趣味',
      text2: '的十字路口，构建',
      textItalic2: '非凡的数字化体验。'
    },
    portfolio: {
      tag: '作品集',
      title: '我的 iOS & macOS 应用',
      subtitle: '在 App Store 上发布的原生应用展示，秉承设计美学、隐私至上和极致体验。',
      iosSectionTitle: 'iOS 移动应用',
      macosSectionTitle: 'macOS 桌面应用专题',
      macosSectionSubtitle: '专为 macOS 桌面端优化的原生效率工具，无缝提效。',
      viewDetails: '查看应用详情',
      role: '角色',
      tech: '技术栈',
      appStore: 'App Store',
      homepage: '官方主页',
      filterAll: '全部',
      filterIos: 'iOS',
      filterMac: 'macOS',
      apps: {
        notToday: {
          title: '今日不做',
          subtitle: '今日不做',
          category: '生活方式',
          role: '独立创作者 & 开发者',
          description: 'Not Today 并不是一个待办事项清单。它是一个提醒：你不需要做完所有的事情。每天，选择一件你今天不做的事。',
          details: 'Not Today 不是传统的 To-Do 清单。它是一个帮助你慢下来的正念工具。每天选择一件事“今天不做”，在睡前通过一个简短的仪式温柔地为一天收尾。支持自定义锁屏组件，100% 本地运行且无任何追踪器，完全保护您的隐私。',
          price: '￥8.00'
        },
        todayRecipes: {
          title: '今日食谱',
          subtitle: '今日食谱与餐食规划',
          category: '美食与佳饮',
          role: '独立创作者 & 开发者',
          description: '从“今天吃什么”的纠结到“晚餐已备妥” — 整合餐食规划、自动合并购物清单和多进程烹饪计时器。',
          details: 'Today Recipes 终结了每日决定下厨的痛苦。30 秒创建食谱卡片，轻松规划每日菜单，自动合并生成采购清单，支持多计时器并行烹饪。内置本地 AI 助手一键生成食谱草稿，同时坚持 100% 隐私保护，完全离线运行。',
          price: '免费'
        },
        guessWord: {
          title: '猜词挑战Lab',
          subtitle: '语义相似度猜词游戏',
          category: '游戏 / 休闲',
          role: '独立创作者 & 开发者',
          description: '一个看重语义接近度的猜词游戏。挑战词汇量，优雅地犯错，一边自嘲一边给大脑升个级！',
          details: 'GuessWord Lab 是一款基于自然语言处理语义接近度打分的趣味谜题游戏。系统不仅仅判断你猜的是否完全正确，还会根据你猜的词与目标词在语义空间中的距离给出相似度评分。接受挑战，在充满幽默与自嘲的氛围中锻炼你的联想能力。',
          price: '免费'
        },
        yourTools: {
          title: 'Your Tools',
          subtitle: 'AI 智能工具箱',
          category: '工具',
          role: '独立创作者 & 开发者',
          description: 'Your Tools 是一款全能型智能媒体与文档工具箱，旨在提升日常工作与学习的效率。',
          details: 'Your Tools 集成了多种强大的多媒体与文档处理工具：AI 图片画质增强、智能标注、收据发票 OCR 识别、Markdown/JSON/HTML/CSV 等多种特殊文件预览、图片转 PDF、隐私水印添加、视频转 GIF、音频降噪、二维码生成与扫描，以及独创的视频台词字幕拼长图等功能。部分核心处理支持本地离线运行，全力保障隐私。',
          price: '免费'
        },
        skypaste: {
          title: 'SkyPaste',
          subtitle: '剪贴板管理器',
          category: '效率',
          role: '独立创作者 & 开发者',
          description: 'SkyPaste 是一款为 macOS 打造的轻量级剪贴板历史记录管理器。',
          details: 'SkyPaste 能自动记录您复制过的文本、图片、链接、代码片段和文件路径。支持快捷搜索与类型筛选，可通过全局自定义快捷键快速唤起与粘贴。数据默认本地存储，并支持 iCloud 同步以便在您的 iPhone 与 Mac 之间快速共享历史记录。',
          price: '免费'
        },
        chinaMedPass: {
          title: 'China Med Pass',
          subtitle: '来华旅游就医助手',
          category: '旅游',
          role: '独立创作者 & 开发者',
          description: '专为外籍来华旅客设计的就医与沟通助手，帮助克服语言障碍。',
          details: 'China Med Pass 帮助外籍旅客轻松应对在华就医。提供智能症状翻译，生成双语“就医卡”出示给医护人员；内置中国公立医院5步导诊指南、常用医疗短语参考、全屏紧急医疗卡以及本地健康日志，所有数据均本地保存以确保隐私。',
          price: '免费'
        },
        onetools: {
          title: 'OneTools',
          subtitle: '多功能实用工具箱',
          category: '工具',
          role: '独立创作者 & 开发者',
          description: 'OneTools 汇集了日常所需的各种实用小工具，助您快速完成轻量化任务。',
          details: 'OneTools 整合了标准与科学计算器、多维度单位换算、二维码生成与扫描、图片快速压缩、实时语音转文字以及自定义文本水印等工具。界面整洁无广告，追求极简与快速的日常效率体验。',
          price: '免费'
        },
        habitTracker: {
          title: 'Habit Tracker',
          subtitle: '习惯追踪与每日专注',
          category: '生活方式',
          role: '独立创作者 & 开发者',
          description: '习惯追踪与每日规划工具，助您在一个清爽私密的空间里建立良好日常作息。',
          details: 'Habit Tracker 将习惯追踪、待办清单、专注计时器与日记便签融为一体。提供早晨日常、喝水提醒、深度学习等模板，支持连续打卡记录，100% 离线运行，数据本地存储，支持应用加锁保护。',
          price: '免费'
        },
        retroPranks: {
          title: 'Retro Prank Games',
          subtitle: '复古聚会小游戏合集',
          category: '游戏 / 休闲',
          role: '独立创作者 & 开发者',
          description: '集成 8 款趣味线下聚会与解压复古小游戏的合集，支持完全离线游玩。',
          details: '本合集包含 8 款简单好玩的复古街机与聚会小游戏：吹裙子（使用麦克风传感器检测风力）、触摸反应、打地鼠、手速测试、真心话大冒险、刮刮乐、重力小球（利用陀螺仪倾斜控制）及切水果。无广告，无强制账号，支持本地分数保存。',
          price: '免费'
        },
        localnoteSecret: {
          title: 'LocalNote Secret',
          subtitle: '私密本地便签本',
          category: '工具',
          role: '独立创作者 & 开发者',
          description: '专为看重隐私与数据主权的个人设计的完全离线便签本。',
          details: 'LocalNote Secret 将所有记事保存在您的设备上，不支持任何云端或服务器备份以隔绝泄露风险。提供文件夹分类、图片附件、录音输入、重要便签加星以及废纸篓找回功能，并可启用应用锁和 Face ID 保护。',
          price: '免费'
        },
        localLockVault: {
          title: 'Local Lock Vault',
          subtitle: '本地私密密码锁',
          category: '工具',
          role: '独立创作者 & 开发者',
          description: '完全离线存储密码与敏感备忘录的安全保险库，坚持数据不出设备。',
          details: 'Local Lock Vault 专为不信任云端密码管理器的用户设计。采用本地高强度加密算法存储账户密码、私密邮箱和敏感笔记，支持主密码与 Face ID 解锁，防窥视隐藏，复制自动清空剪贴板，并提供通过“文件”应用导入导出加密物理备份的功能。',
          price: '免费'
        }
      }
    },
    approach: {
      tag: '创作方式',
      body: '我们坚信“以好奇心驱动探索”的力量。每一个项目都始于一个疑问，而每一个解答都会为你开启一扇通往创新的大门。',
      explore: '探索更多'
    },
    philosophy: {
      title: '创新 ',
      titleItalic: 'x',
      titleEnd: ' 远见。',
      card1Tag: '选择您的空间',
      card1Body: '每一次有意义的突破，都诞生于严谨策略与非凡创意的交汇处。我们立足于这一交汇点，将大胆的设想转化为切实的结果，打动人心并重塑行业。',
      card2Tag: '塑造未来',
      card2Body: '我们相信，当好奇心遇到信念时，便会诞生出色的作品。我们的流程旨在发现隐藏的机遇，并将其转化为在第一印象之后仍能引起长久共鸣的体验。'
    },
    services: {
      title: '我们的服务',
      tag: '服务项目',
      card1Tag: '策略',
      card1Title: '研究与洞察',
      card1Body: '我们深入挖掘数据、文化和人类行为，以发现推动有意义、持久变革的洞察。',
      card2Tag: '手艺',
      card2Title: '设计与执行',
      card2Body: '从概念到上线，我们执着于每一个细节，以提供感觉自然、看起来非凡的体验。',
    },
    footer: {
      copyright: '©️ 2026 韩劲俊. 保留所有权利。',
      privacy: '隐私政策',
      terms: '服务条款'
    }
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'zh') return saved;
    const browserLang = navigator.language.toLowerCase();
    return browserLang.includes('zh') ? 'zh' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (path: string): any => {
    const langDict = translations[language];
    const resolved = path.split('.').reduce((acc: any, part) => acc && acc[part], langDict);
    return resolved || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
