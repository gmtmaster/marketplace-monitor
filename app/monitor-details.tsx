import { ScrollView, Text, View } from "react-native";
import { router } from "expo-router";

import { Screen } from "../components/Screen";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { MatchCard } from "../components/MatchCard";

export default function MonitorDetailsScreen() {
    return (
        <Screen>
            <ScrollView className="flex-1">
                <View className="px-5 pb-10 pt-6">
                    <Button title="Back" variant="secondary" onPress={() => router.back()} />

                    <View className="mt-6 flex-row items-start justify-between gap-4">
                        <View className="flex-1">
                            <Text className="text-3xl font-bold text-slate-950">
                                iPhone 15 Pro
                            </Text>

                            <Text className="mt-2 text-base text-slate-500">
                                Budapest + 25km
                            </Text>
                        </View>

                        <Badge label="Active" variant="green" />
                    </View>

                    <View className="mt-6 flex-row gap-3">
                        <SmallStat label="Matches" value="8" />
                        <SmallStat label="Last scan" value="2m ago" />
                    </View>

                    <Card className="mt-4">
                        <Text className="text-lg font-bold text-slate-950">
                            Monitor rules
                        </Text>

                        <View className="mt-5 gap-4">
                            <InfoRow label="Keyword" value="iPhone 15 Pro" />
                            <InfoRow label="Exclude words" value="broken, cracked, repair" />
                            <InfoRow label="Max price" value="300 000 Ft" />
                            <InfoRow label="Sources" value="Facebook, eBay, Vinted" />
                            <InfoRow label="Category" value="Electronics" />
                            <InfoRow label="Notifications" value="Push enabled" />
                        </View>
                    </Card>

                    <Card className="mt-4 border-blue-100 bg-blue-50">
                        <Text className="text-lg font-bold text-slate-950">
                            Scan activity
                        </Text>

                        <Text className="mt-2 text-sm leading-6 text-slate-600">
                            This monitor checked 214 listings today and filtered 37 low-quality
                            results before sending alerts.
                        </Text>
                    </Card>

                    <View className="mt-5 flex-row gap-3">
                        <View className="flex-1">
                            <Button title="Edit" />
                        </View>

                        <View className="flex-1">
                            <Button title="Pause" variant="secondary" />
                        </View>
                    </View>

                    <View className="mt-3">
                        <Button title="Delete monitor" variant="secondary" />
                    </View>

                    <Text className="mb-3 mt-8 text-lg font-bold text-slate-950">
                        Latest matches
                    </Text>

                    <MatchCard
                        title="iPhone 15 Pro 256GB"
                        price="285k Ft"
                        location="Budapest"
                        time="12m ago"
                        score="86%"
                        tag="Strong Match"
                    />

                    <MatchCard
                        title="iPhone 15 Pro 128GB"
                        price="265k Ft"
                        location="Szeged"
                        time="1h ago"
                        score="74%"
                        tag="Under Budget"
                    />
                </View>
            </ScrollView>
        </Screen>
    );
}

function SmallStat({ label, value }: { label: string; value: string }) {
    return (
        <Card className="flex-1">
            <Text className="text-xs text-slate-500">{label}</Text>
            <Text className="mt-2 text-xl font-bold text-slate-950">{value}</Text>
        </Card>
    );
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <View className="flex-row items-center justify-between gap-4">
            <Text className="text-sm text-slate-500">{label}</Text>
            <Text className="flex-1 text-right text-sm font-semibold text-slate-950">
                {value}
            </Text>
        </View>
    );
}