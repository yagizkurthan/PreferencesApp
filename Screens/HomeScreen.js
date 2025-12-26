import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
export default function HomeScreen({ navigation }) {
  const { user } = useAuth();
  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Not logged in</Text>
        <Pressable style={styles.button} onPress={() => navigation.replace('Login')}>
          <Text style={styles.buttonText}>Go to Login</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user.username}</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Settings</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 12 },
  button: { padding: 12, borderRadius: 8, backgroundColor: '#111' },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: '600' },
});