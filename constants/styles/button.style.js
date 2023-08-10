// Importing Part
import {StyleSheet} from "react-native";
import sizes from "../sizes/sizes";
import colors from "../colors/colors";

// Defining Styles Of Buttons
const ButtonStyles = StyleSheet.create({
    secondary: {
        backgroundColor: colors.white,
        borderWidth: '1px',
        borderColor: colors.black,
        borderStyle: 'solid',
        width: '100%',
        padding: sizes.big,
        textAlign: 'center',
        borderRadius: sizes.bigger,
        marginBottom: '45px'
    },
    title: {
        fontWeight: '500',
        fontSize: sizes.bigger,
        fontFamily: 'RobotRegular'
    }
})

// Exporting Styles
export default ButtonStyles;

