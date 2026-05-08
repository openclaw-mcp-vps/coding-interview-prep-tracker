import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodePrep Tracker — Ace Your Coding Interviews",
  description: "Schedule practice problems, track weak areas, and get study analytics to land your dream job."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6fb929e4-eed6-4fea-87c2-7732b9be52db"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
