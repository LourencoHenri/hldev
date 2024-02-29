export default function PasswordStep({ toggleStep }: any) {
	return (
		<>
			<div className="flex flex-col gap-2">
				<div className="w-full">
					<label className="block text-sm font-medium leading-6 text-neutral-200">
						Nome
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
						E-mail or Phone
					</label>
					<input
						type="text"
						name="E-mail"
						id="E-mail"
						className="rounded-md mt-2 w-full bg-transparent p-2 text-neutral-200 shadow-sm border border-neutral-400"
					/>
				</div>
			</div>
		</>
	);
}
