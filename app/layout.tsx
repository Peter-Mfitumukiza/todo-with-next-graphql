import { Inter } from "next/font/google";
import "../styles/globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
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
        <Theme appearance="dark">
          <CustomQueryProvider>
            {children}
          </CustomQueryProvider>
        </Theme>
      </body>
    </html>
  );
}
