import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Hikmat Ullah — AI-First Web Designer",
  description: "Fast, conversion-driven, AI-augmented portfolio by Hikmat Ullah",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
