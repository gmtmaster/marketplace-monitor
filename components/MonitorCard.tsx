import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";

type MonitorCardProps = {
    keyword: string;
    location: string;
    maxPrice: string;
    matches: number;
    active?: boolean;
    lastScan?: string;
};

export function MonitorCard({
                                keyword,
                                location,
                                maxPrice,
                                matches,
                                active = true,
                                lastScan = "2m ago",
                            }: MonitorCardProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/monitor-details")}
        >
            <Card className="mb-3">
                <View className="flex-row items-start justify-between gap-4">
                    <View className="flex-1">
                        <Text className="text-base font-bold text-slate-950">{keyword}</Text>
                        <Text className="mt-1 text-sm text-slate-500">{location}</Text>
                    </View>

                    <Badge
                        label={active ? "Active" : "Paused"}
                        variant={active ? "green" : "gray"}
                    />
                </View>

                <View className="mt-5 flex-row justify-between">
                    <InfoItem label="Max price" value={maxPrice} />
                    <InfoItem label="Matches" value={String(matches)} highlight />
                    <InfoItem label="Last scan" value={lastScan} />
                </View>
            </Card>
        </TouchableOpacity>
    );
}

function InfoItem({
                      label,
                      value,
                      highlight = false,
                  }: {
    label: string;
    value: string;
    highlight?: boolean;
}) {
    return (
        <View>
            <Text className="text-xs text-slate-400">{label}</Text>
            <Text
                className={`mt-1 font-semibold ${
                    highlight ? "text-teal-600" : "text-slate-900"
                }`}
            >
                {value}
            </Text>
        </View>
    );
}