import { Text, View, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";

function Profile() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.label}>My Ethereum Wallet Address</Text>
      <Text selectable={true}>Here will fetch account address</Text>
      <Text style={styles.label}>My Ether(s) Balance</Text>
      <Text>Here we will display account balance</Text>

      <View style={styles.button}>
        <Button title="Logout" color={Colors.secondary} />
      </View>
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    paddingTop: 10,
  },
  button: {
    paddingTop: 10,
  },
});
