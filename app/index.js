// Codes By Mahdi Tasha
// Importing Part
import {SafeAreaView, View, Text} from "react-native";
import {Stack} from "expo-router";
import HeaderStyle from "../constants/styles/header.style";
import TextStyles from "../constants/styles/title.style";
import ScrollAbleContainer from "../chunks/scrollAbleContainer";
import MedicationsTodoComponent from "../components/medicationsTodoComponent";

// Creating Home Page And Exporting It As Default
export default function HomePage() {
    // Returning JSX
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'I WILL BE GOOD',
                    headerStyle: HeaderStyle.header,
                    headerTitleStyle: HeaderStyle.title,
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                }}
            />

            <ScrollAbleContainer>

                <View>
                    <Text numberOfLines={1} style={TextStyles.title}>Today’s medication todo :</Text>
                    <MedicationsTodoComponent />
                </View>

            </ScrollAbleContainer>
        </SafeAreaView>
    );
}