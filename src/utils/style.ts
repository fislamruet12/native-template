import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      color:'#000',
      fontWeight:'500'
    },
  
    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
      color:'red'
    },
  });