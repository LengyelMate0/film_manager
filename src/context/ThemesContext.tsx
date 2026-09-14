import {useContext, createContext, useState, type ReactNode, useEffect} from "react"

export type ThemeType = "light" | "dark";

interface ThemeContextType{
    theme: ThemeType;
    changeTheme: () => void;
}

const ThemesContext = createContext<ThemeContextType | undefined>(undefined);

type PropsType = {
    children: ReactNode;
}

export const ThemesProvider: React.FC<PropsType> = ({children}) => {
    const [theme, setTheme] = useState<ThemeType>("light");
    
    function changeTheme(){
        setTheme(prev => prev === "light" ? "dark" : "light");
    }
    
    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
    <ThemesContext.Provider value={{theme, changeTheme}}>
        {children}
    </ThemesContext.Provider>
  )
}

export const useThemes = () => {
    const context = useContext(ThemesContext);
    if (!context) throw new Error("Missing provider");
    return context;
}