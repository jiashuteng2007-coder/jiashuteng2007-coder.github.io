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
      image: string;
      imageAlt: string;
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
        "A space for notes, observations, and essays beyond the laboratory. The pieces below are editorial placeholders while the first entries take shape.",
      entries: [
        {
          image: "/images/writing/quiet-window.svg",
          imageAlt: "Editorial placeholder illustration of a quiet window and morning light",
          title: "Notes from an Unhurried Morning",
          excerpt:
            "Placeholder — a future reflection on attention, ordinary rituals, and the ideas that arrive when the day is allowed to begin slowly.",
        },
        {
          image: "/images/writing/field-notes.svg",
          imageAlt: "Editorial placeholder illustration of an open notebook in a green landscape",
          title: "Between Equations and Everyday Life",
          excerpt:
            "Placeholder — a short essay about carrying a researcher's curiosity into books, conversations, movement, and the world outside the lab.",
        },
        {
          image: "/images/writing/evening-track.svg",
          imageAlt: "Editorial placeholder illustration of an athletics track at dusk",
          title: "Learning to Measure Progress Differently",
          excerpt:
            "Placeholder — notes on patience, training, and why meaningful progress is often easier to recognize in retrospect.",
        },
      ],
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
      footer: "Designed and built with care in Tianjin.",
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
      disciplines: ["波导 QED", "离子阱量子计算", "量子纠错"],
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
      title: "人物与文字",
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
      title: "Writing",
      introduction:
        "这里会收录一些实验室之外的观察、札记与随笔。下方内容暂为版式占位，第一批文字正在慢慢成形。",
      entries: [
        {
          image: "/images/writing/quiet-window.svg",
          imageAlt: "安静窗边与晨光的编辑占位插图",
          title: "一个不慌不忙的清晨",
          excerpt: "占位内容——未来会写下关于专注、日常仪式，以及让一天缓慢开始时自然浮现的想法。",
        },
        {
          image: "/images/writing/field-notes.svg",
          imageAlt: "绿色原野中一本打开笔记本的编辑占位插图",
          title: "在公式与日常之间",
          excerpt: "占位内容——一篇关于如何把研究中的好奇心带进阅读、谈话、运动与实验室之外生活的短文。",
        },
        {
          image: "/images/writing/evening-track.svg",
          imageAlt: "暮色中田径跑道的编辑占位插图",
          title: "换一种方式衡量进步",
          excerpt: "占位内容——记录耐心、训练，以及为什么真正重要的进步往往要在回望时才看得清楚。",
        },
      ],
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
      footer: "设计与构建于天津。",
    },
  },
};

export const links = {
  email: `mailto:${shared.emailAddress}`,
  emailAddress: shared.emailAddress,
};
