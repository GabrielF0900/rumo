import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { ScrollToTop } from '@/components/layout/scroll-to-top'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Rumo — Aprenda, avance, conquiste.',
  description:
    'Orientação estudantil clara para estudar, planejar o futuro e tomar decisões com mais confiança.',
  generator: 'Rumo',
  icons: {
    icon: '/logo-pequena.png',
    shortcut: '/logo-pequena.png',
    apple: '/logo-pequena.png',
  },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#1A2D7A' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR" className={`${geist.variable} bg-background`}><body className="antialiased">{children}<ScrollToTop />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
