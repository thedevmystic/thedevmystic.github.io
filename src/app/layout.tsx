import type { Metadata } from "next";
import "@styles/main.css";

export const metadata: Metadata = {
  title: "The Dev Mystic | Development",
  description: "Development and Testing Website",
};

function PreloadFonts() {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/montserrat/montserrat-normal-vf.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/open-sans/open-sans-normal-vf.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/jetbrains-mono/jetbrains-mono-normal-vf.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PreloadFonts />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
