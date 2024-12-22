import React, { useState } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeToggle = () => {
    alert('Button clicked!'); // Test the click event
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme); // Apply theme globally
  };

  return (
    <button onClick={handleThemeToggle} className="theme-switcher">
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeSwitcher;
