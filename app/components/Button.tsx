"use client";
import clsx from "clsx";

interface ButtonProps {
	children?: React.ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
	fullWidth?: boolean;
	onClick?: () => void;
	primary?: boolean;
	danger?: boolean;
	disabled?: boolean;
	bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	type,
	fullWidth,
	onClick,
	primary,
	danger,
	disabled,
	bgColor,
}) => {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			className={clsx(
				`flex justify-center mt-5 rounded-md px-3 py-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-medium`,
				disabled && "opacity-50 cursor-default",
				fullWidth && "w-full",
				primary ? "text-black" : "text-white",
				danger && "bg-red-600 hover:bg-red-700 focus-visible:bg-red-700",
				!primary &&
					!danger &&
					"bg-blue-600 hover:bg-blue-700 focus-visible:bg-blue-700"
			)}
		>
			{children}
		</button>
	);
};

export default Button;
