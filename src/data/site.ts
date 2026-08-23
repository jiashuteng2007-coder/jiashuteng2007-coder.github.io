export type Locale = "en" | "zh";

export interface SiteContent {
  locale: Locale;
  alternatePath: string;
  alternateLabel: string;
  skipLabel: string;
  navigation: {
    home: string;
  };
  hero: {
    name: string;
    chineseName: string;
    role: string;
    affiliation: string;
    disciplines: string[];
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
  };
  research: {
    label: string;
    projects: Array<{ title: string; status: string }>;
  };
  featured: {
    label: string;
    title: string;
    readLabel: string;
    articles: Array<{
      source: string;
      title: string;
      summary: string;
      href: string;
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
  beyond: {
    label: string;
    title: string;
    introduction: string;
    interests: Array<{ name: string; detail: string; index: string }>;
    note: string;
  };
  contact: {
    label: string;
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
    },
    hero: {
      name: shared.name,
      chineseName: shared.chineseName,
      role: "Undergraduate in Applied Physics",
      affiliation: "School of Science, Tianjin University",
      disciplines: ["Waveguide QED", "Trapped-Ion Quantum Computing", "Quantum Error Correction"],
    },
    about: {
      label: "About",
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
      label: "Featured / Media",
      title: "Featured / Media",
      readLabel: "Read on WeChat",
      articles: [
        {
          source: "Beiyang Jingzhao · 北洋京招",
          title: "Yesterday as Prologue, Today as a New Chapter",
          summary:
            "A reflection on the transition from solving familiar problems in high school to navigating uncertainty, setbacks, and discovery at university.",
          href: "https://mp.weixin.qq.com/s/8Zduj427vciIXn8DgINI7Q",
        },
        {
          source: "TJU Sports · 天大体育",
          title: "Give It Time, and Greater Heights Will Come",
          summary:
            "On how football, track and field, and skiing cultivate release, confidence, competitive spirit, responsibility, and friendship.",
          href: "https://mp.weixin.qq.com/s/2QEH8jLzdwqqsMdjxV6vsA",
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
    beyond: {
      label: "Beyond Research",
      title: "Beyond Research",
      introduction:
        "Sport gives me a counterweight to sustained intellectual work: a way to release pressure, test my limits, and learn responsibility within a team.",
      interests: [
        {
          index: "01",
          name: "Football",
          detail:
            "From a center forward in high school to a defender at university, football taught me to play with greater responsibility, intensity, and trust in others.",
        },
        {
          index: "02",
          name: "Track & Field",
          detail:
            "High jump 1st place, mixed relay 3rd place, and long jump 4th place at Tianjin University’s 5th Wang Zhengting Cup.",
        },
        {
          index: "03",
          name: "Skiing",
          detail:
            "I enjoy the direct encounter with speed, balance, focus, and the confidence required to commit to a line.",
        },
      ],
      note:
        "I believe growth is often quiet and nonlinear. When a result falls short, I reflect, keep training, and give ability time to surface.",
    },
    contact: {
      label: "Contact",
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
    },
    hero: {
      name: shared.chineseName,
      chineseName: shared.name,
      role: "应用物理专业本科生",
      affiliation: "天津大学理学院",
      disciplines: ["波导 QED", "离子阱量子计算", "量子纠错"],
    },
    about: {
      label: "关于我",
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
      label: "人物与文字",
      title: "人物与文字",
      readLabel: "在微信中阅读",
      articles: [
        {
          source: "北洋京招",
          title: "昨日之序，今日之章",
          summary:
            "回望从高中到大学的转变：从熟悉的解题路径走向未知，在挫折、孤独与探索中逐步建立自己的秩序。",
          href: "https://mp.weixin.qq.com/s/8Zduj427vciIXn8DgINI7Q",
        },
        {
          source: "天大体育",
          title: "给时间以耐心，让高度如期而至",
          summary:
            "足球、田径和滑雪既是压力的出口，也是速度、竞争、自信、责任与友谊共同塑造性格的赛场。",
          href: "https://mp.weixin.qq.com/s/2QEH8jLzdwqqsMdjxV6vsA",
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
    beyond: {
      label: "研究之外",
      title: "研究之外",
      introduction:
        "运动是持续脑力工作之外的平衡：它让我释放压力、挑战极限，也让我在集体中理解责任、拼劲与信任。",
      interests: [
        {
          index: "01",
          name: "足球",
          detail:
            "从高中时的中锋到大学里的后卫，位置的变化让我学会承担更多责任，也在竞争与协作中收获了友谊。",
        },
        {
          index: "02",
          name: "田径",
          detail:
            "天津大学第五届“王正廷杯”男子跳高第一名、师生混合接力第三名、男子跳远第四名。",
        },
        {
          index: "03",
          name: "滑雪",
          detail: "我享受与速度、平衡和专注的直接交锋，也享受在作出路线选择后坚定投入的状态。",
        },
      ],
      note:
        "我相信成长往往安静而非线性。未能如愿时，反思、继续训练，并给自己的能力足够时间慢慢上浮。",
    },
    contact: {
      label: "联系",
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
