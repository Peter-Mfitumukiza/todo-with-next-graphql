import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../styles/globals.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo",
  description: "Awesome app to track your tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
      <html lang="en">
        <body className={inter.className}>
          {/* <ApolloProvider client={client}> */}
          <Theme appearance="dark">
            {children}
          </Theme>
          {/* </ApolloProvider> */}
        </body>
      </html>
  );
}
