import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tarunkumar Aghara · Java Tech Lead & Cloud Architect",
  description:
    "13+ years of enterprise Java, Azure AKS, Kubernetes, Apache Spark & Kafka. GitHub Copilot GH-300 | Azure AI AI-900 | Azure Admin AZ-104.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${jetbrainsMono.variable} ${instrumentSans.variable}`}
    >
      <body className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
