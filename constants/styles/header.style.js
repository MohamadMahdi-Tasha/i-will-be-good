// Importing Part
import {StyleSheet} from "react-native";
import colors from "../colors/colors";
import sizes from "../sizes/sizes";

// Defining Styles Of Header Sections
const HeaderStyle = StyleSheet.create({
    header: {
        backgroundColor: colors.headerBg,
    },
    title: {
        color: colors.black,
        fontSize: sizes.normal,
        fontWeight: '500',
        letterSpacing: '3px',
        fontFamily: 'RobotRegular'
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
export default HeaderStyle;

