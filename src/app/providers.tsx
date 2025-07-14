'use client'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { ReactNode } from 'react'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#4A90E2' },
  },
})

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}