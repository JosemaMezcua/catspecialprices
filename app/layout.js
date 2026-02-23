import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "SPECIAL PRICES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

