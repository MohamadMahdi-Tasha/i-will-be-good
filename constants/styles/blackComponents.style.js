// Importing Part
import {StyleSheet} from "react-native";
import sizes from "../sizes/sizes";
import colors from "../colors/colors";

// Defining Styles Of Black Components
const BlackComponentsStyle = StyleSheet.create({
    components: {
        backgroundColor: colors.black,
        padding: sizes.large,
        borderRadius: sizes.large,
        display: 'flex',
        flexDirection: 'column',
        gap: sizes.bigger,
        marginBottom: sizes.larger
    },
    TodosHolder: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: colors.white,
        fontSize: sizes.normal,
        marginLeft: sizes.small,
        fontWeight: '500'
    }
})

// Exporting Styles
export default BlackComponentsStyle;

