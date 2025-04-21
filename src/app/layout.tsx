import "./globals.css";
import { spaceMono } from "@/app/UserFont";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "DEVFINDER",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={spaceMono.className}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
