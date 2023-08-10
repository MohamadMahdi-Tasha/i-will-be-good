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
        flexWrap: 'wrap',
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
    },
    calender: {
        backgroundColor: colors.black,
        borderRadius: sizes.larger,
        padding: sizes.large,
        marginBottom: '40px',
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: sizes.big
    },
    calenderRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: sizes.small,
        justifyContent: "space-between"
    },
    calenderItem: {
        width: '35px',
        height: '35px',
        backgroundColor: colors.white,
        borderRadius: sizes.small,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calenderItemTitle: {
        fontSize: sizes.normal,
        color: colors.black,
        fontWeight: '500'
    },
    calenderWeekDayItem: {
        width: '35px',
        height: '35px',
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.white,
        borderRadius: sizes.small,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calenderWeekDayTitle: {
        fontSize: sizes.normal,
        color: colors.white,
        fontWeight: '500'
    },
    calenderMonthDayDisabled: {
        width: '35px',
        height: '35px',
        backgroundColor: colors.grey,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.grey,
        borderRadius: sizes.small,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calenderMonthDayDisabledTitle: {
        fontSize: sizes.normal,
        color: colors.black,
        fontWeight: '500'
    },
    calenderMonthDayGreen: {
        width: '35px',
        height: '35px',
        backgroundColor: colors.green,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.green,
        borderRadius: sizes.small,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calenderMonthDayGreenTitle: {
        fontSize: sizes.normal,
        color: colors.black,
        fontWeight: '500'
    },
    calenderMonthDayRed: {
        width: '35px',
        height: '35px',
        backgroundColor: colors.red,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.red,
        borderRadius: sizes.small,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calenderMonthDayRedTitle: {
        fontSize: sizes.normal,
        color: colors.black,
        fontWeight: '500'
    }
})

// Exporting Styles
export default BlackComponentsStyle;

