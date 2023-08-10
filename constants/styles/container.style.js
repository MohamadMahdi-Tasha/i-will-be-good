// Importing Part
import {StyleSheet} from "react-native";
import sizes from "../sizes/sizes";
import colors from "../colors/colors";

// Defining Styles Of Containers
const ContainerStyle = StyleSheet.create({
    scrollableContainer: {
        backgroundColor: colors.white,
        padding: sizes.big,
    },
    checkBoxHolder: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        marginBottom: sizes.larger
    }
})

// Exporting Styles
export default ContainerStyle;

