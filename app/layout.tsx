import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Key Health Dashboard — Monitor All API Keys Centrally",
  description: "Track expiry dates, usage patterns, and rotation schedules for all your API keys across services. Never get caught with an expired key again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="20f85d3a-9516-437e-9610-176e256d4d63"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
