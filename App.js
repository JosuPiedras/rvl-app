import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import LoginComponent from './Components/loginComponent';
import SignUpComponent from './Components/signUpComponent';
import DashboardComponent from './Components/dashboardComponent';
import Context from './Context/context';
import GlobalState from './Context/GlobalState';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectViewComponent from './Components/projectViewComponent';
import NewProjectComponent from './Components/newProjectComponent';

export default class App extends React.Component {
  render() {
const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <GlobalState>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginComponent}
              options={{headerShown: false}}
            ></Stack.Screen>
            <Stack.Screen
              name="SignUp"
              component={SignUpComponent}
              options={{headerShown: false}}
            ></Stack.Screen>
            <Stack.Screen
              name="Dashboard"
              component={DashboardComponent}
              options={{
                title: 'TVL',
                headerLeft: () => (
                  <Image
                    style={{ width: 150, height: 50, marginTop: 15, marginLeft: 20, marginBottom: 5 }}
                    source={require('./assets/img/logo.png')}
                  />
                ),
                headerStyle: {
                  backgroundColor: '#121530',
                  borderBottomColor: '#121530'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold',
                }
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="Create a new project"
              component={NewProjectComponent}
              options={{
                title: 'CREATE A NEW PROJECT',
                headerStyle: {
                  backgroundColor: '#dbc921',
                  borderBottomColor: '#dbc921'
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                }
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </GlobalState>
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#473c24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10
  },
  inputView: {
    width: "80%",
    backgroundColor: "#9b8c57",
    borderRadius: 25,
    borderColor: "#ffffff",
    borderWidth: '1px',
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "#ffffff"
  },
  forgot: {
    color: "#ffffff",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fec950",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "#ffffff"
  }
});
