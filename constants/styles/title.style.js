// Importing Part
import {StyleSheet} from "react-native";
import colors from "../colors/colors";
import sizes from "../sizes/sizes";

// Defining Styles Of Texts
const TextStyles = StyleSheet.create({
    title: {
        color: colors.black,
        fontSize: sizes.bigger,
        fontWeight: '500',
        marginBottom: sizes.larger
    }
})

// Exporting Styles
export default TextStyles;