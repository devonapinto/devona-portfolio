import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devona Pinto — Platform & Infra Engineer",
  description:
    "Devona Thelma Pinto — Infra/DevOps engineer at Infosys working across AWS, Kubernetes, Kong API Gateway and CI/CD pipelines. Also building ML systems for healthcare and code-integrity tooling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-bg text-fg font-body">{children}</body>
    </html>
  );
}
