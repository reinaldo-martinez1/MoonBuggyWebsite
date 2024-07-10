import ogImageSrc from "@images/content/teamPhotos/moonBuggyLogoFixed.png";

export const SITE = {
  title: "MoonBuggy Engineering Team",
  tagline: "MoonBuggy Engineering Team",
  description: "Founded in 2012, our team is a dynamic and diverse group of students from various academic disciplines united by a passion for innovation and exploration. We bring together talents from engineering, business administration and other majors to design, build, and test human-powered rovers. Our collaborative spirit and multidisciplinary approach drive us to excel in the NASA Human Exploration Rover Challenge, pushing the boundaries of technology and teamwork as we prepare for the future of space exploration.",
  description_short: "Team dedicated to compete in NASA HERC",
  url: "https://moon-buggy-website.vercel.app/",
  author: "Tasktool Department",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://moon-buggy-website.vercel.app/",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Team dedicated to compete in NASA HERC competition.`,
  description: "Founded in 2012, our team is a dynamic and diverse group of students from various academic disciplines united by a passion for innovation and exploration. We bring together talents from engineering, business administration and other majors to design, build, and test human-powered rovers. Our collaborative spirit and multidisciplinary approach drive us to excel in the NASA Human Exploration Rover Challenge, pushing the boundaries of technology and teamwork as we prepare for the future of space exploration.",
  image: ogImageSrc,
};
