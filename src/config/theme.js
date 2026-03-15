/**
 * Centralized Theme Configuration
 * Contains light and dark color schemes with theme-related constants
 * Color palettes designed for accessibility (WCAG AA+) and modern aesthetics
 */

/**
 * LIGHT THEME: "Dawn" - Clean, professional, highly accessible
 *
 * Design Principles:
 * - Subtle whites and light grays (#FFFFFF, #F8FAFC) - bright but not harsh
 * - Sky blue accent (#0EA5E9) - modern, tech-forward, professional
 * - Strong text contrast (WCAG AAA) for readability
 * - Professional corporate aesthetic
 * - High accessibility (100+ contrast ratios)
 */
export const LIGHT_COLORS = {
  // Grayscale Foundation - Clean professional progression
  bg: {
    lightest: "#FFFFFF", // Brightest white
    light: "#F8FAFC", // Very light blue-gray
    base: "#F1F5F9", // Light surface
    elevated: "#FFFFFF", // Cards/containers
    hover: "#F0F4F8", // Hover state
  },

  // Legacy section backgrounds (kept for compatibility)
  home: "#FFFFFF",
  about: "#F8FAFC",
  skills: "#FFFFFF",
  projects: "#F8FAFC",
  gitStats: "#FFFFFF",
  contacts: "#F8FAFC",
  navbar: "#FFFFFF",

  // Text Colors - Dark slate for excellent contrast
  text: "#1E293B", // Primary text - dark slate (WCAG AAA)
  textSecondary: "#64748B", // Secondary text - medium slate
  textTertiary: "#94A3B8", // Tertiary/muted text
  textMuted: "#A8B5BD", // Muted gray for disabled/subtle

  // Primary Accent Colors - Professional tech aesthetic
  primary: "#0EA5E9", // Sky blue - main accent, vibrant
  primary_hover: "#0284C7", // Darker sky blue for hover
  primary_light: "#38BDF8", // Lighter sky blue for emphasis

  secondary: "#8B5CF6", // Purple - complementary accent
  secondary_hover: "#7C3AED", // Darker purple for interaction

  // Semantic Colors - Clear intent with professional tones
  success: "#10B981", // Emerald - positive actions (strong)
  success_hover: "#059669", // Darker emerald
  success_light: "#6EE7B7", // Lighter emerald for badges

  error: "#EF4444", // Red - destructive actions (warning)
  error_hover: "#DC2626", // Darker red
  error_light: "#FCA5A5", // Lighter red for subtle alerts

  warning: "#F59E0B", // Amber - cautionary (professional)
  warning_hover: "#D97706", // Darker amber
  warning_light: "#FCD34D", // Lighter amber for highlights

  info: "#3B82F6", // Blue - informational (professional)
  info_hover: "#1D4ED8", // Darker blue
  info_light: "#93C5FD", // Lighter blue for callouts

  // UI Elements - Borders and dividers
  surface: "#F1F5F9", // Card/container surfaces
  border: "#E2E8F0", // Border color for UI elements
  border_light: "#CBD5E1", // Lighter border for subtle divisions
  divider: "#E5E7EB", // Divider/separator color
  hover: "#F0F4F8", // Hover background state

  // Special
  white: "#FFFFFF",
  black: "#000000",

  // Interactive scales
  hoverScale: {
    skill: 0.97,
    project: 0.99,
  },
};

/**
 * DARK THEME: "Midnight Minimal" - Clean, modern, high-contrast
 *
 * Design Principles:
 * - Pure black base (#000000) - maximum contrast, minimal distraction
 * - Electric purple primary (#A78BFA) - vibrant, modern, tech-forward
 * - Mint green secondary (#6EE7B7) - fresh, complementary, elegant
 * - Bright white text (#FFFFFF) - sharp, clean readability
 * - WCAG AAA contrast ratios for maximum accessibility
 * - Minimal, clean aesthetic perfect for professional portfolios
 *
 * Color Harmony: Pure black + Neon purple + Fresh mint creates modern sophistication
 */
export const DARK_COLORS = {
  // Grayscale Foundation - Pure black progression
  bg: {
    darkest: "#000000", // Pure black
    dark: "#0A0A0A", // Primary background (navbar, main sections)
    base: "#1A1A1A", // Secondary background (alternating sections)
    elevated: "#2D2D2D", // Card backgrounds
    hover: "#3A3A3A", // Hover state on cards
  },

  // Legacy section backgrounds
  home: "#0A0A0A",
  about: "#1A1A1A",
  skills: "#0A0A0A",
  projects: "#1A1A1A",
  gitStats: "#0A0A0A",
  contacts: "#0A0A0A",
  navbar: "#0A0A0A",

  // Text Colors - Pure white to light gray
  text: "#FFFFFF", // Primary text - pure white (maximum contrast)
  textSecondary: "#E5E7EB", // Secondary text - light gray
  textTertiary: "#D1D5DB", // Tertiary/muted text
  textMuted: "#9CA3AF", // Muted gray for disabled/subtle

  // Primary Accent - Electric Purple (vibrant, modern)
  primary: "#A78BFA", // Electric purple - vibrant, tech-forward
  primary_hover: "#8B5CF6", // Darker purple for hover
  primary_light: "#DDD6FE", // Lighter purple for emphasis

  // Secondary Accent - Mint Green (fresh, complementary)
  secondary: "#6EE7B7", // Mint green - fresh, elegant
  secondary_hover: "#34D399", // Darker mint for interaction
  secondary_light: "#A7F3D0", // Lighter mint for highlights

  // Semantic Colors - Bright, clean tones
  success: "#10B981", // Fresh green - positive, natural
  success_hover: "#059669", // Darker green for hover
  success_light: "#6EE7B7", // Lighter green for badges

  error: "#EF4444", // Bright red - clear, alert
  error_hover: "#DC2626", // Darker red for hover
  error_light: "#FCA5A5", // Lighter red for alerts

  warning: "#FBBF24", // Bright amber - cautionary, visible
  warning_hover: "#F59E0B", // Darker amber for hover
  warning_light: "#FCD34D", // Lighter amber for highlights

  info: "#60A5FA", // Bright sky blue - informational, clean
  info_hover: "#3B82F6", // Darker blue for hover
  info_light: "#93C5FD", // Lighter blue for callouts

  // UI Elements
  surface: "#1A1A1A", // Card/container surfaces
  border: "#3A3A3A", // Border color for UI elements
  border_light: "#4A4A4A", // Lighter border for subtle divisions
  divider: "#4A4A4A", // Divider/separator color
  hover: "#2D2D2D", // Hover background state

  // Special
  white: "#FFFFFF",
  black: "#000000",

  // Interactive scales
  hoverScale: {
    skill: 0.97,
    project: 0.99,
  },
};

// Use light colors as default (as per user request)
export const COLORS = LIGHT_COLORS;

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

export const TYPOGRAPHY = {
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  lineHeight: 1.6,
  letterSpacing: "0.3px",
};

export default {
  COLORS,
  SECTION_IDS,
  NAV_LINKS,
  SITE_INFO,
  RESPONSIVE_SIZES,
  TYPOGRAPHY,
};
