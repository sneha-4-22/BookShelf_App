import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome, AdminScreen,
  ShowAdminScreen,ShowBookScreen,QRScannerScreen } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="AdminScreen"
          component={AdminScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ShowAdminScreen"
          component={ShowAdminScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ShowBookScreen"
          component={ShowBookScreen}
          options={{
            headerShown: false
          }}
        />
          <Stack.Screen
          name="QRScannerScreen"
          component={QRScannerScreen}
          options={{
            headerShown: false
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}