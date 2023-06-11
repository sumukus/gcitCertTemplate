import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function VerifyCert() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.label}>Enter the gcitCert ID:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter the ID to verify it"
      />
      <View style={styles.buttonContainer}>
        <Button title="Verify gcitCert" color={Colors.secondary} />
      </View>
    </View>
  );
}

export default VerifyCert;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  label: {
    color: Colors.text,
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    backgroundColor: Colors.backgroundWhite,
    padding: 10,
    marginHorizontal: "5%",
    marginBottom: 10,
  },
  buttonContainer: {
    flexWrap: "wrap",
    alignSelf: "center",
  },
});
