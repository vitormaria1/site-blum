import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blum Soluções',
  description:
    'Segurança eletrônica, automação, controle de acesso, instalações elétricas e iluminação para residências, empresas e condomínios.',
  metadataBase: new URL('https://blumsolucoes.com.br'),
  openGraph: {
    title: 'Blum Soluções',
    description:
      'Segurança eletrônica, automação, controle de acesso, instalações elétricas e iluminação para residências, empresas e condomínios.',
    url: 'https://blumsolucoes.com.br',
    siteName: 'Blum Soluções',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blum Soluções',
    description:
      'Segurança eletrônica, automação, controle de acesso, instalações elétricas e iluminação para residências, empresas e condomínios.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
