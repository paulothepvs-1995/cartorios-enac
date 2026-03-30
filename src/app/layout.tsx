import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CartóriosENAC — Plano de Estudos ENAC 2026.2",
  description: "Dashboard de acompanhamento de estudos para o concurso ENAC 2026.2 e Cartórios TJ",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
