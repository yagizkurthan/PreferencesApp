import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
export default function SettingsScreen({ navigation }) {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigation.replace('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>User: {user?.username ?? '-'}</Text>

      <Pressable style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}