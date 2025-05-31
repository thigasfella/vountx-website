// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "VountX - Software House",
  description:
    "A VountX é uma software house especializada em soluções práticas, escaláveis e sob medida. Leve seu negócio ao próximo nível com a nossa expertise.",
  robots: "index, follow",
  openGraph: {
    title: "VountX - Conectando negócios à inovação",
    description:
      "Soluções tecnológicas que impulsionam seu crescimento com eficiência e inovação.",
    url: "https://www.vountx.com.br",
    siteName: "VountX",
    locale: "pt_BR",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body id="all-content">
        {children}
      </body>
    </html>
  );
}
