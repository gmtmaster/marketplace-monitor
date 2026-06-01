import { Text } from "react-native";
import { Card } from "./ui/Card";

type StatCardProps = {
    label: string;
    value: string;
    accent?: "blue" | "orange";
};

export function StatCard({ label, value, accent = "blue" }: StatCardProps) {
    return (
        <Card className="flex-1">
            <Text className="text-sm text-slate-500">{label}</Text>
            <Text
                className={`mt-2 text-2xl font-bold ${
                    accent === "blue" ? "text-blue-600" : "text-teal-600"
                }`}
            >
                {value}
            </Text>
        </Card>
    );
}