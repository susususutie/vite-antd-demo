import { createContext } from 'react'

export const initialThemeValue = {
  prefixCls: 'ant5',
  iconPrefixCls: 'ant5-icon',
  primaryColor: '#1b67d2',
  infoColor: '#1b67d2',
  successColor: '#4fcf0e',
  warningColor: '#e1a836',
  errorColor: '#da3437',
  textBaseColor: '#101010',
}

export const ThemeContext = createContext({ value: initialThemeValue, update: () => void 0 })

export const ThemeProvider = ThemeContext.Provider
