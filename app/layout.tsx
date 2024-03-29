import type { Metadata } from "next";
import cx from "classnames";
import { Source_Code_Pro } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cx(sourceCodePro.className, "text-white bg-black")}
            >
                {children}
            </body>
            <GoogleAnalytics
                gaId={`${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
        </html>
    );
}
