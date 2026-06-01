import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
    children: ReactNode;
};

export function Screen({ children }: ScreenProps) {
    return (
        <SafeAreaView
            edges={["top"]}
            className="flex-1 bg-slate-50"
        >
            {children}
        </SafeAreaView>
    );
}