// Codes By Mahdi Tasha
// Importing Part
import {View} from 'react-native';
import DividerStyles from '../constants/styles/divider.style';

// Creating Divider Component And Exporting It As Default
export default function DividerComponent() {
    // Returning JSX
    return (
        <View style={DividerStyles.divider} />
    );
}