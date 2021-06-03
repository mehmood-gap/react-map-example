// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
// import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './src/Screens/SplashScreen';
import SplashFrontScreen from './src/Screens/SplashFrontScreen';
import LoginScreen from './src/Screens/LoginScreen';
import ForgotScreen from './src/Screens/ForgotScreen';
import DrawerNavigationRoutes from './src/Screens/DrawerNavigationRoutes';
import HomeScreen from './src/Screens/DrawerScreens/HomeScreen';
import ProfileScreen from './src/Screens/Dashboard/ProfileScreen';
import ProjectScreen from './src/Screens/Dashboard/ProjectScreen';
import NotificationsScreen from './src/Screens/Dashboard/NotificationsScreen';
import InvoiceScreen from './src/Screens/Dashboard/InvoiceScreen';
import MeetingScreen from './src/Screens/Dashboard/MeetingScreen';
import EditProfileScreen from './src/Screens/Profile/EditProfileScreen';
import ViewProfileScreen from './src/Screens/Profile/ViewProfileScreen';
import LocationScreen from './src/Screens/Profile/LocationScreen';
import RequirementRequestScreen from './src/Screens/Project/RequirementRequestScreen';
import RevisionScreen from './src/Screens/Project/RevisionScreen';
import ViewProjectScreen from './src/Screens/Project/ViewProjectScreen';
import ProjectDetailScreen from './src/Screens/Project/ProjectDetailScreen';
import RevisionDetailScreen from './src/Screens/Project/RevisionDetailScreen';
import ViewMeetingScreen from './src/Screens/Meeting/ViewMeetingScreen';
import ScheduleMeetingScreen from './src/Screens/Meeting/ScheduleMeetingScreen';
import MeetingDetailScreen from './src/Screens/Meeting/MeetingDetailScreen';
import InvoiceDetailScreen from './src/Screens/Invoice/InvoiceDetailScreen';
import NotificationDetailScreen from './src/Screens/Notification/NotificationDetailScreen';

const Stack = createStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ViewProfileScreen"
        component={ViewProfileScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Project = () => {
  return (
    <Stack.Navigator initialRouteName="ProjectDetailScreen">
      <Stack.Screen
        name="ProjectScreen"
        component={ProjectScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RevisionScreen"
        component={RevisionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RequirementRequestScreen"
        component={RequirementRequestScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewProjectScreen"
        component={ViewProjectScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectDetailScreen"
        component={ProjectDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RevisionDetailScreen"
        component={RevisionDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Meeting = () => {
  return (
    <Stack.Navigator initialRouteName="MeetingScreen">
      <Stack.Screen
        name="MeetingScreen"
        component={MeetingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewMeetingScreen"
        component={ViewMeetingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScheduleMeetingScreen"
        component={ScheduleMeetingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MeetingDetailScreen"
        component={MeetingDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Invoice = () => {
  return (
    <Stack.Navigator initialRouteName="InvoiceScreen">
      <Stack.Screen
        name="InvoiceScreen"
        component={InvoiceScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InvoiceDetailScreen"
        component={InvoiceDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Notifications = () => {
  return (
    <Stack.Navigator initialRouteName="NotificationsScreen">
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificationDetailScreen"
        component={NotificationDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Project"
        component={Project}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Meeting"
        component={Meeting}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Invoice"
        component={Invoice}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotScreen"
        component={ForgotScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Splash = () => {
  return (
    <Stack.Navigator initialRouteName="SplashFrontScreen">
      <Stack.Screen
        name="SplashFrontScreen"
        component={SplashFrontScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        {/* SplashScreen which will come once for 2 Seconds */}
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        /> */}
        {/* Auth Navigator: Include Login and Signup */}
        {/* <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page
        {/* <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
