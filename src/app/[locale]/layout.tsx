import "rsuite/dist/rsuite-no-reset.min.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
	title: "HLDEV",
	description: "Portfolio website developed by Henrique Lourenço",
	applicationName: "HLDEV",
	openGraph: {
		title: "HLDEV",
		description: "Portfolio website developed by Henrique Lourenço"
	}
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
			<head>
				<meta property="og:image" content="/og.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:title" content="HLDEV" />
				<meta
					property="og:description"
					content="Portfolio website developed by Henrique Lourenço"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="600" />

				<meta name="twitter:image" content="/twitter.png" />
				<meta name="twitter:image:type" content="image/png" />
				<meta property="twitter:title" content="HLDEV" />
				<meta
					property="twitter:content"
					content="Portfolio website developed by Henrique Lourenço"
				/>
				<meta name="twitter:image:width" content="1200" />
				<meta name="twitter:image:height" content="600" />
			</head>
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
