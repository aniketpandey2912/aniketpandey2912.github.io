/**
 * Centralized Theme Configuration
 * Professional Dark Theme (Default) with Light Theme Alternative
 * Color Philosophy: Professional blue/gray palette suitable for developer portfolios
 */

// ============================================
// DARK THEME (Default)
// ============================================
const darkTheme = {
  // PRIMARY COLORS
  primary: "#3B82F6", // Professional Blue
  secondary: "#64748B", // Muted Slate Gray
  accent: "#06B6D4", // Teal Blue

  // SECTION BACKGROUNDS
  home: "#0F172A", // Very deep navy
  about: "#1E293B", // Dark slate
  skills: "#334155", // Medium slate
  projects: "#1F2937", // Dark gray-blue
  gitStats: "#0F172A", // Match home
  navbar: "#0F172A", // Match home
  contacts: "#000000", // Pure black

  // SEMANTIC COLORS
  success: "#10B981", // Professional green
  error: "#EF4444", // Professional red
  warning: "#F59E0B", // Professional amber
  info: "#3B82F6", // Match primary

  // TEXT & BORDERS
  textPrimary: "#F8FAFC", // Off-white
  textSecondary: "#CBD5E1", // Light gray

  // NEUTRAL COLORS
  white: "#FFFFFF",
  black: "#000000",
  gray100: "#F8FAFC",
  gray200: "#F1F5F9",
  gray300: "#E2E8F0",
  gray400: "#CBD5E1",
  gray500: "#94A3B8",
  gray600: "#64748B",
  gray700: "#475569",
  gray800: "#334155",
  gray900: "#1E293B",

  // GRADIENTS
  gradients: {
    primary: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
    darkBg: "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
  },

  // INTERACTIVE
  hover: {
    light: "rgba(59, 130, 246, 0.1)",
    dark: "rgba(59, 130, 246, 0.2)",
  },
  focus: {
    color: "#3B82F6",
    shadow: "0 0 0 3px rgba(59, 130, 246, 0.2)",
  },

  hoverScale: {
    skill: 0.97,
    project: 0.99,
  },
};

// ============================================
// LIGHT THEME
// ============================================
const lightTheme = {
  // PRIMARY COLORS
  primary: "#2563EB", // Darker professional blue
  secondary: "#71717A", // Medium gray
  accent: "#0891B2", // Teal

  // SECTION BACKGROUNDS
  home: "#F8FAFC", // Very light gray
  about: "#F1F5F9", // Light gray
  skills: "#ECEFF4", // Slightly darker light gray
  projects: "#E2E8F0", // Mild gray
  gitStats: "#F8FAFC", // Match home
  navbar: "#FFFFFF", // Pure white
  contacts: "#1E293B", // Dark slate

  // SEMANTIC COLORS
  success: "#059669", // Professional green
  error: "#DC2626", // Professional red
  warning: "#D97706", // Professional amber
  info: "#2563EB", // Match primary

  // TEXT & BORDERS
  textPrimary: "#0F172A", // Near-black
  textSecondary: "#475569", // Dark gray

  // NEUTRAL COLORS
  white: "#FFFFFF",
  black: "#000000",
  gray100: "#FFFFFF",
  gray200: "#F8FAFC",
  gray300: "#F1F5F9",
  gray400: "#CBD5E1",
  gray500: "#94A3B8",
  gray600: "#64748B",
  gray700: "#475569",
  gray800: "#334155",
  gray900: "#1E293B",

  // GRADIENTS
  gradients: {
    primary: "linear-gradient(135deg, #2563EB 0%, #0891B2 100%)",
    darkBg: "linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)",
  },

  // INTERACTIVE
  hover: {
    light: "rgba(37, 99, 235, 0.1)",
    dark: "rgba(37, 99, 235, 0.2)",
  },
  focus: {
    color: "#2563EB",
    shadow: "0 0 0 3px rgba(37, 99, 235, 0.2)",
  },

  hoverScale: {
    skill: 0.97,
    project: 0.99,
  },
};

export const COLORS = darkTheme;

// ============================================
// THEME VARIANTS
// ============================================
export const THEME_VARIANTS = {
  dark: {
    name: "Dark",
    ...darkTheme,
  },
  light: {
    name: "Light",
    ...lightTheme,
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

const themeConfig = {
  COLORS,
  THEME_VARIANTS,
  SECTION_IDS,
  NAV_LINKS,
  SITE_INFO,
  RESPONSIVE_SIZES,
};

export default themeConfig;

