import "rsuite/dist/rsuite-no-reset.min.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
	title: "HLDEV - Portfolio",
	description: "Henrique Portfolio",
};

const poppins = Poppins({
	weight: ["400", "500", "600", "700", "800"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}