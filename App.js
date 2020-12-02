import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Components */
import EnquiryList from './src/components/EnquiryList';
import EnquiryDetail from './src/components/EnquiryDetail';

import { Provider } from 'react-redux';
import { store } from './src/store/Store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="EnquiryList"
            component={EnquiryList}
            options={{
              title: 'Enquiry List',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="EnquiryDetail"
            component={EnquiryDetail}
            options={{
              title: 'Enquiry Detail',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
