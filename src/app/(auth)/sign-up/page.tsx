"use client";

import { LogoWhite } from "@/src/assets/logo/LogoWhite";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import PasswordStep from "@/src/components/PasswordStep";
import { ErrorMessage, Field, Form, Formik } from "formik";
import UserInfoStep from "@/src/components/UserInfoStep";
import SuccessfulSignUp from "@/src/components/SuccessfulSignUp";

type SignUpSteps = 0 | 1 | 2;

export default function SignUp() {
	const { t } = useTranslation();

	const [step, setStep] = useState<SignUpSteps>(0);

	const formValues = {
		email: "",
		name: "",
		password: "",
		confirmPassword: "",
	};

	function toggleSignUpStep(step: SignUpSteps) {
		console.log(step);
		setStep(step);
	}

	const currentStepContent = () => {
		switch (step) {
			case 0:
				return <UserInfoStep />;
			case 1:
				return <PasswordStep />;
			case 2:
				return <SuccessfulSignUp />;
			default:
				return <div>Not Found</div>;
		}
	};

	return (
		<>
			<div className="flex my-28 justify-center items-center">
				<a href="" className="flex justify-center items-center">
					<LogoWhite />
				</a>
			</div>
			<div className="flex flex-1 flex-col gap-4 w-full px-10 md:max-w-lg">
				<Formik
					initialValues={formValues}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({ isSubmitting }) => (
						<Form className="flex flex-1 flex-col gap-4">
							{currentStepContent()}
							{step !== 2 && (
								<>
									<div className="flex flex-col gap-2">
										<h2 className="text-2xl font-semibold">
											Create an account
										</h2>
										<span className="text-base text-neutral-200">
											Register and create your account
										</span>
									</div>

									<div className="flex flex-col gap-4">
										<div className="flex justify-center gap-2">
											<div
												className={`w-3 h-3 border-2 rounded-full duration-300 ${
													step === 0 && "bg-white"
												}`}
											/>
											<div
												className={`w-3 h-3 border-2 rounded-full duration-300 ${
													step === 1 && "bg-white"
												}`}
											/>
										</div>
									</div>

									<div className="flex flex-1 flex-col gap-4 justify-end md:justify-normal md:pt-4 mb-8">
										<div className="flex justify-center">
											<a href="#">Already have an account? Login</a>
										</div>
										{step === 0 && (
											<div className="flex flex-col md:max-w-xl">
												<button
													onClick={() => toggleSignUpStep(1)}
													className="block w-full rounded-md bg-blue-400 px-3.5 duration-300 py-2.5 text-center text-sm font-semibold text-neutral-900 shadow-sm hover:bg-blue-300"
												>
													Continue
												</button>
											</div>
										)}

										{step === 1 && (
											<>
												<div className="flex flex-col md:max-w-xl">
													<button
														onClick={() => toggleSignUpStep(2)}
														className="block w-full rounded-md bg-blue-400 px-3.5 duration-300 py-2.5 text-center text-sm font-semibold text-neutral-900 shadow-sm hover:bg-blue-300"
													>
														Sign Up
													</button>
												</div>
												<div className="flex flex-col md:max-w-xl">
													<button
														onClick={() => toggleSignUpStep(0)}
														className="block w-full border rounded-md duration-300 border-neutral-400 px-3.5 py-2.5 text-center text-sm font-semibold text-neutral-400 shadow-sm"
													>
														Back
													</button>
												</div>
											</>
										)}
									</div>
								</>
							)}
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
}
