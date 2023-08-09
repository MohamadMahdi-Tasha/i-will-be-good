// Importing Part
import {StyleSheet} from "react-native";
import sizes from "../sizes/sizes";
import colors from "../colors/colors";

// Defining Styles Of CheckBoxes
const CheckboxStyles = StyleSheet.create({
    uncheckedLarge: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.white,
        backgroundColor: 'transparent',
        width: sizes.larger,
        height: sizes.larger,
        borderRadius: '4px',
    },
    uncheckedSmall: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.white,
        backgroundColor: 'transparent',
        width: sizes.big,
        height: sizes.big,
        borderRadius: '4px',
    },
    checkedLarge: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.white,
        backgroundColor: colors.white,
        width: sizes.larger,
        height: sizes.larger,
        borderRadius: '4px',
    },
    checkedSmall: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.white,
        backgroundColor: colors.white,
        width: sizes.big,
        height: sizes.big,
        borderRadius: '4px',
    },
})

// Exporting Styles
export default CheckboxStyles;

