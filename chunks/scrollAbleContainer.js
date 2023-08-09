// Codes By Mahdi Tasha
// Importing Part
import {ScrollView} from 'react-native';
import ContainerStyle from '../constants/styles/container.style';

// Creating Scrollable Component And Exporting It As Default
export default function ScrollAbleContainer({children}) {
    // Returning JSX
    return (
        <ScrollView
            style={ContainerStyle.scrollableContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    );
}
