import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator,View } from 'react-native';
import { AuthProvider,useAuth } from './context/AuthContext';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
const Stack=createNativeStackNavigator();
function RootNavigator(){
const { user,isLoading }=useAuth();
if(isLoading){return <View style={{ flex:1,justifyContent:'center' }}><ActivityIndicator /></View>;}
return <Stack.Navigator>{user?(<><Stack.Screen name="Home" component={HomeScreen} /><Stack.Screen name="Settings" component={SettingsScreen} /></>):(<Stack.Screen name="Login" component={LoginScreen} />)}</Stack.Navigator>;
}
export default function App(){
return <AuthProvider><NavigationContainer><RootNavigator /></NavigationContainer></AuthProvider>;
}