const CONFIG = {
  tableOfContents: {
    enable: true, // Bật/tắt TOC
    position: 'top', // 'top' | 'sidebar' - vị trí hiển thị
    showH1: true, // Hiển thị H1
    showH2: true, // Hiển thị H2
    showH3: true, // Hiển thị H3
    title: 'Mục lục', // Tiêu đề TOC
  },
  // profile setting (required)
  profile: {
    name: "hoanghiep",
    image: "/notion-avatar-1768832825176.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "cyber security learner",
    bio: "Post and Telecommunications Institute of Technology.",
    email: "hieplbh.ptit@gmail.com",
    github: "https://github.com/hoanghiep1945",
  },
  projects: [
    {
      name: `hoanghiep`,
      href: "https://github.com/hoanghiep1945",
    },
  ],
  // blog setting (required)
  blog: {
    title: "hoanghiep",
    description: "welcome to my blog!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://morethan-log-bay-theta.vercel.app",
  since: 2026, // If leave this empty, current year will be used.
  lang: "vi-VN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 3, // revalidate time for [slug], index
}


module.exports = { CONFIG }
