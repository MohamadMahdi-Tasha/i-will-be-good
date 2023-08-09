// Codes By Mahdi Tasha
// Importing Part
import {SafeAreaView} from "react-native";
import {Stack} from "expo-router";
import HeaderStyles from "../constants/styles/header.styles";

// Creating Home Page And Exporting It As Default
export default function HomePage() {
    // Returning JSX
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'I WILL BE GOOD',
                    headerStyle: HeaderStyles.header,
                    headerTitleStyle: HeaderStyles.title,
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                }}
            />
        </SafeAreaView>
    );
}