export const metadata = {
  title: '3D Mickey Mouse',
  description: 'Interactive 3D Mickey Mouse model',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}
