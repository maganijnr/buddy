"use client";
import axios from "axios";
import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";

import { useState, useCallback } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";

type AUTHVARIANT = "LOGIN" | "REGISTER";

const AuthForm = () => {
	const [variant, setVariant] = useState<AUTHVARIANT>("LOGIN");
	const [loading, setLoading] = useState(false);

	const toggleVariant = useCallback(() => {
		if (variant === "LOGIN") {
			setVariant("REGISTER");
		} else {
			setVariant("LOGIN");
		}
	}, [variant]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			username: "",
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setLoading(true);

		if (variant === "LOGIN") {
			//axios login
		}

		if (variant === "REGISTER") {
			//Next auth sign
			axios.post("/api/register", data);
		}
	};
	return (
		<div className="py-5 w-full sm:mx-auto px-0 md:px-5">
			<form className="" onSubmit={handleSubmit(onSubmit)}>
				{variant === "REGISTER" && (
					<Input
						label="Username"
						register={register}
						id="username"
						type="text"
						disabled={loading}
						errors={errors}
					/>
				)}
				<Input
					label="Email address"
					register={register}
					id="email"
					type="email"
					disabled={loading}
					errors={errors}
				/>

				<Input
					label="Password"
					register={register}
					id="password"
					type="password"
					disabled={loading}
					errors={errors}
				/>

				<div className="py-4">
					<Button
						primary={false}
						danger={false}
						fullWidth={true}
						disabled={loading}
						type="submit"
					>
						{variant === "LOGIN" ? "Sign in" : "Register"}
					</Button>
				</div>
			</form>

			<div className="flex items-center gap-2 justify-center text-sm mt-6 px-2 text-white">
				<div>
					{variant === "LOGIN" ? "New to Buddy?" : "Got an account?"}
				</div>
				<div onClick={toggleVariant} className="cursor-pointer underline">
					Click here
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
