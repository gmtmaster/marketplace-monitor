import { ScrollView, Text, View } from "react-native";
import { MatchCard } from "../../components/MatchCard";
import { Screen } from "../../components/Screen";
export default function MatchesScreen() {
    return (
        <Screen>
        <ScrollView className="flex-1 bg-slate-50">
            <View className="px-5 pb-10 pt-16">
                <Text className="text-3xl font-bold text-slate-950">Matches</Text>

                <Text className="mt-2 text-base text-slate-500">
                    Fresh listings found by your monitors.
                </Text>

                <View className="mt-6">
                    <MatchCard
                        title="iPhone 15 Pro 256GB"
                        price="285k Ft"
                        location="Budapest"
                        time="12m ago"
                    />

                    <MatchCard
                        title="Sony A7 III camera body"
                        price="390k Ft"
                        location="Győr"
                        time="1h ago"
                    />

                    <MatchCard
                        title="Cube Gravel Bike"
                        price="165k Ft"
                        location="Pécs"
                        time="3h ago"
                    />
                </View>
            </View>
        </ScrollView>
</Screen>
    );
}