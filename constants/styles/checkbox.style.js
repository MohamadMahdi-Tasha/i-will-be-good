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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uncheckedSmall: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.white,
        backgroundColor: 'transparent',
        width: sizes.big,
        height: sizes.big,
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkedLarge: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.white,
        backgroundColor: colors.white,
        width: sizes.larger,
        height: sizes.larger,
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkedSmall: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.white,
        backgroundColor: colors.white,
        width: sizes.big,
        height: sizes.big,
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkedLargeDark: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.black,
        backgroundColor: colors.black,
        color: colors.white,
        width: sizes.larger,
        height: sizes.larger,
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uncheckedLargeDark: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.black,
        backgroundColor: 'transparent',
        width: sizes.larger,
        height: sizes.larger,
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkedSmallDark: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.black,
        backgroundColor: colors.black,
        color: colors.white,
        width: sizes.big,
        height: sizes.big,
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uncheckedSmallDark: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.black,
        backgroundColor: 'transparent',
        width: sizes.big,
        height: sizes.big,
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

// Exporting Styles
export default CheckboxStyles;

