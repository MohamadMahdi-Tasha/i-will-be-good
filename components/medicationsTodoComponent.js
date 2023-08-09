// Codes By Mahdi Tasha
// Importing Part
import {View, Text} from "react-native";
import BlackComponentsStyle from "../constants/styles/blackComponents.style";
import CheckboxComponent from '../chunks/checkboxComponent';

// Creating Medications Component And Exporting It As Default
export default function MedicationsTodoComponent() {
    // Returning JSX
    return (
        <View style={BlackComponentsStyle.components}>
            <View style={BlackComponentsStyle.TodosHolder}>
                <CheckboxComponent />
                <Text style={BlackComponentsStyle.title} numberOfLines={1}>Sertraline (the after lunch medication)</Text>
            </View>
            <View style={BlackComponentsStyle.TodosHolder}>
                <CheckboxComponent />
                <Text style={BlackComponentsStyle.title} numberOfLines={1}>Rasperidone (the after dinner medication)</Text>
            </View>
        </View>
    );
}