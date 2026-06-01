import { Text, TouchableOpacity } from "react-native";

type TogglePillProps = {
    label: string;
    active?: boolean;
    onPress?: () => void;
};

export function TogglePill({ label, active = false, onPress }: TogglePillProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.85}
            className={`rounded-full border px-4 py-3 ${
                active
                    ? "border-blue-600 bg-blue-600"
                    : "border-slate-200 bg-white"
            }`}
        >
            <Text
                className={`text-sm font-semibold ${
                    active ? "text-white" : "text-slate-600"
                }`}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
}