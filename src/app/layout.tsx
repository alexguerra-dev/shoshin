import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Shoshin',
    description: '初心',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
