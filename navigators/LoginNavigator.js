import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Certificates from "../screens/Certificates";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Profile from "../screens/Profile";
import VerifyCert from "../screens/VerifyCert";

const Tab = createBottomTabNavigator();

function LoginNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.secondary },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: Colors.background,
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      <Tab.Screen
        name="Certificates"
        component={Certificates}
        options={{
          title: "List of Your Certificates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="certificate-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Verify"
        component={VerifyCert}
        options={{
          title: "Verify Certificate",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="checkbox-marked-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default LoginNavigator;
