import { useState } from "react";
import { ScrollView, Switch, Text, View } from "react-native";
import { router } from "expo-router";

import { Screen } from "../components/Screen";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { TogglePill } from "../components/ui/TogglePill";

const categories = ["All", "Electronics", "Cars", "Bikes", "Home"];

export default function CreateMonitorScreen() {
    const [category, setCategory] = useState("All");
    const [pushEnabled, setPushEnabled] = useState(true);

    return (
        <Screen>
            <ScrollView className="flex-1">
                <View className="px-5 pb-10 pt-6">
                    <Text className="text-3xl font-bold text-slate-950">
                        Create monitor
                    </Text>

                    <Text className="mt-2 text-base leading-7 text-slate-500">
                        Tell us what you are looking for and we will monitor new listings
                        for you.
                    </Text>

                    <Card className="mt-6">
                        <Input label="Keyword" placeholder="e.g. iPhone 15 Pro" />

                        <Input
                            label="Exclude words"
                            placeholder="e.g. broken, cracked, repair"
                        />

                        <Card className="mb-4 border-blue-100 bg-blue-50">
                            <Text className="font-semibold text-slate-900">
                                Smart filtering
                            </Text>

                            <Text className="mt-2 text-sm leading-6 text-slate-600">
                                Listings containing these words will be ignored before
                                notifications are sent.
                            </Text>
                        </Card>

                        <Input
                            label="Max price"
                            placeholder="e.g. 300000"
                            keyboardType="numeric"
                        />

                        <Input label="Location" placeholder="e.g. Budapest" />

                        <Text className="mb-3 text-sm font-semibold text-slate-700">
                            Category
                        </Text>

                        <View className="mb-5 flex-row flex-wrap gap-2">
                            {categories.map((item) => (
                                <TogglePill
                                    key={item}
                                    label={item}
                                    active={category === item}
                                    onPress={() => setCategory(item)}
                                />
                            ))}
                        </View>

                        <View className="flex-row items-center justify-between rounded-2xl bg-slate-50 p-4">
                            <View className="flex-1 pr-4">
                                <Text className="font-semibold text-slate-950">
                                    Push alerts
                                </Text>

                                <Text className="mt-1 text-sm text-slate-500">
                                    Notify me when a new match appears.
                                </Text>
                            </View>

                            <Switch value={pushEnabled} onValueChange={setPushEnabled} />
                        </View>
                    </Card>

                    <View className="mt-6 gap-3">
                        <Button title="Save monitor" onPress={() => router.back()} />

                        <Button
                            title="Cancel"
                            variant="secondary"
                            onPress={() => router.back()}
                        />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}