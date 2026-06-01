import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    title: string;
    variant?: "primary" | "secondary";
};

export function Button({
                           title,
                           variant = "primary",
                           className = "",
                           ...props
                       }: ButtonProps) {
    const variantStyle =
        variant === "primary"
            ? "bg-indigo-500"
            : "bg-indigo-100 border border-indigo-500";

    const textStyle =
        variant === "primary"
            ? "text-white"
            : "text-indigo-700";

    return (
        <TouchableOpacity
            activeOpacity={0.85}
            className={`rounded-2xl px-5 py-4 items-center justify-center ${variantStyle} ${className}`}
            {...props}
        >
            <Text className={`font-semibold text-base ${textStyle}`}>{title}</Text>
        </TouchableOpacity>
    );
}