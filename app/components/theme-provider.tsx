'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

type Attribute = 'class' | 'data-theme' | 'data-mode'

type ThemeProviderProps = {
    children: React.ReactNode
    attribute?: Attribute | Attribute[]
    defaultTheme?: string
    enableSystem?: boolean
}

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            {...props}
        >
            {children}
        </NextThemesProvider>
    )
} 