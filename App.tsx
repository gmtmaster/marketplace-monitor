import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import "./global.css";

import { Button } from "./components/ui/Button";
import { StatCard } from "./components/StatCard";
import { MonitorCard } from "./components/MonitorCard";
import { MatchCard } from "./components/MatchCard";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-slate-50">
                <StatusBar style="dark" />

                <ScrollView className="flex-1">
                    <View className="px-5 py-6">

                        <Text className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                            Marketplace Monitor
                        </Text>

                        <Text className="mt-3 text-4xl font-bold text-slate-950">
                            Catch better deals faster.
                        </Text>

                        <Text className="mt-4 text-base text-slate-500">
                            Track products, prices and locations.
                        </Text>

                        <View className="mt-6">
                            <Button title="Create Monitor" />
                        </View>

                        <View className="mt-6 flex-row gap-3">
                            <StatCard label="Active" value="6" />
                            <StatCard label="Alerts" value="24" accent="orange" />
                        </View>

                        <Text className="mt-8 mb-3 text-lg font-bold">
                            Your Monitors
                        </Text>

                        <MonitorCard
                            keyword="iPhone 15 Pro"
                            location="Budapest"
                            maxPrice="300 000 Ft"
                            matches={8}
                        />

                        <MonitorCard
                            keyword="Gravel Bike"
                            location="Hungary"
                            maxPrice="180 000 Ft"
                            matches={4}
                        />

                        <Text className="mt-8 mb-3 text-lg font-bold">
                            Recent Matches
                        </Text>

                        <MatchCard
                            title="iPhone 15 Pro 256GB"
                            price="285k Ft"
                            location="Budapest"
                            time="15 min ago"
                        />

                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}