import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevBlog - Technical Insights",
  description: "A blog about programming, web development, and technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main className="container" style={{ minHeight: 'calc(100vh - 200px)', paddingTop: '2rem' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
