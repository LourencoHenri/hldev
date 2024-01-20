import { useTranslation } from "react-i18next";

export default function About() {
	const { t } = useTranslation();

	return (
		<div id="About" className="flex flex-col pb-20 pt-40 mx-8 gap-32">
			<div className="flex text-white flex-col items-center text-center gap-2">
				<h2 className="text-4xl font-semibold">{t(`about.title`)}</h2>
				<p className="text-lg leading-relaxed md:w-4/5">{t(`about.content`)}</p>
			</div>
			<div className="flex flex-col items-center justify-center">
				<h3 className="text-2xl font-semibold text-blue-400">
					{t(`about.sentence`)}
					<span className="text-2xl font-semibold text-white">, </span>
					learning
					<span className="text-2xl font-semibold text-white"> & </span>
					leveling up
				</h3>
				<h3 className="text-2xl text-white font-semibold">one day at a time</h3>
			</div>
		</div>
	);
}
