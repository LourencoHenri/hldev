import { SiGithub, SiLinkedin } from "react-icons/si";
import ProjectCard from "../ProjectCard";
import {
	IoChevronDownOutline,
	IoChevronUpOutline,
	IoMail,
} from "react-icons/io5";
import { Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";

interface InputProps {
	name: string;
	placeholder?: string;
	rows?: number;
	type?: string;
	required?: boolean;
	element?: "input" | "textarea";
}

function Input({
	name,
	placeholder,
	rows = 1,
	type,
	required = false,
	element = "input",
}: InputProps) {
	return (
		<>
			<div className="flex flex-1 justify-center">
				{element === "input" ? (
					<div className="w-full">
						<label className="block text-sm font-semibold leading-6 text-neutral-400">
							{name}
						</label>
						<input
							type="text"
							name={name}
							id={name}
							className="rounded-md mt-2 w-full bg-transparent p-2 text-neutral-400 shadow-sm border"
						/>
					</div>
				) : (
					<div className="w-full">
						<label className="block text-sm font-semibold leading-6 text-neutral-400">
							{name}
						</label>
						<textarea
							id={name}
							name={name}
							rows={4}
							className="rounded-md mt-2 w-full bg-transparent p-2 text-neutral-400 shadow-sm border text-sm min-h-20 max-h-80"
						/>
					</div>
				)}
			</div>
		</>
	);
}

export default function Contact() {
	const { t } = useTranslation();

	return (
		<div
			id="Contact"
			className="flex flex-col items-center py-20 mx-8 gap-8 text-white"
		>
			<div className="flex flex-col items-center gap-4 text-center">
				<h2 className="text-4xl font-semibold">{t(`contact.title`)}</h2>
				<p className="text-lg">{t(`contact.subtitle`)}</p>
			</div>
			<div className="hidden md:flex md:flex-row justify-end gap-4">
				<a
					href="https://github.com/LourencoHenri"
					target="_blank"
					className="flex flex-row gap-4 justify-center items-center cursor-pointer duration-300 hover:text-blue-400"
				>
					<SiGithub size={32} />
					LourencoHenri
				</a>
				<div className="border-r border-neutral-600" />
				<div className="flex flex-row gap-4 justify-center items-center cursor-pointer duration-300 hover:text-blue-400">
					<IoMail size={32} />
					henri.lourenco@outlook.com
				</div>
				<div className="border-r border-neutral-600" />
				<a
					href="https://www.linkedin.com/in/henrique-lourenco/"
					target="_blank"
					className="flex flex-row gap-4 justify-center items-center cursor-pointer duration-300 hover:text-blue-400"
				>
					<SiLinkedin size={32} />
					Henrique Lourenço
				</a>
			</div>

			<div className="flex md:hidden flex-col justify-end gap-6">
				<div className="flex flex-row gap-4 justify-center items-center cursor-pointer duration-300 hover:text-blue-400">
					<IoMail size={32} />
					henri.lourenco@outlook.com
				</div>
				<div className="flex flex-row justify-end gap-4">
					<a
						href="https://github.com/LourencoHenri"
						target="_blank"
						className="flex flex-row gap-4 justify-center items-center cursor-pointer duration-300 hover:text-blue-400"
					>
						<SiGithub size={32} />
						LourencoHenri
					</a>
					<div className="border-r border-neutral-600" />
					<a
						href="https://www.linkedin.com/in/henrique-lourenco/"
						target="_blank"
						className="flex flex-row gap-4 justify-center items-center cursor-pointer duration-300 hover:text-blue-400"
					>
						<SiLinkedin size={32} />
						Henrique Lourenço
					</a>
				</div>
			</div>

			<div className="flex flex-col gap-6 w-full md:max-w-xl">
				<Input name={t(`contact.form.name`)} />
				<Input name={t(`contact.form.company`)} />
				<Input name={t(`contact.form.email`)} />
				<Input name={t(`contact.form.message`)} rows={3} element="textarea" />
			</div>

			<div className="flex w-full md:max-w-xl">
				<button
					type="submit"
					className="block w-full rounded-md bg-blue-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 "
				>
					{t(`contact.form.submit`)}
				</button>
			</div>

			{/* <Formik
				initialValues={{
					name: "",
					company: "",
					email: "",
					message: "",
				}}
				onSubmit={(values, actions) => {
					console.log({ values, actions });
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}}
			>
				<Form>
					<div className="flex flex-col gap-6 w-full">
						<Input name="Name" />
						<Input name="Company" />
						<Input name="Email" />
						<Input name="How can I help you?" rows={3} element="textarea" />
					</div>

					<button
						type="submit"
						className="block w-full rounded-md bg-blue-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
					>
						Let's talk
					</button>
				</Form>
			</Formik> */}
		</div>
	);
}
