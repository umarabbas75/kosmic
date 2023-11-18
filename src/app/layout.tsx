import type { Metadata } from 'next'
import './globals.css'
import MuiThemeProvider from '@/providers/theme'
import { Poppins } from 'next/font/google';
export const metadata: Metadata = {
  title: 'Media Management',
  description: 'Media management',
}

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang="en" >
      <body >
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>

      </body>
    </html>
  )
}
