// Codes By Mahdi Tasha
// Importing Part
import {useState} from "react";
import {TouchableOpacity} from "react-native";
import CheckboxStyle from '../constants/styles/checkbox.style';
import IconComponent from "./iconComponent";

// Creating Checkbox Component And Exporting It As Default
export default function CheckboxComponent({large}) {
    // Defining States Of Component
    const [isChecked, setChecked] = useState(false);

    // A Function Which Checks Size Of Component And Its State And Returns Style
    function styleToSet() {
        if (large && isChecked) {
            return CheckboxStyle.checkedLarge;
        } else if (large && !isChecked) {
            return CheckboxStyle.uncheckedLarge;
        } else if (!large && isChecked) {
            return CheckboxStyle.checkedSmall;
        } else if (!large && !isChecked) {
            return CheckboxStyle.uncheckedSmall;
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
