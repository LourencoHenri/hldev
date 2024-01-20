import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "HLDEV",
	description: "Henrique Lourenço Portfolio",
};

const poppins = Poppins({
	weight: ["400", "500", "600", "700", "800"],
  style: ['normal', 'italic'],
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth" >
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
