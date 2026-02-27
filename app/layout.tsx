import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traductora Pública de Inglés | Comunicación clara",
  description:
    "Traductora pública de inglés, traducción legal y clases corporativas para empresas y profesionales.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
