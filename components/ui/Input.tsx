import { Text, TextInput, TextInputProps, View } from "react-native";

type InputProps = TextInputProps & {
    label: string;
};

export function Input({ label, className = "", ...props }: InputProps) {
    return (
        <View className="mb-4">
            <Text className="mb-2 text-sm font-semibold text-slate-700">
                {label}
            </Text>

            <TextInput
                className={`rounded-2xl border border-slate-200 bg-white px-4 py-4 text-base text-slate-950 ${className}`}
                placeholderTextColor="#94A3B8"
                {...props}
            />
        </View>
    );
}