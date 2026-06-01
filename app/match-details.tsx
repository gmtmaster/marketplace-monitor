import { ScrollView, Text, View } from "react-native";
import { router } from "expo-router";

import { Screen } from "../components/Screen";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

export default function MatchDetailsScreen() {
    return (
        <Screen>
            <ScrollView className="flex-1">
                <View className="px-5 pb-10 pt-6">
                    <Button title="Back" variant="secondary" onPress={() => router.back()} />

                    <View className="mt-6 h-72 rounded-[32px] bg-blue-100" />

                    <View className="mt-6 flex-row items-start justify-between gap-4">
                        <View className="flex-1">
                            <Text className="text-3xl font-bold leading-tight text-slate-950">
                                iPhone 15 Pro 256GB
                            </Text>

                            <Text className="mt-2 text-base text-slate-500">
                                Budapest · 12 minutes ago
                            </Text>
                        </View>

                        <Badge label="New" variant="orange" />
                    </View>

                    <Text className="mt-5 text-4xl font-bold text-orange-500">
                        285 000 Ft
                    </Text>

                    <Card className="mt-6">
                        <Text className="text-lg font-bold text-slate-950">
                            Match summary
                        </Text>

                        <View className="mt-5 gap-4">
                            <InfoRow label="Matched monitor" value="iPhone 15 Pro" />
                            <InfoRow label="Max price" value="300 000 Ft" />
                            <InfoRow label="Price difference" value="-15 000 Ft" highlight />
                            <InfoRow label="Source" value="Facebook Marketplace" />
                        </View>
                    </Card>

                    <Card className="mt-4 border-blue-100 bg-blue-50">
                        <Text className="text-lg font-bold text-slate-950">
                            Deal score
                        </Text>

                        <Text className="mt-2 text-sm leading-6 text-slate-600">
                            This listing is below your target price and appeared recently in your selected location.
                        </Text>

                        <View className="mt-5 h-3 overflow-hidden rounded-full bg-white">
                            <View className="h-full w-5/6 rounded-full bg-blue-600" />
                        </View>

                        <Text className="mt-3 text-sm font-semibold text-blue-700">
                            86% strong match
                        </Text>
                    </Card>

                    <View className="mt-6 gap-3">
                        <Button title="Open listing" />
                        <Button title="Save for later" variant="secondary" />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}

function InfoRow({
                     label,
                     value,
                     highlight = false,
                 }: {
    label: string;
    value: string;
    highlight?: boolean;
}) {
    return (
        <View className="flex-row items-center justify-between">
            <Text className="text-sm text-slate-500">{label}</Text>
            <Text
                className={`text-sm font-semibold ${
                    highlight ? "text-emerald-600" : "text-slate-950"
                }`}
            >
                {value}
            </Text>
        </View>
    );
}