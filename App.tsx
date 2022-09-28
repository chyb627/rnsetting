import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import RootStack from './src/pages/RootStack';
// import { UserContextProvider } from './src/contexts/UserContext';

function App() {
  return (
    <Provider store={store}>
      {/* <UserContextProvider> */}
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      {/* </UserContextProvider> */}
    </Provider>
  );
}

export default App;
