'use client'

import { applyTheme, ColorMode, getTheme } from '@/utils/theme/theme';
import { useEffect, useState } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [colorMode, setColorMode] = useState<ColorMode>('dark');

    useEffect(() => {
        const theme = getTheme();
        // const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        // const initialColorMode: ColorMode = isDark ? 'dark' : 'light';
        // setColorMode(initialColorMode);
        applyTheme(theme, "dark"); // set initial theme to light

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            const newColorMode: ColorMode = e.matches ? 'dark' : 'light';
            setColorMode(newColorMode);
            applyTheme(theme, newColorMode);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', colorMode === 'dark');
    }, [colorMode]);

    return <>{children}</>;
}