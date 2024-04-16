import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import localFont from 'next/font/local'
import clsx from "clsx";

import "./globals.css";

// Font files can be colocated inside of `app`
const monaFont = localFont({
    src: './fonts/MonaSans.ttf',
    display: 'swap',
    variable: '--font-mona',
})

const serifFont = Source_Serif_4({
    subsets: ["latin"],
    variable: "--font-serif"
});

export const metadata: Metadata = {
    title: "Dribble",
    description: "Clone Dribble",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(monaFont.variable, serifFont.variable)}>
                {children}
            </body>
        </html>
    );
}
