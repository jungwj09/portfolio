export const translations = {
  ko: {
    // Header nav
    "nav.about": "자기소개",
    "nav.tech": "기술 스택",
    "nav.projects": "프로젝트",
    "nav.activity": "활동",
    "nav.contact": "연락처",

    // Hero
    "hero.tagline": "사람과 사회에 긍정적인 임팩트를 만드는 개발자",
    "hero.name": "정우진",
    "hero.name.suffix": "입니다",
    "hero.scroll": "아래로 스크롤하여 자세한 내용을 확인하세요",

    // About
    "about.title": "자기소개",
    "about.subtitle": "저를 소개합니다",
    "about.greeting": "안녕하세요👋",
    "about.intro":
      "저는 문제를 발견하고, 해결책을 제품으로 구현하는 과정을 즐기는 개발자 정우진입니다.",
    "about.belief.highlight": "기술의 온기로 더 나은 세상을 설계한다",
    "about.belief.rest":
      "는 신념 아래,\n사람을 이해하는 기술, 그리고 사회에 긍정적인 임팩트를 남기는 서비스를 만드는\nStartup Founder로 성장하고자 노력하고 있습니다.",
    "about.stat.projects": "완성된 프로젝트",
    "about.stat.tech": "다루는 기술스택",
    "about.stat.awards": "수상경력",
    "about.stat.github": "GitHub 기여도",

    // Tech
    "tech.title": "기술 스택",
    "tech.subtitle": "제가 주로 다루는 기술들이에요",
    "tech.hint":
      "아이콘을 클릭하면 해당 기술스택의 경험과 사용된 프로젝트를 확인할 수 있습니다.",
    "tech.modal.experience": "경험",
    "tech.modal.projects": "사용된 프로젝트",

    // Projects
    "projects.title": "프로젝트",
    "projects.subtitle": "제가 지금까지 진행했던 프로젝트들이에요",

    // Activity
    "activity.title": "활동",
    "activity.subtitle": "그동안의 제 활동을 소개할게요",
    "activity.sort.recent": "최근 활동부터",
    "activity.sort.old": "예전 활동부터",
    "activity.more": "더 보기",
    "activity.less": "간략히 보기",

    // Contact
    "contact.title": "연락처",
    "contact.subtitle": "제 연락처에요",
    "contact.heading": "언제든지 편하게 연락주세요",
    "contact.body":
      "협업 제안, 질문, 아이디어 공유 등\n어떤 내용이든 환영합니다.\n최대한 빠르게 답장드릴게요.",
    "contact.available": "현재 연락 가능합니다",
    "contact.email.desc": "가장 빠르게 답장을 받으실 수 있어요",
    "contact.github.desc": "제 코드를 구경해보세요",
    "contact.linkedin.desc": "커리어 관련 연락은 여기서",
    "contact.instagram.desc": "일상도 가끔 올려요",

    // Footer
    "footer.rights": "© 2026 Woojin Jung. All rights reserved.",
    "footer.tagline":
      "Engineering a better world with the warmth of technology.",
  },

  en: {
    // Header nav
    "nav.about": "About",
    "nav.tech": "Tech Stack",
    "nav.projects": "Projects",
    "nav.activity": "Activities",
    "nav.contact": "Contact",

    // Hero
    "hero.tagline":
      "A developer creating positive impact for people and society",
    "hero.name": "Woojin Jung",
    "hero.name.suffix": "",
    "hero.scroll": "Scroll down to learn more",

    // About
    "about.title": "About Me",
    "about.subtitle": "Let me introduce myself",
    "about.greeting": "Hello there 👋",
    "about.intro":
      "I'm Woojin Jung, a developer who enjoys discovering problems and turning solutions into products.",
    "about.belief.highlight":
      "Designing a better world with the warmth of technology",
    "about.belief.rest":
      " — driven by this belief,\nI strive to grow as a Startup Founder who builds\ntechnology that understands people and creates positive impact.",
    "about.stat.projects": "Completed Projects",
    "about.stat.tech": "Tech Skills",
    "about.stat.awards": "Awards",
    "about.stat.github": "GitHub Contributions",

    // Tech
    "tech.title": "Tech Stack",
    "tech.subtitle": "Technologies I mainly work with",
    "tech.hint":
      "Click an icon to see my experience and projects using that technology.",
    "tech.modal.experience": "Experience",
    "tech.modal.projects": "Used In",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "Projects I've worked on so far",

    // Activity
    "activity.title": "Activities",
    "activity.subtitle": "Here are my activities so far",
    "activity.sort.recent": "Most Recent",
    "activity.sort.old": "Oldest First",
    "activity.more": "Show More",
    "activity.less": "Show Less",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Here's how to reach me",
    "contact.heading": "Feel free to reach out anytime",
    "contact.body":
      "Collaboration proposals, questions, idea sharing —\nall messages are welcome.\nI'll get back to you as soon as possible.",
    "contact.available": "Currently available",
    "contact.email.desc": "Fastest way to get a reply",
    "contact.github.desc": "Check out my code",
    "contact.linkedin.desc": "For career-related inquiries",
    "contact.instagram.desc": "I post daily life sometimes",

    // Footer
    "footer.rights": "© 2026 Woojin Jung. All rights reserved.",
    "footer.tagline":
      "Engineering a better world with the warmth of technology.",
  },
};

export type Lang = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)["ko"];