export type Locale = "en" | "zh";

export interface SiteContent {
  locale: Locale;
  alternatePath: string;
  alternateLabel: string;
  skipLabel: string;
  navigation: {
    home: string;
    writing: string;
  };
  hero: {
    name: string;
    chineseName: string;
    role: string;
    affiliation: string;
    disciplines: string[];
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  research: {
    label: string;
    projects: Array<{ title: string; status: string }>;
  };
  featured: {
    title: string;
    readLabel: string;
    articles: Array<{
      source: string;
      title: string;
      year: string;
      href: string;
    }>;
  };
  writing: {
    title: string;
    introduction: string;
    entries: Array<{
      slug: string;
      date: string;
      image: string;
      imageAlt: string;
      imageFit?: "cover" | "contain";
      imageBackground?: string;
      imagePosition?: string;
      title: string;
      excerpt: string;
    }>;
  };
  education: {
    label: string;
    title: string;
    institution: string;
    degree: string;
    period: string;
    metrics: Array<{ value: string; label: string }>;
  };
  honors: {
    label: string;
    title: string;
    items: Array<{ title: string; year: string; detail?: string }>;
  };
  contact: {
    title: string;
    emailLabel: string;
    footer: string;
  };
}

const shared = {
  name: "Jiashu Teng",
  chineseName: "滕佳树",
  emailAddress: "jiashuteng2007@gmail.com",
};

export const content: Record<Locale, SiteContent> = {
  en: {
    locale: "en",
    alternatePath: "/zh/",
    alternateLabel: "中文",
    skipLabel: "Skip to content",
    navigation: {
      home: "Home",
      writing: "Writing",
    },
    hero: {
      name: shared.name,
      chineseName: shared.chineseName,
      role: "Undergraduate in Applied Physics",
      affiliation: "School of Science, Tianjin University",
      disciplines: ["Waveguide QED", "Quantum Optics", "Quantum Information"],
    },
    about: {
      title: "About",
      paragraphs: [
        "I am an undergraduate student in Applied Physics at Tianjin University, interested in waveguide quantum electrodynamics, quantum optics, and non-Hermitian physics.",
        "My current work uses analytical modeling and numerical computation to connect collective light–matter interactions with experimentally accessible local signals.",
      ],
    },
    research: {
      label: "Research",
      projects: [
        {
          title: "Local-Probe Spectroscopy of a Tunable Artificial Atomic Cavity",
          status: "Ongoing research · Manuscript in preparation",
        },
      ],
    },
    featured: {
      title: "Media Coverage",
      readLabel: "Read on WeChat",
      articles: [
        {
          source: "TJU Beijing Admissions",
          title: "Yesterday as Prologue, Today as a New Chapter",
          year: "2025",
          href: "https://mp.weixin.qq.com/s/8Zduj427vciIXn8DgINI7Q",
        },
        {
          source: "TJU Sports Department",
          title: "Give It Time, and Greater Heights Will Come",
          year: "2026",
          href: "https://mp.weixin.qq.com/s/2QEH8jLzdwqqsMdjxV6vsA",
        },
      ],
    },
    writing: {
      title: "Writing",
      introduction:
        "A space for observations, notes, and essays beyond the laboratory, including moments from music, reading, and everyday life.",
      entries: [],
    },
    education: {
      label: "Education",
      title: "Education",
      institution: "Tianjin University · School of Science",
      degree: "B.S. candidate in Applied Physics",
      period: "2024 — present",
      metrics: [
        { value: "95.9", label: "Weighted average / 100" },
        { value: "3.97", label: "GPA / 4.00" },
        { value: "1st", label: "Applied Physics program" },
      ],
    },
    honors: {
      label: "Selected Honors",
      title: "Selected Honors",
      items: [
        {
          title: "National Scholarship for Undergraduate Students",
          year: "2025",
        },
        {
          title: "First Prize, Chinese Mathematics Competitions",
          year: "2025",
          detail: "Tianjin Division · Non-Mathematics Category A",
        },
        {
          title: "1st Place, Men’s High Jump",
          year: "2025",
          detail: "5th Wang Zhengting Cup Comprehensive Sports Meeting · Tianjin University",
        },
      ],
    },
    contact: {
      title: "Contact",
      emailLabel: "Email",
      footer: "Designed and built with care in Beijing.",
    },
  },
  zh: {
    locale: "zh",
    alternatePath: "/",
    alternateLabel: "EN",
    skipLabel: "跳至正文",
    navigation: {
      home: "首页",
      writing: "随笔",
    },
    hero: {
      name: shared.chineseName,
      chineseName: shared.name,
      role: "应用物理专业本科生",
      affiliation: "天津大学理学院",
      disciplines: ["波导 QED", "量子光学", "量子信息"],
    },
    about: {
      title: "关于我",
      paragraphs: [
        "我是天津大学理学院应用物理专业本科生，研究兴趣包括波导量子电动力学、量子光学与非厄米物理。",
        "目前，我通过解析建模与数值计算，尝试把集体光–物质相互作用与实验可读出的局域信号联系起来。",
      ],
    },
    research: {
      label: "研究",
      projects: [
        {
          title: "可调人工原子腔的局域探测光谱",
          status: "在研项目 · 论文撰写中",
        },
      ],
    },
    featured: {
      title: "媒体报道",
      readLabel: "在微信中阅读",
      articles: [
        {
          source: "北洋京招",
          title: "昨日之序，今日之章",
          year: "2025",
          href: "https://mp.weixin.qq.com/s/8Zduj427vciIXn8DgINI7Q",
        },
        {
          source: "天大体育",
          title: "给时间以耐心，让高度如期而至",
          year: "2026",
          href: "https://mp.weixin.qq.com/s/2QEH8jLzdwqqsMdjxV6vsA",
        },
      ],
    },
    writing: {
      title: "随笔",
      introduction:
        "这里收录一些实验室之外的观察、札记与随笔，也记录音乐、阅读与日常生活中偶然停驻的时刻。",
      entries: [],
    },
    education: {
      label: "教育背景",
      title: "教育背景",
      institution: "天津大学 · 理学院",
      degree: "应用物理专业本科生",
      period: "2024 — 至今",
      metrics: [
        { value: "95.9", label: "加权平均成绩 / 100" },
        { value: "3.97", label: "GPA / 4.00" },
        { value: "第 1", label: "应用物理专业排名" },
      ],
    },
    honors: {
      label: "代表性荣誉",
      title: "代表性荣誉",
      items: [
        {
          title: "本科生国家奖学金",
          year: "2025",
        },
        {
          title: "全国大学生数学竞赛省级一等奖",
          year: "2025",
          detail: "非数学 A 类 · 天津赛区",
        },
        {
          title: "学生组男子跳高第一名",
          year: "2025",
          detail: "天津大学第五届“王正廷杯”综合运动会",
        },
      ],
    },
    contact: {
      title: "联系",
      emailLabel: "邮箱",
      footer: "设计与构建于北京。",
    },
  },
};

export const links = {
  email: `mailto:${shared.emailAddress}`,
  emailAddress: shared.emailAddress,
};
