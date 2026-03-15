# 🎨 Theme Color Reference - Professional Blue/Gray Palette

Quick reference for your portfolio's professional dark/light theme system.

## About This Theme

Your portfolio now features a **professional blue/gray color palette** with:
- ✅ **Dark theme by default** (modern, easy on the eyes)
- ✅ **Light theme alternative** (professional, accessible)
- ✅ **Theme toggle** in the navbar (sun/moon icon)
- ✅ **Automatic persistence** (localStorage saves user preference)

---

## DARK THEME (Default)

### PRIMARY COLORS

| Name | Hex | Purpose |
|------|-----|---------|
| **Primary** | #3B82F6 | Main brand color, hovers, highlights |
| **Secondary** | #64748B | Muted accents, secondary UI |
| **Accent** | #06B6D4 | Call-to-action, special highlights |

### SECTION BACKGROUNDS

| Section | Color | Hex | Usage |
|---------|-------|-----|-------|
| Home | Very Deep Navy | #0F172A | Hero section |
| About | Dark Slate | #1E293B | Bio section |
| Skills | Medium Slate | #334155 | Skill showcase |
| Projects | Dark Gray-Blue | #1F2937 | Project cards |
| GitHub | Very Deep Navy | #0F172A | Stats display |
| Navbar | Very Deep Navy | #0F172A | Navigation |
| Contacts | Pure Black | #000000 | Final CTA |

### SEMANTIC COLORS

| State | Color | Hex | Usage |
|-------|-------|-----|-------|
| ✅ Success | Professional Green | #10B981 | Confirmations, positive feedback |
| ❌ Error | Professional Red | #EF4444 | Errors, destructive actions |
| ⚠️ Warning | Professional Amber | #F59E0B | Alerts, cautions |
| ℹ️ Info | Professional Blue | #3B82F6 | Information, help text |

### TEXT & TYPOGRAPHY

| Element | Color | Hex |
|---------|-------|-----|
| Primary Text | Off-White | #F8FAFC |
| Secondary Text | Light Gray | #CBD5E1 |

---

## LIGHT THEME (Alternative)

### PRIMARY COLORS

| Name | Hex | Purpose |
|------|-----|---------|
| **Primary** | #2563EB | Main brand color, hovers, highlights |
| **Secondary** | #71717A | Muted accents, secondary UI |
| **Accent** | #0891B2 | Call-to-action, special highlights |

### SECTION BACKGROUNDS

| Section | Color | Hex | Usage |
|---------|-------|-----|-------|
| Home | Very Light Gray | #F8FAFC | Hero section |
| About | Light Gray | #F1F5F9 | Bio section |
| Skills | Slightly Darker Gray | #ECEFF4 | Skill showcase |
| Projects | Mild Gray | #E2E8F0 | Project cards |
| GitHub | Very Light Gray | #F8FAFC | Stats display |
| Navbar | Pure White | #FFFFFF | Navigation |
| Contacts | Dark Slate | #1E293B | Final CTA |

### SEMANTIC COLORS (Same as Dark)

| State | Color | Hex |
|-------|-------|-----|
| ✅ Success | #059669 | Professional green |
| ❌ Error | #DC2626 | Professional red |
| ⚠️ Warning | #D97706 | Professional amber |
| ℹ️ Info | #2563EB | Professional blue |

### TEXT & TYPOGRAPHY

| Element | Color | Hex |
|---------|-------|-----|
| Primary Text | Near-Black | #0F172A |
| Secondary Text | Dark Gray | #475569 |

---

## GRAYSCALE PALETTE

For borders, dividers, and secondary elements:

### Dark Theme
```
gray100: #F8FAFC  (Very light - backgrounds)
gray200: #F1F5F9  (Light - secondary backgrounds)
gray300: #E2E8F0  (Medium-light - borders)
gray400: #CBD5E1  (Medium - disabled states)
gray500: #94A3B8  (Medium-dark - secondary text)
gray600: #64748B  (Dark - tertiary text)
gray700: #475569  (Darker - strong text)
gray800: #334155  (Very dark - dark elements)
gray900: #1E293B  (Nearly black - darkest elements)
```

### Light Theme
```
gray100: #FFFFFF  (Pure white)
gray200: #F8FAFC  (Very light)
gray300: #F1F5F9  (Light)
gray400: #CBD5E1  (Medium-light)
gray500: #94A3B8  (Medium)
gray600: #64748B  (Medium-dark)
gray700: #475569  (Dark)
gray800: #334155  (Very dark)
gray900: #1E293B  (Darkest)
```

---

## GRADIENTS

**Primary Gradient (Dark Theme)**
```css
linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)
/* Professional Blue → Teal */
```

**Dark Background Gradient**
```css
linear-gradient(180deg, #0F172A 0%, #1E293B 100%)
/* Deep Navy → Dark Slate */
```

**Primary Gradient (Light Theme)**
```css
linear-gradient(135deg, #2563EB 0%, #0891B2 100%)
/* Darker Blue → Teal */
```

---

## THEME SWITCHING IN CODE

### Using the useTheme Hook

```javascript
import { useTheme } from "../context/ThemeContext";

const MyComponent = () => {
  const theme = useTheme();

  return (
    <Box bgColor={theme.home} color={theme.textPrimary}>
      Content with theme colors
    </Box>
  );
};
```

### Using Theme State

```javascript
import { useThemeState } from "../context/ThemeContext";

const ThemeToggleButton = () => {
  const { isDark, toggleTheme } = useThemeState();

  return (
    <button onClick={toggleTheme}>
      {isDark ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
};
```

---

## WHY THIS PALETTE?

✅ **Professional** - Suitable for developer portfolios
✅ **Accessible** - High contrast ratios (WCAG AA compliant)
✅ **Versatile** - Works in both dark and light modes
✅ **Modern** - Current design trends (2024)
✅ **Eye-Friendly** - Dark mode reduces eye strain

---

## COPY-PASTE QUICK REFERENCE

### Dark Theme Colors
```javascript
primary: "#3B82F6"
secondary: "#64748B"
accent: "#06B6D4"

home: "#0F172A"
about: "#1E293B"
skills: "#334155"
projects: "#1F2937"
navbar: "#0F172A"
contacts: "#000000"

success: "#10B981"
error: "#EF4444"
warning: "#F59E0B"
info: "#3B82F6"

textPrimary: "#F8FAFC"
textSecondary: "#CBD5E1"
```

### Light Theme Colors
```javascript
primary: "#2563EB"
secondary: "#71717A"
accent: "#0891B2"

home: "#F8FAFC"
about: "#F1F5F9"
skills: "#ECEFF4"
projects: "#E2E8F0"
navbar: "#FFFFFF"
contacts: "#1E293B"

success: "#059669"
error: "#DC2626"
warning: "#D97706"
info: "#2563EB"

textPrimary: "#0F172A"
textSecondary: "#475569"
```

---

## ACCESSIBILITY

✅ **Contrast Ratios** - All text meets WCAG AA standards
✅ **Colorblind Safe** - Semantic naming, distinct hues
✅ **Both Themes** - Each theme tested for readability

---

**Your portfolio has a professional, accessible color system! 🎨**
