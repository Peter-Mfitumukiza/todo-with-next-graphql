import { Inter } from "next/font/google";
import "../styles/globals.css";
import "@radix-ui/themes/styles.css";
import ThemeProvider from "@/utils/ThemeProvider";
import CustomQueryProvider from "@/utils/CustomQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider >
          <CustomQueryProvider>
            {children}
          </CustomQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
