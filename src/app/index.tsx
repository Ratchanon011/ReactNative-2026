import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>

      <Link href="/test-components" style={styles.link}>
        <Text style={styles.linkText}>Test Components</Text>
      </Link>

            <Link href="/test-greeting" style={styles.link}>
        <Text style={styles.linkText}>Test Greeting</Text>
      </Link>

      <Link href="/Travel" style={styles.link}>
        <Text style={styles.linkText}>Travel</Text>
      </Link>
      <Link href="/resort" style={styles.link}>
        <Text style={styles.linkText}>Resort</Text>
      </Link>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  link: { margin: 10, padding: 10, backgroundColor: "#2196F3", borderRadius: 5 },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center" },
});



