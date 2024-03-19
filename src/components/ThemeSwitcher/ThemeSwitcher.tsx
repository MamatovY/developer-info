import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg'
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg'

import styles from './ThemeSwitcher.module.scss';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(
    localStorage.getItem('theme') === 'true' || false
  );
  const themeText = isDark ? 'Dark' : 'Light';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleThemeChange = () => {
    const value = !isDark
    localStorage.setItem('theme', value.toString());
    setDark((prevState) => !prevState);
  };


  return (
    <div className={styles.switcher} onClick={handleThemeChange}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

