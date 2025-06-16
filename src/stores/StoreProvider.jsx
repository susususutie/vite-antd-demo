import { useState, useMemo } from 'react'
import { initialThemeValue, ThemeProvider } from './themeContext'

export default function StoreProvider({ children }) {
  const [themeValue, setThemeValue] = useState(initialThemeValue)
  const themeContext = useMemo(() => ({ value: themeValue, update: setThemeValue }), [themeValue])

  return <ThemeProvider value={themeContext}>{children}</ThemeProvider>
}
