import React from 'react';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

/* ------------------------------ assets import ----------------------------- */
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function AntDesignIconTab(props: {
  name: React.ComponentProps<typeof AntDesign>['name'];
  color: string;
}) {
  return <AntDesign size={28} style={{ marginBottom: -3 }} {...props} />;
}

function MaterialCommunityIconsTab(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string
}) {
  return <MaterialCommunityIcons size={28} style={{ marginBottom: -3}} {...props} />;
}


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors[colorScheme ?? 'light'].backgroundLight },
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesignIconTab name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color }) => <AntDesignIconTab name="piechart" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Split',
          tabBarIcon: ({ color }) => <MaterialCommunityIconsTab name="call-split" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <AntDesignIconTab name="setting" color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
