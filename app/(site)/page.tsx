import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
	return (
		<div className="py-12 flex min-h-full flex-col justify-center sm:px-6 lg:px-8 bg-black text-white">
			<div className="mx-auto w-full sm:max-w-lg lg:max-w-xl">
				<Image
					alt="logo"
					height="100"
					width="100"
					className="mx-auto w-auto"
					src="/images/logo-white.png"
				/>

				<div className="w-full mt-5 rounded-xl sm:border sm:border-white p-4">
					<h2 className="text-center uppercase text-[30px] font-bold">
						Sign in to your account
					</h2>

					<AuthForm />
				</div>
			</div>
		</div>
	);
}
