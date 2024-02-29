import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function SocialMedia() {
	return (
		<div className="flex flex-col justify-end gap-4 w-10">
			<a href="https://github.com/LourencoHenri" target="_blank" className="text-neutral-300 hover:text-neutral-50 duration-300">
				<button>
					<SiGithub
						size={32}
					/>
				</button>
			</a>
			<a href="https://www.instagram.com/lourencohenri/" target="_blank">
				<button>
					<SiInstagram
						size={32}
					/>
				</button>
			</a>
			<a href="https://www.linkedin.com/in/henrique-lourenco/" target="_blank">
				<button>
					<SiLinkedin
						size={32}
					/>
				</button>
			</a>
		</div>
	);
}
