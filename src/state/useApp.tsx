import { useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

const useApp = () => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    return {
        isDarkMode,
        toggleTheme
    }
}

export default useApp