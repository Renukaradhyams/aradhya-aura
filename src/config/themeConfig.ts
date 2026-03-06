export const themeConfig = {
  // Default theme
  defaultTheme: "dark" as "light" | "dark" | "system",
  
  // Transition duration for theme change
  transitionDuration: 300, // ms
  
  // Storage key for localStorage
  storageKey: "aradhya-theme",
  
  // Theme-specific hero backgrounds
  heroBackgrounds: {
    light: {
      primaryGlow: "primary/10",
      secondaryGlow: "accent/10",
    },
    dark: {
      primaryGlow: "primary/15",
      secondaryGlow: "accent/15",
    },
  },
  
  // Particle effects config
  particles: {
    enabled: true,
    count: 50,
    speed: 1,
    opacity: 0.3,
  },
  
  // Grid pattern config
  gridPattern: {
    enabled: true,
    size: "4rem",
    opacity: 0.5,
  },
};

export const getThemeClass = (isDark: boolean) => isDark ? "dark" : "";
