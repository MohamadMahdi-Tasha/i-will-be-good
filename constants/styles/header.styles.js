// Importing Part
import {StyleSheet} from "react-native";
import colors from "../colors/colors";

// Defining Styles Of Header Sections
const HeaderStyles = StyleSheet.create({
    header: {
        backgroundColor: colors.headerBg,
    },
    title: {
        color: colors.black,
        fontSize: '12px',
        fontWeight: '500',
        letterSpacing: '3px'
    },
    backButton: {
        backgroundColor: colors.black,
        color: colors.white,
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

// Exporting Styles
export default HeaderStyles;

