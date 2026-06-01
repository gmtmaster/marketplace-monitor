import { ScrollView, Text, View } from "react-native";
import { router } from "expo-router";

import { Screen } from "../../components/Screen";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { StatCard } from "../../components/StatCard";
import { MatchCard } from "../../components/MatchCard";

export default function DashboardScreen() {
    return (
        <Screen>
            <ScrollView className="flex-1">
                <View className="px-5 pb-10 pt-6">
                    <Text className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                        Marketplace Monitor
                    </Text>

                    <Card className="mt-4 overflow-hidden border-blue-100 bg-teal-600">
                        <Text className="text-sm font-semibold text-indigo-100">
                            Good evening
                        </Text>

                        <Text className="mt-2 text-3xl font-bold leading-tight text-white">
                            24 new opportunities found today.
                        </Text>

                        <Text className="mt-3 text-base leading-6 text-blue-100">
                            Your monitors scanned fresh listings and filtered low-quality results automatically.
                        </Text>

                        <View className="mt-6">
                            <Button
                                title="Create monitor"
                                variant="secondary"
                                onPress={() => router.push("/create-monitor")}
                            />
                        </View>
                    </Card>

                    <View className="mt-4 flex-row gap-3">
                        <StatCard label="Active" value="6" />
                        <StatCard label="Matches" value="24" accent="orange" />
                    </View>

                    <View className="mt-3 flex-row gap-3">
                        <StatCard label="Spam filtered" value="127" />
                        <StatCard label="Avg score" value="82%" accent="orange" />
                    </View>

                    <Text className="mb-3 mt-8 text-lg font-bold text-slate-950">
                        Best opportunities
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
                        title="Sony A7 III camera body"
                        price="390k Ft"
                        location="Győr"
                        time="1h ago"
                        score="79%"
                        tag="Under Budget"
                    />

                    <Text className="mb-3 mt-8 text-lg font-bold text-slate-950">
                        Activity
                    </Text>

                    <Card>
                        <ActivityItem title="New iPhone match found" time="12m ago" />
                        <ActivityItem title="34 listings scanned" time="28m ago" />
                        <ActivityItem title="17 spam listings removed" time="1h ago" />
                        <ActivityItem title="Gravel bike monitor updated" time="2h ago" last />
                    </Card>
                </View>
            </ScrollView>
        </Screen>
    );
}

function ActivityItem({
                          title,
                          time,
                          last = false,
                      }: {
    title: string;
    time: string;
    last?: boolean;
}) {
    return (
        <View
            className={`flex-row items-center gap-3 py-3 ${
                last ? "" : "border-b border-slate-100"
            }`}
        >
            <View className="h-3 w-3 rounded-full bg-teal-500" />

            <View className="flex-1">
                <Text className="font-semibold text-slate-900">{title}</Text>
                <Text className="mt-1 text-xs text-slate-500">{time}</Text>
            </View>
        </View>
    );
}