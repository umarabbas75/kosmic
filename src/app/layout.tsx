import type { Metadata } from 'next'
import './globals.css'
import MuiThemeProvider from '@/providers/theme'

export const metadata: Metadata = {
  title: 'Media Management',
  description: 'Media management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>

      </body>
    </html>
  )
}
