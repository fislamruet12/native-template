import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BLOODBANK_NAVIGATION, SEARCHDONOR_NAVIGATION } from "../../../../typings/navigation";
import SearchDonorFilterScreen from "./filter";
import SearchDonorListScreen from "./searchdonorlist";
import BankScreen from "./bank";


const Stack = createNativeStackNavigator();
const BloodBankScreen=(props:any)=>{
    return(
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={BLOODBANK_NAVIGATION.BANK} component={BankScreen}/>
      
      </Stack.Navigator>
    )
}
export default BloodBankScreen