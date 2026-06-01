import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";

type MatchCardProps = {
    title: string;
    price: string;
    location: string;
    time: string;
    source?: string;
    score?: string;
    tag?: string;
};

export function MatchCard({
                              title,
                              price,
                              location,
                              time,
                              source = "Marketplace",
                              score = "82%",
                              tag = "New",
                          }: MatchCardProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/match-details")}
        >
            <Card className="mb-3">
                <View className="flex-row gap-4">
                    <View className="h-20 w-20 rounded-2xl bg-blue-100" />

                    <View className="flex-1">
                        <View className="flex-row items-start justify-between gap-3">
                            <Text className="flex-1 text-base font-bold text-slate-950">
                                {title}
                            </Text>

                            <Text className="font-bold text-teal-500">{price}</Text>
                        </View>

                        <Text className="mt-1 text-sm text-slate-500">
                            {location} · {time}
                        </Text>

                        <View className="mt-3 flex-row flex-wrap gap-2">
                            <Badge label={tag} variant="orange" />
                            <Badge label={`${score} score`} variant="blue" />
                            <Badge label={source} variant="gray" />
                        </View>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    );
}