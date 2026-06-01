import { ScrollView, Text, View } from "react-native";
import { Button } from "../../components/ui/Button";
import { MonitorCard } from "../../components/MonitorCard";
import { Screen } from "../../components/Screen";
import {router} from "expo-router";

export default function MonitorsScreen() {
    return (
        <Screen>
        <ScrollView className="flex-1 bg-slate-50">
            <View className="px-5 pb-10 pt-16">
                <Text className="text-3xl font-bold text-slate-950">Monitors</Text>

                <Text className="mt-2 text-base text-slate-500">
                    Saved searches that run automatically.
                </Text>

                <View className="mt-6">
                    <Button title="Create monitor" onPress={() => router.push("/create-monitor")} />
                </View>

                <View className="mt-6">
                    <MonitorCard
                        keyword="iPhone 15 Pro"
                        location="Budapest + 25km"
                        maxPrice="300 000 Ft"
                        matches={8}
                    />

                    <MonitorCard
                        keyword="Sony A7 III"
                        location="Hungary"
                        maxPrice="400 000 Ft"
                        matches={5}
                    />

                    <MonitorCard
                        keyword="Gravel bike"
                        location="Budapest"
                        maxPrice="180 000 Ft"
                        matches={3}
                    />
                </View>
            </View>
        </ScrollView>
        </Screen>
    );
}