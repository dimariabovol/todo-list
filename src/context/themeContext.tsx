import { createContext, useEffect, useState, ReactNode } from "react";

interface IThemeContext {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const theme = localStorage.getItem("theme");

		if (!theme) {
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		}

		return theme === "dark";
	});

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDarkMode]);

	const toggleTheme = (): void => {
		setIsDarkMode((prev: boolean) => !prev);
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
