// Codes By Mahdi Tasha
// Importing Part
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';

// Creating And Exporting Layout Of Pages
export default function Layout() {
    // Loading Fonts
    const [fontsAreLoaded] = useFonts({
        RobotRegular: require('../assets/fonts/roboto/Roboto-Regular.ttf'),
        RobotBold: require('../assets/fonts/roboto/Roboto-Bold.ttf'),
    })

    // Conditional Rendering
    if (fontsAreLoaded) {
        return (
            <Stack initialRouteName="Home">
                <Stack.Screen name={'Home'} />
            </Stack>
        );
    } else {
        return null;
    }
}
