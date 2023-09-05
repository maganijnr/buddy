"use client";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
	label: string;
	id: string;
	type?: string;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	disabled?: boolean;
}
const Input: React.FC<InputProps> = ({
	label,
	id,
	type,
	required,
	register,
	errors,
	disabled,
}) => {
	return (
		<div className="mt-5">
			<label
				htmlFor={id}
				className="font-semibold block text-sm leading-6 text-white"
			>
				{label}
			</label>
			<div className="mt-2">
				<input
					id={id}
					type={type}
					autoComplete={id}
					disabled={disabled}
					{...register(id, { required })}
					className={clsx(
						`form-input block w-full rounded-xl border border-white  py-1.5 bg-black h-[45px] outline-none shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-sky-600`,
						errors[id] && "focus:ring-rose-600",
						disabled && "opacity-50 cursor-default"
					)}
				/>
			</div>
		</div>
	);
};

export default Input;
