import { useState, useEffect } from 'react';

const THEME_KEY = 'contesthub-theme';

export const useThemeManager = () => {
  const [theme, setTheme] = useState('light');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme
  useEffect(() => {
    const initializeTheme = () => {
      try {
        // Get saved theme
        const savedTheme = localStorage.getItem(THEME_KEY);
        
        let initialTheme;
        if (savedTheme === 'light' || savedTheme === 'dark') {
          initialTheme = savedTheme;
        } else {
          // Check system preference
          const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
          initialTheme = mediaQuery.matches ? 'dark' : 'light';
          localStorage.setItem(THEME_KEY, initialTheme);
        }

        // Apply theme to document
        applyTheme(initialTheme);
        setTheme(initialTheme);
        setIsInitialized(true);
      } catch (error) {
        console.warn('Theme initialization failed:', error);
        // Fallback to light theme
        applyTheme('light');
        setTheme('light');
        setIsInitialized(true);
      }
    };

    initializeTheme();
  }, []);

  // Apply theme to document
  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    if (!isInitialized) return;
    
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    try {
      // Apply to document
      applyTheme(newTheme);
      
      // Save to localStorage
      localStorage.setItem(THEME_KEY, newTheme);
      
      // Update state
      setTheme(newTheme);
    } catch (error) {
      console.warn('Theme toggle failed:', error);
    }
  };

  return {
    theme,
    isDark: theme === 'dark',
    isInitialized,
    toggleTheme
  };
};