import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Colors from "../constants/Colors";

function AddCertificate() {
  const [userAddress, setUserAddress] = useState("");
  const [title, setTitle] = useState("");
  const [cgpa, setcgpa] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ScrollView style={styles.rootContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text style={styles.label}> User Account Address</Text>
          <TextInput
            multiline={true}
            style={styles.textInput}
            placeholder="Enter address"
            onChangeText={(enteredText) => setUserAddress(enteredText)}
            value={userAddress}
          />
          <Text style={styles.label}> Certificate Title</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter certificate title"
            onChangeText={(enteredText) => setTitle(enteredText)}
            value={title}
          />

          <Text style={styles.label}> CGPA</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.textInput}
            placeholder="Enter cgpa value"
            onChangeText={(enteredText) => setcgpa(enteredText)}
            value={cgpa}
          />
          <View style={styles.dateContainer}>
            <View>
              <Text style={styles.label}> Start Date</Text>
              <TextInput
                placeholder="Enter date MM/YYYY"
                style={styles.textInput}
                onChangeText={(enteredText) => setStartDate(enteredText)}
                value={startDate}
              />
            </View>
            <View>
              <Text style={styles.label}>End Date</Text>
              <TextInput
                placeholder="Enter date MM/YYYY"
                style={styles.textInput}
                onChangeText={(enteredText) => setEndDate(enteredText)}
                value={endDate}
              />
            </View>
          </View>

          <Text style={styles.label}> Course Duration</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.textInput}
            placeholder="Enter course duration"
            onChangeText={(enteredText) => setDuration(enteredText)}
            value={duration}
          />
          <View style={styles.buttonContainer}>
            <Button title="Submit" color={Colors.secondary} />
          </View>
        </>
      )}
    </ScrollView>
  );
}

export default AddCertificate;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: "10%",
    backgroundColor: Colors.background,
  },
  label: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    paddingBottom: 10,
  },
  textInput: {
    backgroundColor: Colors.backgroundWhite,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  buttonContainer: {
    alignSelf: "center",
    paddingTop: 10,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
