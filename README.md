Bottom Tab Navigation App
This project demonstrates how to implement Bottom Tab Navigation in a React Native app using React Navigation and Vector Icons.

Features
Three bottom tabs: Home, Shows, and Movies.

Each tab is linked to a separate screen component.

Dynamic icons using react-native-vector-icons/Ionicons.

Custom active and inactive tab colors.

Hidden header for a clean tab-only view.

Topics Covered
React Native Components (View, Text)

Setting up Navigation using @react-navigation/native

Bottom Tab Navigator using @react-navigation/bottom-tabs

Managing navigation container

Adding icons to tabs dynamically based on the route and focus state

Tab bar customization (colors and icon changing on focus)

Installation
Install required libraries:

bash
Copy
Edit
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npm install react-native-vector-icons
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
Wrap your app with the necessary providers (NavigationContainer).

Link vector icons if necessary (npx react-native link).

Usage
Tap on the bottom tabs to navigate between Home, Shows, and Movies.

The tab icons change based on whether the tab is active (focused) or not.
