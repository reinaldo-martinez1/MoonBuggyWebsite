/**
 * The following code defines constants related to the website's structure.
 * It manages the navegation bar links and includes links for the footer, such
 * as the team's social media platforms and other relevant website sections.
 */

// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Departments", url: "/departments"},
  { name: "Sponsors", url: "/sponsors" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "MoonBuggy Website",
    links: [
      { name: "About", url: "/about" },
      { name: "Departments", url: "/departments" },
      { name: "Sponsors", url: "/sponsors" },
      { name: "Contact", url: "/contact" },
    ],
  },
 
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/UPRMMET/",
  x: "https://twitter.com/uprmmet",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
  instagram: "https://www.instagram.com/uprmmoonbuggy/",
  linkedin: "https://www.linkedin.com/company/uprm-moonbuggy-engineering-team",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};