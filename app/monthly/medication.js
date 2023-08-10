// Codes By Mahdi Tasha
// Importing Part
import {SafeAreaView, Text} from "react-native";
import {Stack} from "expo-router";
import ScrollAbleContainer from "../../chunks/scrollAbleContainer";
import CalenderComponent from '../../components/calenderComponent';
import HeaderStyle from "../../constants/styles/header.style";
import textStyle from "../../constants/styles/text.style";

// Creating Monthly Medication Page And Exporting It As Default
export default function MonthlyMedicationPage() {
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
                <Text style={textStyle.title}>Medications taken this week:</Text>
                <CalenderComponent />
                <Text style={textStyle.paragraph}>Derealization is an alteration in the perception of the external world, causing those with the condition to perceive it as unreal, distant, distorted or falsified. Other symptoms include feeling as if one's environment is lacking in spontaneity, emotional coloring, and depth. It is a dissociative symptom that may appear in moments of severe stress</Text>
            </ScrollAbleContainer>
        </SafeAreaView>
    );
}