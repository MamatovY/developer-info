import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg'
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg'

import styles from './ThemeSwitcher.module.scss';
import { useEffect, useState } from 'react';

interface ThemeSwitcherProps { }

export const ThemeSwitcher = ({ }: ThemeSwitcherProps) => {

  const [isDark, setDark] = useState(
    localStorage.getItem('theme') === 'true' || false
  );
  const themeText: string | undefined = isDark ? 'Dark' : 'Light';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleThemeChange = () => {
    setDark((prevState) => !prevState);
    localStorage.setItem('theme', isDark.toString());
  };

  return (
    <div className={styles.switcher} onClick={handleThemeChange}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};