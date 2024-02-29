import "rsuite/dist/rsuite-no-reset.min.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Three from "@/src/components/Three";

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
		<div className="flex flex-col md:flex-row gap-4 min-h-svh">
			<div className="flex flex-1 flex-col justify-center items-center">
				{children}
			</div>
		</div>
	);
}
