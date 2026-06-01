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
            ? "bg-blue-600"
            : "bg-orange-100 border border-orange-200";

    const textStyle =
        variant === "primary"
            ? "text-white"
            : "text-orange-700";

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