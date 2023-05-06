import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/HomeScreen";
import Search from "../screens/SearchScreen";
import Bookmark from "../screens/BookmarkScreen";
import UserProfile from "../screens/UserProfileScreen";

const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search" : "ios-search-outline";
          } else if (route.name === "Bookmarks") {
            iconName = focused ? "ios-bookmark" : "ios-bookmark-outline";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "ios-person-circle"
              : "ios-person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#02474C",
        tabBarInactiveTintColor: "#181B2E",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Bookmarks" component={Bookmark} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
}
