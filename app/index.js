// Codes By Mahdi Tasha
// Importing Part
import {SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import {Stack} from "expo-router";
import HeaderStyle from "../constants/styles/header.style";
import TextStyles from "../constants/styles/text.style";
import ScrollAbleContainer from "../chunks/scrollAbleContainer";
import MedicationsTodoComponent from "../components/medicationsTodoComponent";
import WeeklyDoneThingsComponent from "../chunks/weeklyDoneThingsComponent";
import DividerComponent from "../chunks/dividerComponent";
import CheckboxComponent from "../chunks/checkboxComponent";
import ButtonStyle from "../constants/styles/button.style";
import ContainerStyle from "../constants/styles/container.style";

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
                    <View>
                        <Text numberOfLines={1} style={TextStyles.title}>Today’s medication todo :</Text>
                        <MedicationsTodoComponent />
                    </View>
                    <View>
                        <Text numberOfLines={1} style={TextStyles.title}>Medications taken this week:</Text>
                        <WeeklyDoneThingsComponent />
                    </View>
                    <TouchableOpacity style={ButtonStyle.secondary}>
                        <Text style={ButtonStyle.title}>Click here to see monthly</Text>
                    </TouchableOpacity>
                </View>
                <DividerComponent />
                <View>
                    <View style={ContainerStyle.checkBoxHolder}>
                        <CheckboxComponent large checked dark />
                        <Text numberOfLines={1} style={TextStyles.checkBoxTitle}>Today’s meditations todo :</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={TextStyles.title}>Meditations done this week :</Text>
                        <WeeklyDoneThingsComponent />
                    </View>
                    <TouchableOpacity style={ButtonStyle.secondary}>
                        <Text style={ButtonStyle.title}>Click here to see monthly</Text>
                    </TouchableOpacity>
                </View>
            </ScrollAbleContainer>
        </SafeAreaView>
    );
}