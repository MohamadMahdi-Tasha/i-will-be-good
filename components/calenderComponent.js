// Codes By Mahdi Tasha
// Importing Part
import {View, Text} from "react-native";
import BlackComponentsStyle from "../constants/styles/blackComponents.style";

// Creating Calender Component And Exporting It As Default
export default function CalenderComponent() {
    // Returning JSX
    return (
        <View style={BlackComponentsStyle.calender}>
            <View style={BlackComponentsStyle.calenderRow}>
                <View style={BlackComponentsStyle.calenderWeekDayItem}><Text style={BlackComponentsStyle.calenderWeekDayTitle}>S</Text></View>
                <View style={BlackComponentsStyle.calenderWeekDayItem}><Text style={BlackComponentsStyle.calenderWeekDayTitle}>S</Text></View>
                <View style={BlackComponentsStyle.calenderWeekDayItem}><Text style={BlackComponentsStyle.calenderWeekDayTitle}>M</Text></View>
                <View style={BlackComponentsStyle.calenderWeekDayItem}><Text style={BlackComponentsStyle.calenderWeekDayTitle}>T</Text></View>
                <View style={BlackComponentsStyle.calenderWeekDayItem}><Text style={BlackComponentsStyle.calenderWeekDayTitle}>W</Text></View>
                <View style={BlackComponentsStyle.calenderWeekDayItem}><Text style={BlackComponentsStyle.calenderWeekDayTitle}>T</Text></View>
                <View style={BlackComponentsStyle.calenderWeekDayItem}><Text style={BlackComponentsStyle.calenderWeekDayTitle}>F</Text></View>
            </View>
            <View style={BlackComponentsStyle.calenderRow}>
                <View style={BlackComponentsStyle.calenderMonthDayGreen}><Text style={BlackComponentsStyle.calenderMonthDayGreenTitle}>1</Text></View>
                <View style={BlackComponentsStyle.calenderMonthDayGreen}><Text style={BlackComponentsStyle.calenderMonthDayGreenTitle}>2</Text></View>
                <View style={BlackComponentsStyle.calenderMonthDayGreen}><Text style={BlackComponentsStyle.calenderMonthDayGreenTitle}>3</Text></View>
                <View style={BlackComponentsStyle.calenderMonthDayGreen}><Text style={BlackComponentsStyle.calenderMonthDayGreenTitle}>4</Text></View>
                <View style={BlackComponentsStyle.calenderMonthDayGreen}><Text style={BlackComponentsStyle.calenderMonthDayGreenTitle}>5</Text></View>
                <View style={BlackComponentsStyle.calenderMonthDayRed}><Text style={BlackComponentsStyle.calenderMonthDayRedTitle}>6</Text></View>
                <View style={BlackComponentsStyle.calenderMonthDayGreen}><Text style={BlackComponentsStyle.calenderMonthDayGreenTitle}>7</Text></View>
            </View>
            <View style={BlackComponentsStyle.calenderRow}>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>8</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>9</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>10</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>11</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>12</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>13</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>14</Text></View>
            </View>
            <View style={BlackComponentsStyle.calenderRow}>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>15</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>16</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>17</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>18</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>19</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>20</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>21</Text></View>
            </View>
            <View style={BlackComponentsStyle.calenderRow}>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>22</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>23</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>24</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>25</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>26</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>27</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>28</Text></View>
            </View>
            <View style={BlackComponentsStyle.calenderRow}>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>29</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>30</Text></View>
                <View style={BlackComponentsStyle.calenderItem}><Text style={BlackComponentsStyle.calenderItemTitle}>31</Text></View>
                <View style={BlackComponentsStyle.calenderMonthDayDisabled}><Text style={BlackComponentsStyle.calenderMonthDayDisabledTitle}>1</Text></View>
                <View style={BlackComponentsStyle.calenderMonthDayDisabled}><Text style={BlackComponentsStyle.calenderMonthDayDisabledTitle}>2</Text></View>
                <View style={BlackComponentsStyle.calenderMonthDayDisabled}><Text style={BlackComponentsStyle.calenderMonthDayDisabledTitle}>3</Text></View>
                <View style={BlackComponentsStyle.calenderMonthDayDisabled}><Text style={BlackComponentsStyle.calenderMonthDayDisabledTitle}>4</Text></View>
            </View>
        </View>
    );
}