import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Display, Lora} from "next/font/google";


const noto = Noto_Sans_Display({ subsets: ["latin"] });
const lora = Lora({ 
  weight : ["400", "500", "600"],
  style: ['normal','italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "GDSC SCHOLARSHIP",
  description: "Find the best scholarships for you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
