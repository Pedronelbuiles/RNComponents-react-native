import 'react-native-gesture-handler';
import React from 'react'
import Navigation from './src/navigations/Navigation';
import { ThemeProvider } from './src/context/theme/ThemeContext';

const App = () => {
  return (
    <AppState>
        <Navigation />
    </AppState>
  )
}

const AppState = ({children}: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App