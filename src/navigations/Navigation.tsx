import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { ThemeContext } from '../context/theme/ThemeContext';

import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { CustomSectionList } from '../screens/CustomSectionList';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

const Stack = createStackNavigator();

const Navigation = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <NavigationContainer 
        theme={theme}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Animation101" component={Animation101Screen} />
          <Stack.Screen name="Animation102" component={Animation102Screen} />
          <Stack.Screen name="Switch" component={SwitchScreen} />
          <Stack.Screen name="Alerts" component={AlertScreen} />
          <Stack.Screen name="TextInputs" component={TextInputScreen} />
          <Stack.Screen name="PullToRefresh" component={PullToRefreshScreen} />
          <Stack.Screen name="CustomSectionList" component={CustomSectionList} />
          <Stack.Screen name="Modal" component={ModalScreen} />
          <Stack.Screen name="InfiniteScroll" component={InfiniteScrollScreen} />
          <Stack.Screen name="Slides" component={SlidesScreen} />
          <Stack.Screen name="ChangeThemes" component={ChangeThemeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Navigation