"use client";

import { LogoWhite } from "@/src/assets/logo/LogoWhite";
import { useTranslation } from "react-i18next";
import Three from "@/src/components/Three";

export default function SignIn() {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col md:flex-row gap-4 min-h-svh">
			<div className="hidden md:flex md:flex-1 border-r border-neutral-900">
				<Three />
			</div>
			<div className="flex flex-1 flex-col justify-center items-center">
				<div className="flex my-32 justify-center items-center">
					<a href="" className="flex justify-center items-center">
						<LogoWhite />
					</a>
				</div>
				<div className="flex flex-1 flex-col gap-4 w-full px-10 md:max-w-lg">
					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-semibold">Login</h2>
						<span className="text-base text-neutral-200">
							Login to access your account
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<div className="w-full">
							<label className="block text-sm font-medium leading-6 text-neutral-200">
								E-mail or Phone
							</label>
							<input
								type="text"
								name="E-mail"
								id="E-mail"
								className="rounded-md mt-2 w-full bg-transparent p-2 text-neutral-200 shadow-sm border border-neutral-400"
							/>
						</div>
						<div className="w-full">
							<label className="block text-sm font-medium leading-6 text-neutral-200">
								Password
							</label>
							<input
								type="text"
								name="E-mail"
								id="E-mail"
								className="rounded-md mt-2 w-full bg-transparent p-2 text-neutral-200 shadow-sm border border-neutral-400"
							/>
						</div>
						<div className="flex  justify-end">
							<a
								href="#"
								className="block text-sm font-medium leading-6 text-neutral-200"
							>
								I forgot my password
							</a>
						</div>
					</div>
					<div className="flex flex-1 flex-col gap-4 justify-end md:justify-normal md:pt-4 mb-4">
						<div className="flex flex-col md:max-w-xl">
							<button className="block w-full rounded-md bg-blue-400 px-3.5 py-2.5 text-center text-sm font-semibold text-neutral-900 shadow-sm hover:bg-blue-300">
								Sign In
							</button>
						</div>
						<div className="flex justify-center">
							<a href="#">Don’t have an account? Create an account</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
