import "rsuite/dist/rsuite-no-reset.min.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "../globals.css";

import { ThemeProvider } from "../../providers/ThemeProvider";

const SITE_TITLE = "HLDEV | Software Developer";
const SITE_DESCRIPTION =
	"Software Developer specializing in TypeScript, React, React Native, Next.js and Vue.js. Building high-performance, accessible, and user-centered digital experiences.";

export const metadata: Metadata = {
	metadataBase: new URL("https://hldev.vercel.app"),
	title: {
		default: SITE_TITLE,
		template: "%s | Henrique Lourenço",
	},
	description: SITE_DESCRIPTION,
	applicationName: "HLDEV",
	authors: [{ name: "Henrique Lourenço" }],
	creator: "Henrique Lourenço",
	keywords: [
		"Henrique Lourenço",
		"Front-End Developer",
		"Software Developer",
		"React",
		"React Native",
		"Next.js",
		"Vue.js",
		"TypeScript",
		"JavaScript",
		"Tailwind CSS",
		"Portfolio",
	],
	openGraph: {
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		type: "website",
		siteName: "HLDEV",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 600,
				alt: "Henrique Lourenço - Front-End Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: ["/twitter.png"],
	},
	icons: {
		icon: "/icon.svg",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
	],
};

const inter = Inter({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sans",
});

const playfair = Playfair_Display({
	weight: ["400", "500"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-serif",
});

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params?: { locale?: string };
}) {
	return (
		<html
			lang={params?.locale ?? "en"}
			className={`${inter.variable} ${playfair.variable} scroll-smooth`}
			suppressHydrationWarning
		>
			<body className="bg-white font-sans text-neutral-900 antialiased dark:bg-[rgb(15,15,15)] dark:text-white">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
