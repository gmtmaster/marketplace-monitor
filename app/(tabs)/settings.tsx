import { ScrollView, Text, View } from "react-native";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Screen } from "../../components/Screen";
export default function SettingsScreen() {
    return (
        <Screen>
        <ScrollView className="flex-1 bg-slate-50">
            <View className="px-5 pb-10 pt-16">
                <Text className="text-3xl font-bold text-slate-950">Settings</Text>

                <Text className="mt-2 text-base text-slate-500">
                    Manage alerts, account and subscription.
                </Text>

                <Card className="mt-6">
                    <View className="flex-row items-center justify-between">
                        <View>
                            <Text className="text-base font-bold text-slate-950">
                                Current plan
                            </Text>
                            <Text className="mt-1 text-sm text-slate-500">
                                Free monitoring plan
                            </Text>
                        </View>

                        <Badge label="Free" variant="blue" />
                    </View>

                    <View className="mt-5">
                        <Button title="Upgrade plan" variant="secondary" />
                    </View>
                </Card>

                <Card className="mt-4">
                    <Text className="text-base font-bold text-slate-950">
                        Notifications
                    </Text>

                    <Text className="mt-2 text-sm leading-6 text-slate-500">
                        Email and push notification settings will be added here.
                    </Text>
                </Card>
            </View>
        </ScrollView>
</Screen>
    );
}