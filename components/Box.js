import { View } from 'react-native';

// componente
const Box = (props) => {
  // estilo inline
  const boxStyle = {
    minHeight: props.size,
    minWidth: props.size,
    // fex: props.flex
    backgroundColor: props.color,
  };

  return (
    //codigo JSX
    <View style={boxStyle}></View>
  );
};

export default Box;
