// Codes By Mahdi Tasha
// Importing Part
import {View, Text} from 'react-native';
import CheckboxComponent from "../chunks/checkboxComponent";
import BlackComponentsStyle from "../constants/styles/blackComponents.style";
import blackComponentsStyle from "../constants/styles/blackComponents.style";

// Creating Weekly Done Things Component And Exporting It As Default
export default function WeeklyDoneThingsComponent({type}) {
    // Returning JSX
    return (
        <View style={BlackComponentsStyle.rowComponent}>
            <View style={blackComponentsStyle.weekItems}>
                <CheckboxComponent large checked={true} />
                <Text style={blackComponentsStyle.weekDayNames}>SAT</Text>
            </View>
            <View style={blackComponentsStyle.weekItems}>
                <CheckboxComponent large checked={true} />
                <Text style={blackComponentsStyle.weekDayNames}>SUN</Text>
            </View>
            <View style={blackComponentsStyle.weekItems}>
                <CheckboxComponent large checked={true} />
                <Text style={blackComponentsStyle.weekDayNames}>MON</Text>
            </View>
            <View style={blackComponentsStyle.weekItems}>
                <CheckboxComponent large checked={true} />
                <Text style={blackComponentsStyle.weekDayNames}>TUE</Text>
            </View>
            <View style={blackComponentsStyle.weekItems}>
                <CheckboxComponent large checked={true} />
                <Text style={blackComponentsStyle.weekDayNames}>WED</Text>
            </View>
            <View style={blackComponentsStyle.weekItems}>
                <CheckboxComponent large checked={false} />
                <Text style={blackComponentsStyle.weekDayNames}>THU</Text>
            </View>
            <View style={blackComponentsStyle.weekItems}>
                <CheckboxComponent large checked={true} />
                <Text style={blackComponentsStyle.weekDayNames}>FRI</Text>
            </View>
        </View>
    );
}