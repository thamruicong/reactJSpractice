import { useState, createContext } from "react";

export const ThemeContext = createContext()
export const UpdateThemeContext = createContext()

function ThemeContextClass({ children }) {
    const [darkMode, setDarkMode] = useState(false)

    function toggleTheme() {
        setDarkMode(!darkMode)
    }

    return (
        <ThemeContext.Provider value={darkMode}>
            <UpdateThemeContext.Provider value={toggleTheme}>
                { children }
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    )
}

export default ThemeContextClass;