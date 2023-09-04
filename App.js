import { View, StyleSheet } from 'react-native';

// componente do react native
import Box from './components/Box';



// componente principal do app
const App = () => {
return (
   <View style={[styles.container, styles.flexRow, styles.justifySpaceAround, styles.alignCenter]} >
    <Box size={50} color="blue" flex={1}></Box>
    <Box size={50} color="red" flex={2}></Box>
    <Box size={50} color="green" flex={3}></Box>
  </View>
);
};

const styles = StyleSheet.create({
  container: { flex: 1, 
  backgroundColor: "aliceblue"
  },
  
  flexColumn:{flexDirection: "column"},

  flexRow:{flexDirection: "row"},
  
  flexColumnReverse:{flexDirection: "column-reverse"},
  
  flexRowreverse: {flexDirection:"row-reverse"},
  
  justifyStart: {justifyContent:"flex-start"},

  justifyEnd: {justifyContent:"flex-end"},

  justifyCenter: {justifyContent: "center"},

  justifySpaceBeteween: {justifyContent: "space-beteween"},

  justifySpaceAround: {justifyContent: "space-around"},

  justifySpaceEvenly: {justifyContent: "space-evenly"},

  alignStart: {alignItems:"flex-start"},

  alignCenter: {alignItems:"center"},

  alignEnd: {alignItems:"flex-end"},

  alignStretch: {alignItems:"stretch"},
  
  

  
});

export default App;
