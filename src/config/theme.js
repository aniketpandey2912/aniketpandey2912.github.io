/**
 * Centralized Theme Configuration
 * Contains all color schemes and theme-related constants
 */

export const COLORS = {
  // Section Backgrounds
  home: "#404258",
  about: "#474E68",
  skills: "#50577A",
  projects: "#6B728E",
  gitStats: "#404258",
  contacts: "#000000",
  navbar: "#000000",

  // UI Colors
  primary: "#37bcf7", // Cyan accent
  white: "#FFFFFF",
  black: "#000000",

  // Interactive Colors
  hoverScale: {
    skill: 0.97,
    project: 0.99,
  },
};

export const SECTION_IDS = {
  home: "home",
  about: "about",
  skills: "skills",
  projects: "projects",
  gitStats: "github",
  contacts: "contacts",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contacts", label: "Contacts" },
];

export const SITE_INFO = {
  author: "Aniket Pandey",
  brandName: "<Aniket Pandey/>",
  github: "aniketpandey2912",
  portfolio: "https://aniketpandey2912.github.io",
};

export const RESPONSIVE_SIZES = {
  navbarBrandSize: { base: "md", sm: "md", md: "md", lg: "md" },
  profileImageHeight: { base: "150px", sm: "200px", md: "300px", lg: "350px" },
  mernImageHeight: { base: "150px", sm: "170px", md: "220px", lg: "350px" },
};

export default {
  COLORS,
  SECTION_IDS,
  NAV_LINKS,
  SITE_INFO,
  RESPONSIVE_SIZES,
};
