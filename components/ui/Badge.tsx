import { Text, View } from "react-native";

type BadgeProps = {
    label: string;
    variant?: "blue" | "orange" | "green" | "gray";
};

export function Badge({ label, variant = "blue" }: BadgeProps) {
    const styles = {
        blue: {
            box: "bg-blue-100",
            text: "text-blue-700",
        },
        orange: {
            box: "bg-orange-100",
            text: "text-orange-700",
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