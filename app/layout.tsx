"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(true);
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance={isDark ? "dark" : "light"}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Theme>
      </body>
    </html>
  );
}
