export default function About() {
	return (
		<div id="About" className="flex flex-col pb-20 pt-40 mx-8 gap-32">
			<div className="flex text-white flex-col items-center text-center gap-2">
				<h2 className="text-4xl font-semibold">About</h2>
				<p className="text-lg leading-relaxed md:w-4/5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
					veniam corrupti ipsam tempora accusantium quia suscipit quod id
					aliquam nobis ab repellat sit, molestiae similique, totam nesciunt
					expedita adipisci! Tempore!
				</p>
			</div>
			<div className="flex flex-col items-center justify-center">
				<h3 className="text-2xl font-semibold text-blue-400">
					Living
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
