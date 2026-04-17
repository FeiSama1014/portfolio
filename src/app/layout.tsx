import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavDots } from "@/components/nav-dots";
import { siteConfig } from "@/lib/site-config";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.fullName} — ${siteConfig.title}`,
  description: siteConfig.shortBio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground font-sans">
        <ThemeProvider>
          <ThemeToggle />
          <NavDots />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
