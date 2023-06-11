import { View, Text, StyleSheet, Button, TextInput, Image } from "react-native";
import Colors from "../constants/Colors";

function Login() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/gcit_logo.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.label}>Metamask Wallet Account Address</Text>
      <TextInput
        multiline={true}
        style={styles.textInput}
        placeholder="Enter account address"
      />
      <Text style={styles.label}>Metamask Wallet Private Key</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter wallet private key"
        secureTextEntry={true}
      />
      <View style={styles.button}>
        <Button title="Connect Metamask" color={Colors.secondary} />
      </View>
      <View style={styles.warningContainer}>
        <Text style={styles.warningText}>
          Disclaimer: We do not store your private key anywhere. We just use it
          to validate your account and sign the transaction done by you. Use the
          private key of your wallet cautiously. Do not enter to any app which
          you don't trust.
        </Text>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: Colors.backgroundWhite,
    marginHorizontal: "5%",
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 10,
    fontWeight: "bold",
  },
  button: {
    flexWrap: "wrap",
    alignSelf: "center",
    paddingTop: 10,
  },
  imageContainer: {
    height: 150,
    width: 150,
    alignSelf: "center",
    borderRadius: 75,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  warningContainer: {
    backgroundColor: Colors.backgroundGrey,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: "5%",
    marginTop: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  warningText: {
    fontStyle: "italic",
    color: "red",
  },
});
