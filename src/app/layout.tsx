
import './global.css'


export const metadata = {
  title: 'AnguloCoin',
  description: 'Angulo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body >{children}</body>
    </html>
  )
}
