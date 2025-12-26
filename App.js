
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
const Stack = createNativeStackNavigator();
export default function App() {
return (
  <AuthProvider>
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Settings" component={SettingsScreen} />
</Stack.Navigator>
</NavigationContainer>
  </AuthProvider>
);
}