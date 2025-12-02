import React from "react";

const SOCIALS = [
	{
		name: "Google",
		src: "/Gmail.png",
		alt: "Google",
	},
	{
		name: "Facebook",
		src: "/Facebook.png",
		alt: "Facebook",
	},
	{
		name: "Apple",
		src: "/Apple.png",
		alt: "Apple",
	},
];

const SocialLoginButtons: React.FC = () => (
	<div className="flex justify-center gap-4 text-2xl mb-2">
		{SOCIALS.map((social) => (
			<button
				key={social.name}
				className="border border-gray-300 p-2 rounded-md"
				aria-label={`Sign in with ${social.name}`}
				type="button"
			>
				<img src={social.src} alt={social.alt} className="w-6" />
			</button>
		))}
	</div>
);

export default SocialLoginButtons;
