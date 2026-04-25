import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export default function SocialMedia() {
	return (
		<div className="flex flex-col justify-end gap-4 w-10 text-neutral-600 dark:text-neutral-300">
			<a href="https://github.com/LourencoHenri" target="_blank" className="hover:text-blue-400 duration-300">
				<button>
					<SiGithub
						size={32}
					/>
				</button>
			</a>
			<a href="https://www.instagram.com/lourencohenri/" target="_blank" className="hover:text-pink-500 duration-300">
				<button>
					<SiInstagram
						size={32}
					/>
				</button>
			</a>
			<a href="https://www.linkedin.com/in/henrique-lourenco/" target="_blank" className="hover:text-blue-600 duration-300">
				<button>
					<FaLinkedin
						size={32}
					/>
				</button>
			</a>
		</div>
	);
}
