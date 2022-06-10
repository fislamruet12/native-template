import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SEARCHDONOR_NAVIGATION } from "../../../../typings/navigation";
import SearchDonorFilterScreen from "./filter";
import SearchDonorListScreen from "./searchdonorlist";


const Stack = createNativeStackNavigator();
const SearchDonorScreen=(props:any)=>{
    return(
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SEARCHDONOR_NAVIGATION.FILTER} component={SearchDonorFilterScreen} />
        <Stack.Screen name={SEARCHDONOR_NAVIGATION.SEARCHDONORLIST} component={SearchDonorListScreen} />
      </Stack.Navigator>
    )
}
export default SearchDonorScreen