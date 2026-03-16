import { useEffect, useState } from "react";
import { SECTION_IDS } from "../config/theme";

/**
 * Custom hook to detect which section is currently in view
 * Updates active section as user scrolls or clicks navigation links
 */
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(SECTION_IDS.home);

  useEffect(() => {
    // Create intersection observer to track visible sections
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is roughly in center
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // Update URL hash when section comes into view
          window.history.replaceState(null, "", `#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all section elements
    Object.values(SECTION_IDS).forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      Object.values(SECTION_IDS).forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return activeSection;
};
