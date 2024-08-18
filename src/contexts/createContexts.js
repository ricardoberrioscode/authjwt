"use client";
import { createContext, useContext } from "react";

export const themeContext = createContext()

export const useThemeContext = () => {
 const context = useContext(themeContext)
 if (!context) throw new Error('ThemeContext debe estar dentro de un Provider')
 return context
}

export const UsersContext = createContext();

export const useUsersState = () => {
 const contxt = useContext(UsersContext)
 if (!contxt) throw new Error('AuthContex debe estar, must used within a provider')
 return contxt
}

