// Codes By Mahdi Tasha
// Importing Part
import {useState} from "react";
import {TouchableOpacity} from "react-native";
import CheckboxStyle from '../constants/styles/checkbox.style';
import IconComponent from "./iconComponent";

// Creating Checkbox Component And Exporting It As Default
export default function CheckboxComponent({large, checked, dark}) {
    // Defining States Of Component
    const [isChecked, setChecked] = useState(checked);

    // A Function Which Checks Size Of Component And Its State And Returns Style
    function styleToSet() {
        if (!dark && large && isChecked) {
            return CheckboxStyle.checkedLarge;
        } else if (!dark && large && !isChecked) {
            return CheckboxStyle.uncheckedLarge;
        } else if (!dark && !large && isChecked) {
            return CheckboxStyle.checkedSmall;
        } else if (!dark && !large && !isChecked) {
            return CheckboxStyle.uncheckedSmall;
        } else if (dark && large && isChecked) {
            return CheckboxStyle.checkedLargeDark;
        } else if (dark && large && !isChecked) {
            return CheckboxStyle.uncheckedLargeDark;
        } else if (dark && !large && isChecked) {
            return CheckboxStyle.checkedSmallDark;
        } else if (dark && !large && !isChecked) {
            return CheckboxStyle.uncheckedSmallDark;
        }
    }

    // Returning JSX
    return (
       <TouchableOpacity
           style={styleToSet()}
           onPress={() => setChecked(prevState => !prevState)}
       >
           {
               (isChecked)
                   ? <IconComponent name={'check'} />
                   : false
           }
       </TouchableOpacity>
    );
}
