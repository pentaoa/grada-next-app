import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: 'Grada - 个人网站',
    template: '%s | Grada - 个人网站',
  },
  description: '我的个人网站',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="pb-10 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}