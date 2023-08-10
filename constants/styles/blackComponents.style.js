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
    rowComponent: {
        backgroundColor: colors.black,
        padding: sizes.large,
        borderRadius: sizes.large,
        display: 'flex',
        flexDirection: 'row',
        gap: sizes.bigger,
        justifyContent: 'space-between',
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
        fontWeight: '500',
        fontFamily: 'RobotRegular'
    },
    weekItems: {
        display: 'flex',
        flexDirection: 'column',
        gap: sizes.small,
        justifyContent: 'center',
        alignItems: 'center',
    },
    weekDayNames: {
        fontSize: sizes.normal,
        color: colors.white,
        fontWeight: '500',
        fontFamily: 'RobotRegular'
    }
})

// Exporting Styles
export default BlackComponentsStyle;

