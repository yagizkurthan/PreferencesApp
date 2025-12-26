import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../hooks/useTheme';

export default function SettingsScreen() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Settings</Text>

      <Text style={[styles.subtitle, { color: isDarkMode ? '#ccc' : '#666' }]}>
        User: {user?.username ?? '-'}
      </Text>

      <Pressable
        style={[styles.button, { backgroundColor: isDarkMode ? '#555' : '#eee', marginBottom: 10 }]}
        onPress={toggleTheme}
      >
        <Text style={[styles.buttonText, { color: isDarkMode ? '#fff' : '#000' }]}>
          Toggle Theme (Current: {theme})
        </Text>
      </Pressable>

      <Pressable style={[styles.button, { backgroundColor: isDarkMode ? '#555' : '#eee' }]} onPress={logout}>
        <Text style={[styles.buttonText, { color: isDarkMode ? '#fff' : '#000' }]}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 8 },
  subtitle: { fontSize: 16, marginBottom: 12 },
  button: { padding: 12, borderRadius: 8 },
  buttonText: { textAlign: 'center', fontWeight: '600' },
});