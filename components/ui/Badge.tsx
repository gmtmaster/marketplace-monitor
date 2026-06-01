import { Text, View } from "react-native";

type BadgeProps = {
    label: string;
    variant?: "blue" | "orange" | "green" | "gray";
};

export function Badge({ label, variant = "blue" }: BadgeProps) {
    const styles = {
        blue: {
            box: "bg-indigo-100",
            text: "text-indigo-700",
        },
        orange: {
            box: "bg-teal-100",
            text: "text-teal-700",
        },
        green: {
            box: "bg-emerald-100",
            text: "text-emerald-700",
        },
        gray: {
            box: "bg-slate-100",
            text: "text-slate-600",
        },
    };

    return (
        <View className={`rounded-full px-3 py-1 ${styles[variant].box}`}>
            <Text className={`text-xs font-semibold ${styles[variant].text}`}>
                {label}
            </Text>
        </View>
    );
}