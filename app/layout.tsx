import "./globals.css";
import { Fira_Mono } from "next/font/google";
import { LocalStorageProvider } from "./ui/local-value/LocalStorageProvider";

const fira = Fira_Mono({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "AphroUI",
  description: "React server components for user with NextJs",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={fira.className}>
        <main>
          <LocalStorageProvider>{children}</LocalStorageProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
